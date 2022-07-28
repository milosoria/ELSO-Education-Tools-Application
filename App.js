import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { Image , SafeAreaView ,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Emulators from './src/screens/Emulators'
import InstructionsModal from './src/components/instructionsModal'
import { useState } from 'react'
import normalize, { create } from './src/utils/normalize'
import useOrientation from './src/utils/orientation'
import colors from './src/config/color-palette'

const BUTTONSIZE = 50

const App = () => {
    const isLandscape = useOrientation()
    const [modalVisible,setModalVisible] = useState(false)
    const handlePress = () => {
        setModalVisible(!modalVisible)
    }
    const rightPos = isLandscape ? normalize(125) : normalize(20) 

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.column}>
                    <Emulators/>
                    <View style={[styles.row, { left: -rightPos }]}>
                        <TouchableOpacity style={[styles.button]} onPress={handlePress}>
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
        alignItems : 'center',
        justifyContent : 'center',
    },
    column : {
        flexDirection : 'column',
    },
    row : {
        position : 'absolute',
        bottom : 0,
    },
    button : {
        width : BUTTONSIZE,
        height : BUTTONSIZE,
        borderRadius : BUTTONSIZE/2,
    },
})

export default App
