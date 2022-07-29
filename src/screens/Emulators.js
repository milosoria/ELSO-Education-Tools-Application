import Meter from '../components/meter'
import Mixer from '../components/mixer'
import { StyleSheet, View,useWindowDimensions } from 'react-native'
import useOrientation from '../utils/orientation'

const Emulators = () => {

    const isLandscape = useOrientation()
    const { height,width } = useWindowDimensions()
    const dimension = isLandscape ? 0.9* width : 0.9* height

    return (
        <View style={styles.root}>
            <Meter type='ml-min' dimension={dimension}/>
            <Meter type='LPM' dimension={dimension}/>
            <Mixer dimension={dimension}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
    }
})

export default Emulators
