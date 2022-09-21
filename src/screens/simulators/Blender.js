import { useContext, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableHighlight, View } from 'react-native'
import InstructionsModal from '../../components/simulators/instructionsModal'
import Meter from '../../components/simulators/blender/meter'
import Mixer from '../../components/simulators/blender/mixer'
import colors from '../../utils/color-palette'
import DimensionContext from '../../contexts/dimensionContext'

const Blender = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const { maxDimension } = useContext(DimensionContext)
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
                <TouchableHighlight underlayColor={colors.primary.background} activeOpacity={0.8} style={[styles.button, { borderRadius: 100 }]} onPress={handlePress}>
                    <Image source={require('../../assets/help/help_button.png')} resizeMode='contain' style={{ width: maxDimension * 0.08, height: maxDimension * 0.08, borderRadius: 100 }} />
                </TouchableHighlight>
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
        borderRadius : 20,
        position : 'absolute',
        bottom : 10,
        left : 10,
    },
})

export default Blender
