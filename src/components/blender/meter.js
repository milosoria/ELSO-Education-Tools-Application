import { Image,ImageBackground } from 'react-native'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Knob from '../knob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../assets/blender'
const Meter = ({ type }) => {

    const { dimension } = useContext(DimensionContext)
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const bubblePath = require(`${ROOTPATH}/bubble.png`)
    const knobPath = require(`${ROOTPATH}/knob.png`)
    const tagsPath =  type === 'ml-min' ? require(`${ROOTPATH}/ml-min/tags.png`) : require(`${ROOTPATH}/LPM/tags.png`)

    const imageLeftOffset =  type === 'ml-min' ? dimension*0.02  : dimension*0.01

    const degRange = [0,720]
    const ticksRange = [0,dimension*(0.47)]
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
            resizeMode : 'stretch',
            top : dimension*0.445,
            width : dimension*0.01,
            height : dimension*0.01,
        },
        tags : {
            resizeMode : 'stretch',
            height : dimension*0.35,
            top : dimension*0.11,
            width : dimension*0.10,
            marginLeft : imageLeftOffset,
        },
        knob : {
            top : dimension* 0.11
        }
    })


    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Animated.Image source={bubblePath} style={[styles.bubble,animatedStyle]}/>
            <Image source={tagsPath} style={styles.tags} />
            <Knob imagePath={knobPath} rotation={rotation} degRange={degRange} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Meter
