import { Image, ImageBackground, useWindowDimensions } from 'react-native'
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated'
import Knob from '../knob'
import { create } from '../../../utils/normalize'
import DimensionContext from '../../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../../assets/blender'

const Meter = ({ type }) => {
    const { width } = useWindowDimensions()
    const { maxDimension } = useContext(DimensionContext)
    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const bubblePath = require(`${ROOTPATH}/bubble.png`)
    const knobPath = require(`${ROOTPATH}/knob.png`)
    const tagsPath =
        type === 'ml-min'
            ? require(`${ROOTPATH}/ml-min/tags.png`)
            : require(`${ROOTPATH}/LPM/tags.png`)
    const backgroundOffset =
        type === 'ml-min' ? maxDimension * 0.02 : maxDimension * 0.012

    const degRange = [0, 720]
    const ticksRange = [0, maxDimension * 0.46]
    const knobSize = maxDimension * 0.1
    const rotation = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        const translation = interpolate(rotation.value, degRange, ticksRange)
        return {
            transform: [{ translateY: -translation }],
        }
    })

    const styles = create({
        backgroundImage: {
            resizeMode: 'stretch',
        },
        background: {
            alignItems: 'center',
            shadowRadius: 5,
            shadowOpacity: 0.3,
            height: maxDimension * 0.6,
            width: maxDimension * 0.15,
            marginHorizontal:
                width < 800 ? maxDimension * 0.01 : maxDimension * 0.015,
        },
        bubble: {
            resizeMode: 'stretch',
            top: maxDimension * 0.437,
            width: maxDimension * 0.01,
            height: maxDimension * 0.01,
        },
        tags: {
            resizeMode: 'stretch',
            height: maxDimension * 0.35,
            top: maxDimension * 0.11,
            width: maxDimension * 0.1,
            marginLeft: backgroundOffset,
        },
        knob: {
            top: maxDimension * 0.11,
        },
    })

    return (
        <ImageBackground
            source={backgroundPath}
            style={styles.background}
            imageStyle={styles.backgroundImage}
        >
            <Animated.Image
                source={bubblePath}
                style={[styles.bubble, animatedStyle]}
            />
            <Image source={tagsPath} style={styles.tags} />
            <Knob
                imagePath={knobPath}
                specialRotation={rotation}
                degRange={degRange}
                size={knobSize}
                style={styles.knob}
            />
        </ImageBackground>
    )
}

export default Meter
