import { Dimensions, Image, ImageBackground, Text, View } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import zeroPad from '../../../utils/zero-padding'
import { create } from '../../../utils/normalize'
import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import FunctionsContext from '../../../contexts/functionalitiesContext'
import { useContext } from 'react'

const ROOTPATH = '../../../assets/pdb/center-display-pannel'
const DELAYMAP = {
    systolic: 4000,
    mean: 5000,
    diastolic: 3000,
}

const CenterPannel = ({ dimension }) => {
    const {
        alarmInterval,
        setAlarmInterval,
        displayValue,
        inInterval,
        functionType,
    } = useContext(FunctionsContext)

    const { height } = Dimensions.get('window')
    const [alarmActive, setAlarmActive] = useState(false)
    const [display, setDisplay] = useState(
        Object.keys(DELAYMAP).includes(functionType) ? displayValue : ''
    )
    const [ledOn, setLedOn] = useState(false)
    const [sound, setSound] = useState()
    const [mode, setMode] = useState('')
    const delay = DELAYMAP[functionType]

    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const alarmPath = alarmActive
        ? require(`${ROOTPATH}/on-alarm.png`)
        : require(`${ROOTPATH}/off-alarm.png`)
    const ledPath = ledOn
        ? require(`${ROOTPATH}/on-led.png`)
        : require(`${ROOTPATH}/off-led.png`)
    const leverSoundPath = require(`${ROOTPATH}/lever.mp3`)
    const alarmSoundPath = require(`${ROOTPATH}/alarm.mp3`)
    const alarmLowValue =
        functionType == 'off' ? '' : zeroPad(alarmInterval[0], 3)
    const alarmHighValue =
        functionType == 'off' ? '' : zeroPad(alarmInterval[1], 3)

    // TODO: change these useEffect
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
        // If the value escapes the interval, then the led must start blinking
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
        backgroundImage: {
            resizeMode: 'stretch',
        },
        background: {
            alignItems: 'center',
            shadowRadius: 5,
            shadowOpacity: 0.3,
            height: dimension * 0.55,
            width: dimension * 0.4,
        },
        container: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        displayContainer: {
            flex: 1,
            flexDirection: 'column',
            marginTop: dimension * 0.11,
            height: dimension * 0.3,
        },
        zeroDisplay: {
            alignSelf: 'flex-start',
            paddingRight: functionType.includes('alarm') ? 0 : 15,
            height: dimension * 0.1,
            width: dimension * 0.3,
            flexDirection: 'column',
            alignItems: functionType.includes('alarm') ? 'center' : 'flex-end',
        },
        zeroDisplayText: {
            fontFamily: 'Digital-Numbers',
            fontSize: Math.floor(dimension * 0.08),
            opacity: 0.45,
        },
        alarmDisplay: {
            marginBottom: dimension * 0.035,
            flex: 1,
            alignSelf: 'center',
            width: dimension * 0.17,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        alarmDisplayBox1: {
            flex: 1,
            alignItems: 'flex-start',
        },
        alarmDisplayBox2: {
            flex: 1,
            alignItems: 'center',
            marginLeft: dimension * 0.003,
        },
        alarmDisplayBox3: {
            flex: 1,
            alignItems: 'flex-end',
        },
        alarmDisplayText: {
            fontFamily: 'Digital-Numbers',
            fontSize:
                height > 1200
                    ? Math.floor(dimension * 0.015) - 5
                    : Math.floor(dimension * 0.015),
            opacity: 0.45,
        },
        alarm: {
            alignSelf: 'flex-end',
            marginBottom: dimension * 0.016,
            marginRight: dimension * 0.054,
            flexDirection: 'row',
            resizeMode: 'stretch',
            height: dimension * 0.08,
            width: dimension * 0.125,
        },
        ledContainer: {
            flex: 1,
            top: dimension * 0.01,
            left: dimension * 0.005,
            justifyContent: 'center',
        },
        led: {
            resizeMode: 'stretch',
            height: dimension * 0.08,
            width: dimension * 0.125,
            marginBottom: dimension * 0.03,
            right: dimension * 0.005,
        },
        pressable: {
            flex: 1,
            height: dimension * 0.06,
            width: dimension * 0.06,
        },
    })

    return (
        <ImageBackground
            source={backgroundPath}
            style={styles.background}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <View style={styles.zeroDisplay}>
                        <Text style={styles.zeroDisplayText}>
                            {typeof display == 'string'
                                ? display
                                : zeroPad(display)}
                        </Text>
                    </View>
                    <View style={styles.alarmDisplay}>
                        <View style={styles.alarmDisplayBox1}>
                            <Text style={styles.alarmDisplayText}>
                                {alarmLowValue}
                            </Text>
                        </View>
                        <View style={styles.alarmDisplayBox2}>
                            <Text style={styles.alarmDisplayText}>{mode}</Text>
                        </View>
                        <View style={styles.alarmDisplayBox3}>
                            <Text style={styles.alarmDisplayText}>
                                {alarmHighValue}
                            </Text>
                        </View>
                    </View>
                </View>
                <ImageBackground source={alarmPath} style={styles.alarm}>
                    <View style={styles.ledContainer}>
                        <Image source={ledPath} style={styles.led} />
                    </View>
                    <GestureRecognizer
                        onSwipeDown={handleSwipeDown}
                        onSwipeUp={handleSwipeUp}
                    >
                        <View style={styles.pressable} />
                    </GestureRecognizer>
                </ImageBackground>
            </View>
        </ImageBackground>
    )
}

export default CenterPannel
