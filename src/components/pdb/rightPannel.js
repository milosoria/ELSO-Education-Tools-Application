import { ImageBackground  } from 'react-native'
import Knob from '../knob'
import IntervalKnob from '../intervalKnob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../assets/pdb/right-knob-pannel'
const RightPannel = () => {

    const { dimension } = useContext(DimensionContext)
    
    // Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const funcKnobPath = require(`${ROOTPATH}/function-knob.png`)
    const alarmSoundPath = require(`${ROOTPATH}/alarm-knob.mp3`)
    const funcSoundPath =  require(`${ROOTPATH}/func-knob.mp3`)

    // Degrees Ranges
    const degRange = [0,360]
    const funcDegRange = [0,216]
    
    // Steps for intervalKnob
    const stepsFuncKnob = [0,36,72, 108, 144,180,216]
    const stepsAlarmKnob = new Array(25).fill(0).map((value,i)=> value + 15*i)

    // Size
    const knobSize = dimension*(0.08)


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
            top : dimension* 0.182,
            transform : [{ rotateZ: '90deg' }]
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={funcKnobPath} degRange={degRange} size={knobSize} style={styles.zeroKnob}/>
            <IntervalKnob steps={stepsAlarmKnob} soundPath={alarmSoundPath} imagePath={funcKnobPath} degRange={degRange} size={knobSize} style={styles.alarmKnob}/>
            <IntervalKnob steps={stepsFuncKnob} soundPath={funcSoundPath} imagePath={funcKnobPath} degRange={funcDegRange} size={knobSize} style={styles.funcKnob}/>
        </ImageBackground>
    )
}

export default RightPannel
