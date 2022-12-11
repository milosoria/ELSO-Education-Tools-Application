import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { create } from '../../utils/normalize'
import colors from '../../utils/color-palette'
import fontSizes from '../../utils/font-sizes'
import { BlurView } from 'expo-blur'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
    const styles = create({
        centeredView: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            resizeMode: 'contain',
        },
        modalView: {
            width: '50%',
            backgroundColor: colors.primary.white,
            borderRadius: 8,
            paddingTop: 25,
            paddingBottom: 6,
            alignItems: 'center',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            elevation: 5,
        },
        divider: {
            backgroundColor: colors.primary.gray,
            opacity: 0.45,
            width: '100%',
            height: 0.8,
        },
        button: {
            paddingVertical: 10,
        },
        buttonText: {
            color: colors.primary.blue,
            fontSize: fontSizes.big,
            fontFamily: 'SFPro-Medium',
            textAlign: 'center',
        },
        title: {
            // TODO: fix font
            fontWeight: '700',
            fontFamily: 'SFPro-Bold',
            fontSize: fontSizes.body,
        },
        subTitle: {
            fontSize: fontSizes.medium,
            fontFamily: 'SFPro-Medium',
            textAlign: 'center',
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
            <BlurView intensity={10} tint="light" style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Remember</Text>
                        <Text style={styles.subTitle}>Use two fingers</Text>
                        <Image
                            source={require('../../assets/help/fingers-gesture.png')}
                            style={{ width: '35%' }}
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
