import { ImageBackground } from 'react-native'
import IntervalKnob from '../intervalKnob'
import FunctionKnob from '../functionKnob'
import { create } from '../../../utils/normalize'
import DimensionContext from '../../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../../assets/pdb/right-knob-pannel'
const RightPannel = () => {

    const { minDimension } = useContext(DimensionContext)
    const backgroundPath = require(`${ROOTPATH}/background.png`)

    // Props
    const zeroProps = {
        degRange : [0, 360],
        step : 5,
        size : minDimension * (0.08),
        soundPath : require(`${ROOTPATH}/zero-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'zero'
    }
    const alarmProps = {
        degRange : [0, 360],
        step : 15,
        size : minDimension * (0.08),
        soundPath : require(`${ROOTPATH}/alarm-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'alarm'
    }
    const funcProps = {
        degRange : [0, 216],
        step : 36,
        size : minDimension * (0.08),
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
            height : minDimension * 0.485,
            width : minDimension * 0.18,
            marginLeft : minDimension * 0.01
        },
        zeroKnob : {
            resizeMode : 'stretch',
            top : minDimension * 0.083,
        },
        alarmKnob : {
            top : minDimension * 0.12
        },
        funcKnob : {
            top : minDimension * 0.182,
            transform : [{ rotateZ: '90deg' }]
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <IntervalKnob {...zeroProps} style={styles.zeroKnob} />
            <IntervalKnob {...alarmProps} style={styles.alarmKnob} />
            <FunctionKnob {...funcProps} style={styles.funcKnob} />
        </ImageBackground>
    )
}

export default RightPannel
