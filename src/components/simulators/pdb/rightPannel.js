import { ImageBackground, View } from 'react-native'
import IntervalKnob from '../intervalKnob'
import FunctionKnob from '../functionKnob'
import { create } from '../../../utils/normalize'
import DimensionContext from '../../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../../assets/pdb/right-knob-pannel'
const RightPannel = () => {

    const { maxDimension } = useContext(DimensionContext)
    const backgroundPath = require(`${ROOTPATH}/background.png`)

    // Props
    const zeroProps = {
        degRange : [0, 360],
        step : 5,
        size : maxDimension * (0.09),
        soundPath : require(`${ROOTPATH}/zero-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'zero'
    }
    const alarmProps = {
        degRange : [0, 360],
        step : 15,
        size : maxDimension * (0.09),
        soundPath : require(`${ROOTPATH}/alarm-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'alarm'
    }
    const funcProps = {
        degRange : [0, 216],
        step : 36,
        size : maxDimension * (0.09),
        soundPath : require(`${ROOTPATH}/func-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'function'
    }


    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : maxDimension * 0.55,
            width : maxDimension * 0.2,
            marginLeft : maxDimension * 0.015
        },
        container : {
            flexDirection : 'column',
            top : maxDimension * 0.067,
        },
        zeroKnob : {
            resizeMode : 'stretch',
        },
        alarmKnob : {
            bottom : maxDimension * 0.015
        },
        funcKnob : {
            top : maxDimension * 0.008,
            transform : [{ rotateZ: '90deg' }]
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <View style={styles.container}>
                <IntervalKnob {...zeroProps} style={styles.zeroKnob} />
                <IntervalKnob {...alarmProps} style={styles.alarmKnob} />
                <FunctionKnob {...funcProps} style={styles.funcKnob} />
            </View>
        </ImageBackground>
    )
}

export default RightPannel
