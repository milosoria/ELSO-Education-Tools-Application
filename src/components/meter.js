import { Image,ImageBackground } from 'react-native'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Knob from '../components/knob'
import { create } from '../utils/normalize'

const Meter = ({ type,dimension }) => {

    const backgroundPath = require('../assets/background.png')
    const bubblePath = require('../assets/bubble.png')
    const knobPath = require('../assets/knob.png')
    const tagsPath =  type === 'ml-min' ? require('../assets/ml-min/tags.png') : require('../assets/LPM/tags.png')

    const imageLeftOffset =  type === 'ml-min' ? dimension*0.02  : dimension*0.01

    const degRange = [0,248]
    const ticksRange = [0,dimension*(0.405)]
    const knobSize = dimension*(0.1)

    const rotation = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        const translation = interpolate(rotation.value,  degRange,  ticksRange)
        return {
            transform : [{ translateY: -translation }],
        }
    })

    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension*0.6,
            width : dimension*0.15,
            marginHorizontal : dimension*0.015
        } ,
        bubble : {
            resizeMode : 'contain',
            position : 'absolute',
            top : dimension*0.445,
            width : dimension*0.01,
            height : dimension*0.01,
        },
        tags : {
            resizeMode : 'contain',
            height : dimension*0.35,
            top : dimension*0.12,
            marginLeft : imageLeftOffset,
        },
        knob : {
            position : 'absolute',
            top : dimension* 0.38
        }
    })


    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Animated.Image source={bubblePath} style={[styles.bubble,animatedStyle]}/>
            <Image source={tagsPath} style={styles.tags} />
            <Knob imagePath={knobPath} rotation={rotation} minDeg={degRange[0]} maxDeg={degRange[1]} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Meter
