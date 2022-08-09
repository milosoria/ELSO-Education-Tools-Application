import { Image, ImageBackground, Text,View } from 'react-native'
import GestureRecognizer  from 'react-native-swipe-gestures'
import zeroPad from '../../utils/zero-padding'
import { create } from '../../utils/normalize'
import { useEffect, useState } from 'react'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'
import { Audio } from 'expo-av'
import FunctionsContext from '../../contexts/functionalitiesContext'

const ROOTPATH = '../../assets/pdb/center-display-pannel'

const CenterPannel = () => {
    const {
        alarmInterval,
        setAlarmInterval,
        displayValue,
        inInterval,
        functionType,
    } = useContext(FunctionsContext)
    const { dimension } = useContext(DimensionContext)
    const [alarmActive,setAlarmActive] = useState(false)
    const [display, setDisplay] = useState('')
    const [ledOn, setLedOn] = useState(false)
    const [sound,setSound] = useState()
    const [mode,setMode] = useState('')
    
    // La palanca solo sirve para mutear o activar la alarma
    // El led actua igual que el beep de alarma pero de forma visual
    // 1.Independientemente del estado de la palanca, led parpadea solo si el valor se sale del intervalo
    // 2.Si la palanca esta arriba, entonces suena del beep de la alarma 

    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const alarmPath = alarmActive ? require(`${ROOTPATH}/on-alarm.png`) : require(`${ROOTPATH}/off-alarm.png`)
    const ledPath = ledOn ? require(`${ROOTPATH}/on-led.png`) : require(`${ROOTPATH}/off-led.png`)
    const leverSoundPath = require(`${ROOTPATH}/lever.mp3`)
    const alarmSoundPath = require(`${ROOTPATH}/alarm.mp3`)
    const alarmLowValue = functionType == 'off'? '': zeroPad(alarmInterval[0],3)
    const alarmHighValue = functionType == 'off'? '': zeroPad(alarmInterval[1],3)


    useEffect(()=>{
        if (functionType == 'off') {
            setMode('')
            setDisplay('')
        } else if (functionType.includes('alarm')){
            setMode(functionType == 'alarmLow'? '<---': '--->')
            setDisplay('----')
            setAlarmInterval(alarmInterval)
        } else {
            setMode(functionType.toUpperCase().slice(0,3))
            setDisplay(displayValue) 
        }
    },[functionType,displayValue])

    useEffect(()=>{
        if (!inInterval) {
            let state = true
            setLedOn(state)
            const id = setInterval(()=>{
                if (alarmActive) {
                    playSound(alarmSoundPath)
                } 
                setLedOn(!state)
                state  = !state
            },1000)
            return () => clearInterval(id)
        } else {
            setLedOn(false)
        }
    },[alarmActive, inInterval])

    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined
    }, [sound])


    const playSound = async (soundPath) => {
        const { sound } = await Audio.Sound.createAsync(soundPath)
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
            height : dimension*0.485,
            width : dimension*0.35,
        },
        alarm : {
            resizeMode : 'stretch',
            height : dimension* 0.06,
            width : dimension* 0.1,
            top : dimension* 0.275,
            left : dimension* 0.04
        },
        led : {
            resizeMode : 'stretch',
            height : dimension* 0.06,
            width : dimension* 0.1,
            top : dimension* 0.215,
            left : dimension* 0.04
        },
        pressable : {
            height : dimension* 0.06,
            width : dimension* 0.05,
            top : dimension* 0.15,
            left : dimension* 0.065,
        },
        zeroDisplay : {
            top : dimension*0.075,
            marginRight : functionType.includes('alarm')? 0: 15,
            height : dimension * 0.1,
            width : dimension* 0.25,
            flexDirection : 'column',
            alignItems : functionType.includes('alarm')? 'center': 'flex-end'
        },
        zeroDisplayText : {
            fontFamily : 'Digital-Numbers',
            fontSize : 65,
            opacity : 0.5
        },
        alarmDisplay : {
            top : dimension*0.15,
            height : dimension * 0.04,
            width : dimension* 0.16,
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
            marginLeft : 8
        },
        alarmDisplayBox3 : {
            flex : 1,
            alignItems : 'flex-end'
        },
        alarmDisplayText : {
            fontFamily : 'Digital-Numbers',
            fontSize : 12,
            opacity : 0.5
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <View style={styles.zeroDisplay}>
                <Text style={styles.zeroDisplayText}>{typeof display == 'string'? display : zeroPad(display)}</Text>
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
            <Image source={alarmPath} style={styles.alarm}/>
            <Image source={ledPath} style={styles.led}/>
            <GestureRecognizer  onSwipeDown={handleSwipeDown} onSwipeUp={handleSwipeUp}>
                <View style={styles.pressable}/>
            </GestureRecognizer>
        </ImageBackground>
    )
}

export default CenterPannel
