import { View } from 'react-native'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { create } from '../../utils/normalize'
import { useContext, useEffect, useState } from 'react'
import FunctionsContext from '../../contexts/functionalitiesContext'
import { Audio } from 'expo-av'

const DEFAULTALARMINTERVAL = [-30, 30]
const DEFAULTDISPLAYVALUE = 15
const DISPLAYRANGE = [-100, 344]
const ALARMLOWRANGE = [-100, 14]
const ALARMHIGHMAX = 500

const IntervalKnob = ({ step, type, soundPath, degRange, size, style, imagePath }) => {
    const {
        unblocked,
        alarmInterval,
        setAlarmInterval,
        setDisplayValue,
        setInInterval,
        functionType,
    } = useContext(FunctionsContext)
    const rotation = useSharedValue(0)
    const savedRotation = useSharedValue(0)
    const [minDeg, maxDeg] = degRange
    const [sound, setSound] = useState()

    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined
    }, [sound])

    useEffect(() => {
        if (functionType.includes('alarm')) {
            savedRotation.value = 0
        }
    }, [functionType])

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(soundPath)
        setSound(sound)
        await sound.playAsync()
    }

    const rotationGesture = Gesture.Rotation()
        .onUpdate((e) => {
            let degrees = ((e.rotation / 5) / Math.PI) * (maxDeg - minDeg) + savedRotation.value
            // if type is not unblocked and the function selected is not off, then update value
            if (type == unblocked && unblocked !== 'none') rotation.value = Math.ceil(degrees)
        })
        .onEnd(() => {
            const inferior = rotation.value - step * Math.ceil(rotation.value / step) > step * Math.floor(rotation.value / step) - rotation.value
            rotation.value = inferior ? step * Math.ceil(rotation.value / step) : step * Math.floor(rotation.value / step)
            savedRotation.value = rotation.value
            if (type == unblocked && unblocked !== 'none') runOnJS(playSound)()
        })

    // Manage rotation variations
    useEffect(() => {
        // TODO: this is not being called for some reason
        const delta = savedRotation.value / step
        // if this knob is the alarm one
        if (type == 'alarm') {
            // if the chosen function is alarmLow or high
            if (functionType == 'alarmLow') {
                const newLowValue = DEFAULTALARMINTERVAL[0] + delta
                if (ALARMLOWRANGE[0] <= newLowValue && newLowValue <= ALARMLOWRANGE[1] && newLowValue < alarmInterval[1]) {
                    // if the new value is in alarm low range and below the alarm high value
                    setAlarmInterval([newLowValue, alarmInterval[1]])
                } else {
                    if (newLowValue < ALARMLOWRANGE[0]) {
                        // if  its lower than the left limit
                        // 1. set the value to the left limit of the alarm low range
                        // 2. stop subtracting rotation to the values
                        setAlarmInterval([ALARMLOWRANGE[0], alarmInterval[1]])
                        savedRotation.value = (ALARMLOWRANGE[0] - DEFAULTALARMINTERVAL[0]) * step
                        rotation.value = (ALARMLOWRANGE[0] - DEFAULTALARMINTERVAL[0]) * step
                    } else if (newLowValue > ALARMLOWRANGE[1]) {
                        // if  its greater than the right limit
                        // 1. set the value to the right limit of the alarm low range
                        // 2. stop adding rotation to the values
                        setAlarmInterval([ALARMLOWRANGE[1], alarmInterval[1]])
                        savedRotation.value = (ALARMLOWRANGE[1] - DEFAULTALARMINTERVAL[0]) * step
                        rotation.value = (ALARMLOWRANGE[1] - DEFAULTALARMINTERVAL[0]) * step
                    }
                }
            } else if (functionType == 'alarmHigh') {
                const newHighValue = DEFAULTALARMINTERVAL[1] + delta
                if (alarmInterval[0] < newHighValue && newHighValue <= ALARMHIGHMAX) {
                    // if the new value is greater than alarm low value and lower than alarm high
                    // maximum
                    setAlarmInterval([alarmInterval[0], newHighValue])
                } else {
                    if (newHighValue < alarmInterval[0]) {
                        // if  its lower than the left limit
                        // 1. set the value to the left limit of the alarm interval 
                        // 2. stop subtracting rotation to the values
                        setAlarmInterval([alarmInterval[0], alarmInterval[0] - 1])
                        savedRotation.value = (alarmInterval[0] - DEFAULTALARMINTERVAL[1]) * step
                        rotation.value = (alarmInterval[0] - DEFAULTALARMINTERVAL[1]) * step
                    } else if (newHighValue > ALARMHIGHMAX) {
                        // if  its greater than the right limit
                        // 1. set the value to the alarm high maximum
                        // 2. stop adding rotation to the values
                        setAlarmInterval([alarmInterval[0], ALARMHIGHMAX])
                        savedRotation.value = (ALARMHIGHMAX - DEFAULTALARMINTERVAL[1]) * step
                        rotation.value = (ALARMHIGHMAX - DEFAULTALARMINTERVAL[1]) * step
                    }
                }
            }
        } else {
            // if it is the zero knob
            const newDisplayValue = DEFAULTDISPLAYVALUE + delta
            // Check if the new display value is in the alarm interval
            if (newDisplayValue < alarmInterval[0] || newDisplayValue > alarmInterval[1]) {
                setInInterval(false)
            } else {
                setInInterval(true)
            }

            if (DISPLAYRANGE[0] <= newDisplayValue && newDisplayValue <= DISPLAYRANGE[1]) {
                // if the new display value is inside the display range, we set it 
                setDisplayValue(newDisplayValue)
            } else {
                if (newDisplayValue < DISPLAYRANGE[0]) {
                    // if  its lower than the left limit
                    // 1. set the display value to the left limit
                    // 2. stop subtracting rotation to the values
                    setDisplayValue(DISPLAYRANGE[0])
                    savedRotation.value = (DISPLAYRANGE[0] - DEFAULTDISPLAYVALUE) * step
                    rotation.value = (DISPLAYRANGE[0] - DEFAULTDISPLAYVALUE) * step
                } else if (newDisplayValue > DISPLAYRANGE[1]) {
                    // if  its greater than the right limit
                    // 1. set the display value to the right limit
                    // 2. stop adding rotation to the values
                    setDisplayValue(DISPLAYRANGE[1])
                    savedRotation.value = (DISPLAYRANGE[1] - DEFAULTDISPLAYVALUE) * step
                    rotation.value = (DISPLAYRANGE[1] - DEFAULTDISPLAYVALUE) * step
                }
            }
        }

    }, [savedRotation.value, functionType])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform : [{ rotateZ: `${rotation.value}deg` }],
        }
    })

    const styles = create({
        container : {
            shadowOffset : { width: size / 30, height: 5 },
            shadowRadius : 3,
            shadowOpacity : 0.3,
            alignItems : 'center',
            width : size,
            height : size,
            borderRadius : size / 2
        },
        knobImage : {
            width : size,
            height : size,
            borderRadius : size / 2,
            resizeMode : 'stretch'
        }
    })

    return (
        <GestureDetector gesture={rotationGesture}>
            <View
                style={[styles.container, style]}
            >
                <Animated.Image
                    style={[
                        styles.knobImage,
                        animatedStyle,
                    ]}
                    source={imagePath}
                />
            </View>
        </GestureDetector>
    )
}
export default IntervalKnob
