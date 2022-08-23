import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { create } from '../../utils/normalize'
import colors from '../../utils/color-palette'
import fontSizes from '../../utils/font-sizes'
import { useContext } from 'react'
import DimensionContext from '../../contexts/dimensionContext'
import { BlurView } from 'expo-blur'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
    const { maxDimension } = useContext(DimensionContext)
    const imageSize = maxDimension * 0.15

    const styles = create({
        centeredView : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
            marginTop : 22,
        },
        image : {
            resizeMode : 'contain',
        },
        modalView : {
            width : maxDimension * 0.35,
            backgroundColor : colors.primary.white,
            borderRadius : 8,
            paddingTop : 25,
            paddingBottom : 6,
            alignItems : 'center',
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
            elevation : 5,
        },
        divider : {
            backgroundColor : colors.primary.gray,
            opacity : 0.45,
            width : maxDimension * 0.3,
            height : 0.8,
        },
        button : {
            paddingVertical : 10,
        },
        buttonText : {
            color : colors.primary.blue,
            fontSize : fontSizes.big,
            fontFamily : 'SFPro-Medium',
            textAlign : 'center',
        },
        title : {
            fontWeight : '700',
            fontFamily : 'SFPro-Bold',
            fontSize : fontSizes.body,
        },
        subTitle : {
            fontSize : fontSizes.medium,
            fontFamily : 'SFPro-Medium',
            textAlign : 'center',
        },
    })

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <BlurView intensity={10} tint='light' style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Remember</Text>
                        <Text style={styles.subTitle}>Use two fingers</Text>
                        <Image
                            source={require('../../assets/help/fingers-gesture.png')}
                            style={{ width: imageSize }}
                            resizeMode="contain"
                        />
                        <View style={styles.divider} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

export default InstructionsModal
