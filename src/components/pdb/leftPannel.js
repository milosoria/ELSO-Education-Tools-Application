import { ImageBackground  } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Knob from '../knob'
import { create } from '../../utils/normalize'

const LeftPannel = ({ dimension }) => {

    // Images' Paths
    const backgroundPath = require('../../assets/pdb/left-lock-pannel/background.png')
    const knobPath = require('../../assets/pdb/left-lock-pannel/big-knob.png')

    const degRange = [0,72]
    const knobSize = dimension*(0.16)

    const rotation = useSharedValue(0)

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
            marginRight : dimension*0.01
        },
        knob : {
            top : dimension*0.20
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={knobPath} rotation={rotation} degRange={degRange} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default LeftPannel
