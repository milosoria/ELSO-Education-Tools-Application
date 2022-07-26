import {  StyleSheet,View } from 'react-native'
import Animated,{ useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { normalizePx } from '../utils/normalize'

const KnobTest = ({ minDeg = 0, maxDeg = 270, size = 100 }) => {
    // const margin = size * 0.15;
    const rotation = useSharedValue(0)
    const savedRotation = useSharedValue(0)
    const rotationGesture = Gesture.Rotation()
        .onUpdate((e) => {
            // 180 or diff between max min?
            const degrees = (e.rotation / Math.PI) * (maxDeg-minDeg) + savedRotation.value
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

    const styles = StyleSheet.create({
        knob : {
            width : normalizePx(size),
            height : normalizePx(size),
            borderRadius : normalizePx(size/2),
            backgroundColor : 'gray',
        },
        wrapper : {
            shadowRadius : normalizePx(5),
            shadowOpacity : 0.3
        }
    })

    return (
        <GestureDetector gesture={rotationGesture}>
            <View style={styles.wrapper}>
                <Animated.Image
                    style={[
                        styles.knob,
                        animatedStyle
                    ]}
                    source={require('../assets/accepted.jpeg')}
                />
            </View>
        </GestureDetector>
    )
}
export default KnobTest
