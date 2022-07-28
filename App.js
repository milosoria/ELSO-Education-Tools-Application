import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Emulators from './src/screens/Emulators'

const App = () => {

    return (
        <View style={styles.container}>
            <Emulators/>
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
