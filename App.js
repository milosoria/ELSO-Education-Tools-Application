import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { Image , SafeAreaView ,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Emulators from './src/screens/Emulators'
import InstructionsModal from './src/components/instructionsModal'
import { useState } from 'react'
import { create } from './src/utils/normalize'
import colors from './src/config/color-palette'

const App = () => {
    const [modalVisible,setModalVisible] = useState(false)
    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.centered}>
                        <Emulators/>
                    </View >
                    <View style={[styles.row ]}>
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Image source={require('./src/assets/help_button.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View >
                </View>
                <InstructionsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                <StatusBar style="auto" />
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

const styles = create({
    container : {
        backgroundColor : colors.primary.background,
        justifyContent : 'center',
    },
    centered : {
        alignSelf : 'center'
    },
    column : {
        flexDirection : 'column',
    },
    row : {
        position : 'absolute',
        bottom : 5,
        left : 10
    },
    button : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
    },
})

export default App
