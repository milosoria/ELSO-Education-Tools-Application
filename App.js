import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Knob from './src/components/knob'

const App = () => {

    return (
        <View style={styles.container}>
            <Knob/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
})

export default App
