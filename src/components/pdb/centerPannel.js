import { Image, ImageBackground, Text,View } from 'react-native'
import GestureRecognizer  from 'react-native-swipe-gestures'
import { create } from '../../utils/normalize'
import { useEffect, useState } from 'react'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'
import {Audio} from 'expo-av'

const ROOTPATH = '../../assets/pdb/center-display-pannel'

const CenterPannel = () => {
    const { dimension } = useContext(DimensionContext)
    const [active, setActive] = useState(false)
    const [ledOn, setLedOn] = useState(false)
    const [sound,setSound] = useState()

    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const alarmPath = active ? require(`${ROOTPATH}/on-alarm.png`) : require(`${ROOTPATH}/off-alarm.png`)
    const ledPath = ledOn ? require(`${ROOTPATH}/on-led.png`) : require(`${ROOTPATH}/off-led.png`)
    const leverSoundPath = require(`${ROOTPATH}/lever.mp3`)

    const handleSwipeDown = () => {
        setActive(false)
        playSound()
    }

    const handleSwipeUp = () => {
        setActive(true)
        playSound()
    }

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(leverSoundPath)
        setSound(sound)
        await sound.playAsync()
    }

    useEffect(() => {
        return sound ? () => sound.unloadAsync() : undefined
    }, [sound])


    useEffect(()=>{
        if (active) {
            let state = true
            setLedOn(state)
            const id = setInterval(()=>{
                setLedOn(!state)
                state  = !state
            },1000)
            return () => clearInterval(id)
        } else {
            setLedOn(false)
        } 
    },[active])

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
            marginRight : 10,
            height : dimension * 0.1,
            width : dimension* 0.25,
            flexDirection : 'column',
            alignItems : 'flex-end'
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
            alignItems : 'flex-start'
        },
        alarmDisplayBox2 : {
            flex : 1,
            alignItems : 'center'
        },
        alarmDisplayBox : {
            flex : 1,
            alignItems : 'flex-end'
        },
        alarmDisplayText : {
            fontFamily : 'Digital-Numbers',
            fontSize : 15,
            opacity : 0.5
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <View style={styles.zeroDisplay}>
                <Text style={styles.zeroDisplayText}>-2.09</Text>
            </View>
            <View style={styles.alarmDisplay}>
                <View style={styles.alarmDisplayBox1}>
                    <Text style={styles.alarmDisplayText}>2.09</Text>
                </View>
                <View style={styles.alarmDisplayBox2}>
                    <Text style={styles.alarmDisplayText}>SYST</Text>
                </View>
                <View style={styles.alarmDisplayBox3}>
                    <Text style={styles.alarmDisplayText}>+000</Text>
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
