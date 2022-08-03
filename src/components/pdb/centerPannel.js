import { Image, ImageBackground, Text,View } from 'react-native'
import GestureRecognizer  from 'react-native-swipe-gestures'
import { create } from '../../utils/normalize'
import { useState } from 'react'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const CenterPannel = () => {

    const { dimension } = useContext(DimensionContext)
    const [active, setActive] = useState(false)
    // Images' Paths
    const backgroundPath = require('../../assets/pdb/center-display-pannel/background.png')
    const alarmPath = active ? require('../../assets/pdb/center-display-pannel/on-alarm.png') : require('../../assets/pdb/center-display-pannel/off-alarm.png')


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
        pressable : {
            height : dimension* 0.06,
            width : dimension* 0.04,
            top : dimension* 0.21,
            left : dimension* 0.065
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
            <GestureRecognizer onSwipeDown={()=> setActive(false)} onSwipeUp={()=>setActive(true)}>
                <View style={styles.pressable}/>
            </GestureRecognizer>
        </ImageBackground>
    )
}

export default CenterPannel
