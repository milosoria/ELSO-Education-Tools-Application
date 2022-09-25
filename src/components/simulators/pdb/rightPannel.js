import { ImageBackground, View } from 'react-native'
import IntervalKnob from '../intervalKnob'
import FunctionKnob from '../functionKnob'
import { create } from '../../../utils/normalize'

const ROOTPATH = '../../../assets/pdb/right-knob-pannel'
const RightPannel = ({ dimension }) => {

    const size = dimension * (0.09)
    const knobFrameSize = size + dimension * 0.06
    const backgroundPath = require(`${ROOTPATH}/background.png`)

    // Props
    const zeroProps = {
        degRange : [0, 360],
        step : 5,
        size : size,
        soundPath : require(`${ROOTPATH}/zero-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'zero',
        knobFrameSize : knobFrameSize
    }
    const alarmProps = {
        degRange : [0, 360],
        step : 15,
        size : size,
        soundPath : require(`${ROOTPATH}/alarm-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'alarm',
        knobFrameSize : knobFrameSize
    }
    const funcProps = {
        degRange : [0, 216],
        step : 36,
        size : size,
        soundPath : require(`${ROOTPATH}/func-knob.mp3`),
        imagePath : require(`${ROOTPATH}/function-knob.png`),
        type : 'function',
        knobFrameSize : knobFrameSize
    }


    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            marginLeft : dimension * 0.015,
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension * 0.55,
            width : dimension * 0.2,
        },
        container : {
            flexDirection : 'column',
            top : dimension * 0.065,
        },
        zeroKnob : {
            resizeMode : 'stretch',
        },
        alarmKnob : {
            bottom : dimension * 0.015
        },
        funcKnob : {
            bottom : dimension * 0.003,
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
