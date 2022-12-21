import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import { useContext, useState } from 'react'
import InstructionsModal from '../../components/simulators/instructionsModal'
import CenterPannel from '../../components/simulators/pdb/centerPannel'
import RightPannel from '../../components/simulators/pdb/rightPannel'
import DimensionContext from '../../contexts/dimensionContext'
import { useToken } from 'native-base'

const PDB = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const { maxDimension, minDimension } = useContext(DimensionContext)
    const dimension = minDimension < 800 ? minDimension + 150 : maxDimension
    const [white50] = useToken('colors', ['primary.white.50'])

    const styles = StyleSheet.create({
        container: {
            backgroundColor: white50,
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
    const handlePress = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <>
            <View style={styles.container}>
                <CenterPannel dimension={dimension} />
                <RightPannel dimension={dimension} />
            </View>
            <TouchableHighlight
                underlayColor={white50}
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

export default PDB
