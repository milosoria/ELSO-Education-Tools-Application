import { useContext, useState } from 'react'
import { Image , SafeAreaView ,StyleSheet, TouchableOpacity,View } from 'react-native'
import InstructionsModal from '../components/instructionsModal'
import Meter from '../components/blender/meter'
import Mixer from '../components/blender/mixer'
import DimensionContext from '../contexts/dimensionContext'
import colors from '../utils/color-palette'

const Blender = () => {
    const { dimension } = useContext(DimensionContext)
    const [modalVisible,setModalVisible] = useState(false)

    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    const buttonSize = dimension * 0.09

    return (
        <>
            <SafeAreaView style={styles.column}>
                <View style={styles.centered}>
                    <View style={styles.root}>
                        <Meter type='ml-min' dimension={dimension}/>
                        <Meter type='LPM' dimension={dimension}/>
                        <Mixer dimension={dimension}/>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={{ width: buttonSize, height: buttonSize, borderRadius: buttonSize/2 }} onPress={handlePress}>
                        <Image source={require('../assets/help/help_button.png')} resizeMode='contain'/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <InstructionsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

const styles = StyleSheet.create({
    root : {
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
    },
    centered : {
        alignSelf : 'center'
    },
    column : {
        flexDirection : 'column',
        backgroundColor : colors.primary.background
    },
    button : {
        position : 'absolute',
        bottom : -20,
        left : 10
    },
})

export default Blender
