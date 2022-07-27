import { NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Meter from '../components/meter'
import {StyleSheet} from 'react-native'

const Emulators = () => {

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.root}>
                <Meter/>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default Emulators
