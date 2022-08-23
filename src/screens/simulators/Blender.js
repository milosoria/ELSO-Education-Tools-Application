import { useContext, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableHighlight, View } from 'react-native'
import InstructionsModal from '../../components/simulators/instructionsModal'
import Meter from '../../components/simulators/blender/meter'
import Mixer from '../../components/simulators/blender/mixer'
import DimensionContext from '../../contexts/dimensionContext'
import colors from '../../utils/color-palette'

const Blender = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const { maxDimension } = useContext(DimensionContext)
    const buttonSize = maxDimension * 0.09

    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <SafeAreaView style={styles.column}>
                <View style={styles.centered}>
                    <View style={styles.root}>
                        <Meter type='ml-min' />
                        <Meter type='LPM' />
                        <Mixer />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableHighlight underlayColor='#FFFFFF' activeOpacity={0.8} style={{ width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }} onPress={handlePress}>
                        <Image source={require('../../assets/help/help_button.png')} resizeMode='contain' />
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
            <InstructionsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
        bottom : -15,
        left : 20
    },
})

export default Blender
