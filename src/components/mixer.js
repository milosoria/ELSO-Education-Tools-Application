import { ImageBackground  } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Knob from '../components/knob'
import { create } from '../utils/normalize'

const Mixer = ({ dimension }) => {

    // Images' Paths
    const backgroundPath = require('../assets/Mixer/background.png')
    const knobPath = require('../assets/Mixer/knob.png')

    const degRange = [0,248]
    const knobSize = dimension*(0.25)

    const rotation = useSharedValue(0)

    const styles = create({
        backgroundImage : {
            resizeMode : 'contain',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension*0.6,
            width : dimension*0.25,
            marginTop : dimension*0.25,
            marginLeft : dimension*0.005
        },
        knob : {
            position : 'absolute',
            top : dimension* 0.165
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={knobPath} rotation={rotation} minDeg={degRange[0]} maxDeg={degRange[1]} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Mixer
