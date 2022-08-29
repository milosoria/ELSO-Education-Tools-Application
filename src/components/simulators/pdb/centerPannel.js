import { Image, ImageBackground, Text, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import zeroPad from '../../../utils/zero-padding'
import { create } from '../../../utils/normalize'
import { useEffect, useState } from 'react'
import DimensionContext from '../../../contexts/dimensionContext'
import { useContext } from 'react'
import { Audio } from 'expo-av'
import FunctionsContext from '../../../contexts/functionalitiesContext'

const ROOTPATH = '../../../assets/pdb/center-display-pannel'
const DELAYMAP = {
    systolic : 4000,
    mean : 5000,
    diastolic : 3000
}

const CenterPannel = () => {
    const {
        alarmInterval,
        setAlarmInterval,
        displayValue,
        inInterval,
        functionType,
    } = useContext(FunctionsContext)

    const { minDimension } = useContext(DimensionContext)
    const [alarmActive, setAlarmActive] = useState(false)
    const [display, setDisplay] = useState(Object.keys(DELAYMAP).includes(functionType) ? displayValue : '')
    const [ledOn, setLedOn] = useState(false)
    const [sound, setSound] = useState()
    const [mode, setMode] = useState('')
    const delay = DELAYMAP[functionType]

    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const alarmPath = alarmActive ? require(`${ROOTPATH}/on-alarm.png`) : require(`${ROOTPATH}/off-alarm.png`)
    const ledPath = ledOn ? require(`${ROOTPATH}/on-led.png`) : require(`${ROOTPATH}/off-led.png`)
    const leverSoundPath = require(`${ROOTPATH}/lever.mp3`)
    const alarmSoundPath = require(`${ROOTPATH}/alarm.mp3`)
    const alarmLowValue = functionType == 'off' ? '' : zeroPad(alarmInterval[0], 3)
    const alarmHighValue = functionType == 'off' ? '' : zeroPad(alarmInterval[1], 3)

    useEffect(() => {
        if (functionType == 'off') {
            setMode('')
            setDisplay('')
        } else if (functionType.includes('alarm')) {
            setMode(functionType == 'alarmLow' ? '<---' : '--->')
            setDisplay('----')
            setAlarmInterval(alarmInterval)
        } else {
            setMode(functionType.toUpperCase().slice(0, 4))
            if (delay) {
                const id = setInterval(() => {
                    setDisplay(displayValue)
                }, delay)
                return () => clearInterval(id)
            } else {
                setDisplay(displayValue)
            }
        }
    }, [functionType, displayValue])

    useEffect(() => {
        // If the value escapes the interval, then the led must turn blink
        if (!inInterval) {
            // if the alarm is active, play the sound on loop
            if (alarmActive) {
                playSound(alarmSoundPath, true)
            }
            let state = true
            setLedOn(state)
            const id = setInterval(() => {
                setLedOn(!state)
                state = !state
            }, 1000)

            return () => clearInterval(id)
        } else {
            if (alarmActive && sound) sound.unloadAsync()
            setLedOn(false)
        }
    }, [alarmActive, inInterval])

    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined
    }, [sound])

    const playSound = async (soundPath, loop = false) => {
        const { sound } = await Audio.Sound.createAsync(soundPath)
        if (loop) await sound.setIsLoopingAsync(true)
        setSound(sound)
        await sound.playAsync()
    }

    const handleSwipeDown = () => {
        setAlarmActive(false)
        playSound(leverSoundPath)
    }

    const handleSwipeUp = () => {
        setAlarmActive(true)
        playSound(leverSoundPath)
    }

    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : minDimension * 0.485,
            width : minDimension * 0.35,
        },
        alarm : {
            resizeMode : 'stretch',
            height : minDimension * 0.06,
            width : minDimension * 0.1,
            top : minDimension * 0.275,
            left : minDimension * 0.04
        },
        led : {
            resizeMode : 'stretch',
            height : minDimension * 0.06,
            width : minDimension * 0.1,
            top : minDimension * 0.215,
            left : minDimension * 0.04
        },
        pressable : {
            height : minDimension * 0.06,
            width : minDimension * 0.05,
            top : minDimension * 0.15,
            left : minDimension * 0.065,
        },
        zeroDisplay : {
            top : minDimension * 0.075,
            marginRight : functionType.includes('alarm') ? 0 : 15,
            height : minDimension * 0.1,
            width : minDimension * 0.25,
            flexDirection : 'column',
            alignItems : functionType.includes('alarm') ? 'center' : 'flex-end'
        },
        zeroDisplayText : {
            fontFamily : 'Digital-Numbers',
            fontSize : Math.floor(minDimension * 0.072),
            opacity : 0.45
        },
        alarmDisplay : {
            top : minDimension * 0.15,
            height : minDimension * 0.04,
            width : minDimension * 0.16,
            flexDirection : 'row',
            justifyContent : 'center',
            alignItems : 'center'
        },
        alarmDisplayBox1 : {
            flex : 1,
            alignItems : 'flex-start',
        },
        alarmDisplayBox2 : {
            flex : 1,
            alignItems : 'center',
            marginLeft : minDimension * 0.003
        },
        alarmDisplayBox3 : {
            flex : 1,
            alignItems : 'flex-end'
        },
        alarmDisplayText : {
            fontFamily : 'Digital-Numbers',
            fontSize : Math.floor(minDimension * 0.014),
            opacity : 0.45
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <View style={styles.zeroDisplay}>
                <Text style={styles.zeroDisplayText}>{typeof display == 'string' ? display : zeroPad(display)}</Text>
            </View>
            <View style={styles.alarmDisplay}>
                <View style={styles.alarmDisplayBox1}>
                    <Text style={styles.alarmDisplayText}>{alarmLowValue}</Text>
                </View>
                <View style={styles.alarmDisplayBox2}>
                    <Text style={styles.alarmDisplayText}>{mode}</Text>
                </View>
                <View style={styles.alarmDisplayBox3}>
                    <Text style={styles.alarmDisplayText}>{alarmHighValue}</Text>
                </View>
            </View>
            <Image source={alarmPath} style={styles.alarm} />
            <Image source={ledPath} style={styles.led} />
            <GestureRecognizer onSwipeDown={handleSwipeDown} onSwipeUp={handleSwipeUp}>
                <View style={styles.pressable} />
            </GestureRecognizer>
        </ImageBackground>
    )
}

export default CenterPannel
