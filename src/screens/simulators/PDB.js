import { Image, StyleSheet, TouchableHighlight, Box } from 'react-native'
import { useContext, useState } from 'react'
import InstructionsModal from '../../components/simulators/instructionsModal'
import CenterPannel from '../../components/simulators/pdb/centerPannel'
import RightPannel from '../../components/simulators/pdb/rightPannel'
import colors from '../../utils/color-palette'
import DimensionContext from '../../contexts/dimensionContext'

const PDB = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const { maxDimension, minDimension } = useContext(DimensionContext)
    const dimension = minDimension < 800 ? minDimension + 150 : maxDimension

    const handlePress = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <>
            <Box style={styles.container}>
                <CenterPannel dimension={dimension} />
                <RightPannel dimension={dimension} />
            </Box>
            <TouchableHighlight
                underlayColor={colors.primary.background}
                activeOpacity={0.8}
                style={[styles.button, { borderRadius: 100 }]}
                onPress={handlePress}
            >
                <Image
                    source={require('../../assets/help/help_button.png')}
                    resizeMode="contain"
                    style={{
                        width: maxDimension * 0.08,
                        height: maxDimension * 0.08,
                        borderRadius: 100,
                    }}
                />
            </TouchableHighlight>
            <InstructionsModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary.background,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
})

export default PDB
