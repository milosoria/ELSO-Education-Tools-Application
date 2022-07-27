import { View } from 'react-native'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const Knob = ({
    minDeg = 0,
    maxDeg = 270,
    size = 100,
    style = {},
    rotation,
}) => {
    // const margin = size * 0.15;
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

    return (
        <GestureDetector gesture={rotationGesture}>
            <View
                style={{
                    shadowOffset : { width: size / 30, height: 5 },
                    shadowRadius : 3,
                    shadowOpacity : 0.3,
                    backgroundColor : 'white',
                    alignItems : 'center',
                    borderRadius : size / 2,
                    ...style,
                }}
            >
                <Animated.Image
                    style={[
                        {
                            width : size,
                            height : size,
                            borderRadius : size / 2,
                        },
                        animatedStyle,
                    ]}
                    source={require('../assets/ml-min/Potenciometro.png')}
                />
            </View>
        </GestureDetector>
    )
}
export default Knob
