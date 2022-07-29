import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { Image , SafeAreaView ,View ,useWindowDimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Emulators from './src/screens/Emulators'
import InstructionsModal from './src/components/instructionsModal'
import { useState } from 'react'
import { create } from './src/utils/normalize'
import colors from './src/config/color-palette'
import useOrientation from './src/utils/orientation'

const App = () => {
    const [modalVisible,setModalVisible] = useState(false)

    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    const isLandscape = useOrientation()
    const { height,width } = useWindowDimensions()
    const dimension = isLandscape ? 0.9* width : 0.9* height
    const buttonSize = dimension * 0.09

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.centered}>
                        <Emulators/>
                    </View >
                    <View style={styles.button}>
                        <TouchableOpacity style={{ width: buttonSize, height: buttonSize, borderRadius: buttonSize/2 }} onPress={handlePress}>
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
    button : {
        position : 'absolute',
        bottom : -20,
        left : 10
    },
})

export default App
