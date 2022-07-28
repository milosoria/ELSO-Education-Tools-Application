import { Image,ImageBackground, useWindowDimensions } from 'react-native'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Knob from '../components/knob'
import { create } from '../utils/normalize'
// import useOrientation from '../utils/orientation'

const Meter = ({ type }) => {

    // TODO: make this responsive to change of orientation, in fact, this wont work for iphones.
    // Using the dimensions of the device can be dangerous cause the proportion/ratio of px is
    // not the same
    const tagsPath =  type === 'ml-min' ? require('../assets/ml-min/Etiquetas.png') : require('../assets/LPM/Etiquetas.png')
    const imageLeftOffset =  type === 'ml-min' ? 20  : 10
    let { height } = useWindowDimensions()
    // const isLandscape = useOrientation()

    const degRange = [0,270]
    // TODO: this shouldnt be calculated like this
    const ticksRange = [0,height*(0.405)]
    const knobSize = height*(0.1)

    const rotation = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        const translation = interpolate(rotation.value,  degRange,  ticksRange)
        return {
            transform : [{ translateY: -translation }],
        }
    })

    const styles = create({
        backgroundImage : {
            resizeMode : 'contain',
            height : height*0.6,
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : height*0.6,
            width : height*0.20
        } ,
        bubble : {
            resizeMode : 'contain',
            position : 'absolute',
            top : height*0.445,
            width : 12,
            height : 12,
        },
        tags : {
            resizeMode : 'contain',
            height : height*0.35,
            top : height*0.12,
            marginLeft : imageLeftOffset
        },
        knob : {
            position : 'absolute',
            top : height* 0.38
        }
    })


    return (
        <ImageBackground source={require('../assets/ml-min/Background.png')} style={styles.background} imageStyle={styles.backgroundImage}>
            <Animated.Image source={require('../assets/ml-min/Burbuja-medidor.png')} style={[styles.bubble,animatedStyle]}/>
            <Image source={tagsPath} style={styles.tags} />
            <Knob rotation={rotation} minDeg={degRange[0]} maxDeg={degRange[1]} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Meter
