import { Image,   Modal, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { create } from '../utils/normalize'
import colors from '../config/color-palette'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
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
                            source={require('../assets/instructions/fingers-gesture.png')}
                            style={styles.image}
                        />
                        <View style={styles.divider}/>
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
        width : 150,
        resizeMode : 'contain'
    },
    modalView : {
        margin : 20,
        backgroundColor : colors.primary.white,
        borderRadius : 10,
        paddingTop : 25,
        paddingHorizontal : 30,
        paddingBottom : 15,
        alignItems : 'center',
        shadowColor : colors.primary.gray,
        shadowOpacity : 0.5,
        shadowRadius : 5,
        elevation : 5,
    },
    button : {
        padding : 10,
        elevation : 2,
    },
    divider : {
        backgroundColor : colors.primary.gray,
        opacity : 0.5,
        height : 0.8,
        width : 250
    },
    buttonText : {
        color : colors.secondary.blue,
        fontSize : 15,
        paddingHorizontal : 50,
        fontWeight : '600',
        textAlign : 'center',
    },
    subTitle : {
        fontSize : 13,
        fontWeight : '500',
        textAlign : 'center',
    },
    title : {
        fontWeight : '700',
        color : 'black',
        fontSize : 20,
    },
})

export default InstructionsModal
