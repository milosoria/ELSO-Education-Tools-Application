import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { useState } from 'react'
import InstructionsModal from '../../components/simulators/instructionsModal'
import LeftPannel from '../../components/simulators/pdb/leftPannel'
import CenterPannel from '../../components/simulators/pdb/centerPannel'
import RightPannel from '../../components/simulators/pdb/rightPannel'
import colors from '../../utils/color-palette'

const PDB = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <View style={styles.container}>
                <LeftPannel />
                <CenterPannel />
                <RightPannel />
            </View>
            <TouchableHighlight underlayColor='#FFFFFF' activeOpacity={0.8} style={styles.button} onPress={handlePress}>
                <Image source={require('../../assets/help/help_button.png')} resizeMode='contain' />
            </TouchableHighlight>
            <InstructionsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary.background,
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        borderRadius : 20,
        position : 'absolute',
        bottom : 15,
        left : 20,
    },
})

export default PDB
