import { ImageBackground  } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Knob from '../knob'
import IntervalKnob from '../intervalKnob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../assets/pdb/right-knob-pannel'
const RightPannel = () => {

    const { dimension } = useContext(DimensionContext)
    
    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const functionKnob = require(`${ROOTPATH}/function-knob.png`)

    // Degrees Ranges
    const degRange = [0,360]
    const funcDegRange = [0,216]
    
    // Size
    const knobSize = dimension*(0.08)

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
            top : dimension* 0.083,
        },
        alarmKnob : {
            top : dimension* 0.12
        },
        funcKnob : {
            top : dimension* 0.185,
            transform : [{ rotateZ: '90deg' }]
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={functionKnob} rotation={zeroRotation}  degRange={degRange} size={knobSize} style={styles.zeroKnob}/>
            <Knob imagePath={functionKnob} rotation={alarmRotation}  degRange={degRange} size={knobSize} style={styles.alarmKnob}/>
            <IntervalKnob imagePath={functionKnob} rotation={funcRotation}  degRange={funcDegRange} size={knobSize} style={styles.funcKnob}/>
        </ImageBackground>
    )
}

export default RightPannel
