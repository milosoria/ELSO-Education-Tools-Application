import { Image, Modal, TouchableOpacity } from 'react-native'
import { create } from '../../utils/normalize'
import colors from '../../utils/color-palette'
import fontSizes from '../../utils/font-sizes'
import { BlurView } from 'expo-blur'
import { Box, Divider, Text } from 'native-base'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
    const styles = create({
        centeredBox: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
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
            <BlurView intensity={10} tint="light" style={styles.centeredBox}>
                <Box
                    flex={1}
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        maxW="500"
                        width="50%"
                        bg="primary.gray.50"
                        borderRadius="xl"
                        pt={25}
                        alignItems="center"
                        shadow={5}
                    >
                        <Text
                            color="primary.black.100"
                            fontWeight="500"
                            fontFamily="body"
                            fontSize={{
                                base: '2xl',
                                lg: '3xl',
                            }}
                        >
                            Remember
                        </Text>
                        <Text
                            color="primary.black.100"
                            fontWeight="400"
                            fontFamily="body"
                            fontSize={{
                                base: 'sm',
                                lg: 'md',
                            }}
                        >
                            Use two fingers
                        </Text>
                        <Image
                            source={require('../../assets/help/fingers-gesture.png')}
                            style={{ width: '35%' }}
                            resizeMode="contain"
                        />
                        <Divider
                            orientation="horizontal"
                            width="100%"
                            opacity={0.25}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </BlurView>
        </Modal>
    )
}

export default InstructionsModal
