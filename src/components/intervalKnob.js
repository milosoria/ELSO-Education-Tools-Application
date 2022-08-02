import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { create } from '../utils/normalize'

const IntervalKnob = ({ degRange , size , style, rotation, imagePath }) => {
    const savedRotation = useSharedValue(0)
    const [minDeg, maxDeg] = degRange
    const steps = [0,36,72, 108, 144,180]

    const rotationGesture = Gesture.Rotation()
        .onUpdate((e) => {
            const degrees = (e.rotation / Math.PI) * (maxDeg - minDeg) + savedRotation.value
            rotation.value = Math.ceil(Math.min(Math.max(minDeg, degrees), maxDeg))
        })
        .onEnd(() => {
            rotation.value = steps.reduce((a, b) => Math.abs(b - rotation.value) < Math.abs(a -rotation.value) ? b : a)
            savedRotation.value =  rotation.value
        })

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
