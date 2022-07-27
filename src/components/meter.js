import { Image,ImageBackground,StyleSheet,useWindowDimensions } from 'react-native'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Knob from '../components/knob'
import useOrientation from '../utils/orientation'

const Meter = () => {
    const margin = 20
    let { height, width } = useWindowDimensions()
    height = height - margin

    const isLandscape = useOrientation()
    // TODO: fix this
    const geometry = {
        knob : {
            top : isLandscape ? height*(4/6) : width*(5/6) ,
            size : isLandscape ? width/8 : height/8
        },
        bubble : {
            top : (isLandscape ? height*(4/6) : width*(5/6))
        }
    }

    const degRange = [0,270]
    // TODO: this should be calculated based on height of background
    const ticksRange = [0,geometry.knob.top*(5/6)]

    const rotation = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        const translation = interpolate(rotation.value,  degRange,  ticksRange)

        return {
            transform : [{ translateY: -translation }],
        }
    })
    
    const styles = StyleSheet.create({
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            resizeMode : 'contain',
        } ,
        bubble : {
            top : geometry.knob.top,
            width : 15,
            height : 15,
            resizeMode : 'contain'
        },
        tags : {
            resizeMode : 'contain',
            top : 40,
            marginLeft : 26,
            // TODO: this has to be calculated based on the width of the background and then offset
            // it by some margin
            width : 130
        },
        knob : {
            marginHorizontal : 22,
            bottom : margin
        },
    })


    return (
        <ImageBackground source={require('../assets/ml-min/Background.png')} style={styles.background} >
            <Animated.Image source={require('../assets/ml-min/Burbuja-medidor.png')} style={[styles.bubble,animatedStyle]}/>
            <Image source={require('../assets/ml-min/Etiquetas.png')} style={styles.tags} />
            <Knob rotation={rotation} minDeg={degRange[0]} maxDeg={degRange[1]} size={geometry.knob.size} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Meter
