import { Image, Modal, Text, View, useWindowDimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { create } from '../../utils/normalize'
import colors from '../../utils/color-palette'
import fontSizes from '../../utils/font-sizes'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
    const { width } = useWindowDimensions()
    const imageSize = width * 0.4

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Remember</Text>
                        <Text style={styles.subTitle}>Use two fingers</Text>
                        <Image
                            source={require('../../assets/help/fingers-gesture.png')}
                            style={{ width: imageSize }}
                            resizeMode="contain"
                        />
                        <View style={[styles.divider, { width: imageSize }]} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

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
        margin : 20,
        backgroundColor : colors.primary.white,
        borderRadius : 8,
        paddingTop : 25,
        paddingHorizontal : 30,
        paddingBottom : 6,
        alignItems : 'center',
        shadowColor : colors.primary.gray,
        shadowOpacity : 0.8,
        shadowRadius : 8,
        elevation : 5,
    },
    divider : {
        backgroundColor : colors.primary.gray,
        opacity : 0.5,
        height : 0.8,
    },
    button : {
        padding : 10,
        elevation : 2,
    },
    buttonText : {
        color : colors.primary.blue,
        fontSize : fontSizes.medium,
        paddingHorizontal : 50,
        fontWeight : '600',
        textAlign : 'center',
    },
    title : {
        fontWeight : '700',
        color : 'black',
        fontSize : fontSizes.big,
    },
    subTitle : {
        fontSize : fontSizes.small,
        fontWeight : '500',
        textAlign : 'center',
    },
})

export default InstructionsModal
