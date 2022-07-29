import { View } from 'react-native'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { create } from '../utils/normalize'

const Knob = ({
    minDeg ,
    maxDeg ,
    size ,
    style,
    rotation,
    imagePath
}) => {
    const savedRotation = useSharedValue(0)
    const rotationGesture = Gesture.Rotation()
        .onUpdate((e) => {
            const degrees =
        (e.rotation / Math.PI) * (maxDeg - minDeg) + savedRotation.value
            rotation.value = Math.ceil(Math.min(Math.max(minDeg, degrees), maxDeg))
        })
        .onEnd(() => {
            savedRotation.value = rotation.value
        })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform : [{ rotateZ: `${rotation.value}deg` }],
        }
    })
    const styles = create({
        container : {
            shadowOffset : { width: size / 30, height: 5 },
            shadowRadius : 3,
            shadowOpacity : 0.3,
            alignItems : 'center',
            width : size,
            height : size,
            borderRadius : size / 2,
            ...style,
        },
        knobImage : {
            width : size,
            height : size,
            borderRadius : size / 2,

        }
    })
    return (
        <GestureDetector gesture={rotationGesture}>
            <View
                style={styles.container}
            >
                <Animated.Image
                    style={[
                        styles.knobImage,
                        animatedStyle,
                    ]}
                    source={imagePath}
                />
            </View>
        </GestureDetector>
    )
}
export default Knob