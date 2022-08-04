import { ImageBackground  } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Knob from '../knob'
import IntervalKnob from '../intervalKnob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const RightPannel = () => {

    const { dimension } = useContext(DimensionContext)
    
    // Images' Paths
    const backgroundPath = require('../../assets/pdb/right-knob-pannel/background.png')
    const zeroKnobPath = require('../../assets/pdb/right-knob-pannel/zero-knob.png')
    const alarmFuncKnobPath = require('../../assets/pdb/right-knob-pannel/alarm-and-function-knob.png')

    // Degrees Ranges
    const degRange = [0,360]
    const funcDegRange = [0,216]
    
    // Size
    const zeroKnobSize = dimension*(0.09)
    const alarmFuncKnobSize = dimension*(0.08)

    // Rotation Shared Values
    const zeroRotation = useSharedValue(0)
    const alarmRotation = useSharedValue(0)
    const funcRotation = useSharedValue(0)

    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension*0.485,
            width : dimension*0.18,
            marginLeft : dimension*0.01
        },
        zeroKnob : {
            resizeMode : 'stretch',
            top : dimension* 0.080,
        },
        alarmKnob : {
            top : dimension* 0.105
        },
        funcKnob : {
            top : dimension* 0.175,
            transform : [{ rotateZ: '90deg' }]
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={zeroKnobPath} rotation={zeroRotation}  degRange={degRange} size={zeroKnobSize} style={styles.zeroKnob}/>
            <Knob imagePath={alarmFuncKnobPath} rotation={alarmRotation}  degRange={degRange} size={alarmFuncKnobSize} style={styles.alarmKnob}/>
            <IntervalKnob imagePath={alarmFuncKnobPath} rotation={funcRotation}  degRange={funcDegRange} size={alarmFuncKnobSize} style={styles.funcKnob}/>
        </ImageBackground>
    )
}

export default RightPannel
