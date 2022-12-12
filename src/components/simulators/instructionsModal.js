import { Image, Modal, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { Box, Divider, Text } from 'native-base'

const InstructionsModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <BlurView
                intensity={10}
                tint="light"
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
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
                            style={{
                                paddingVertical: 10,
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text
                                color="primary.blue.50"
                                fontWeight="600"
                                fontFamily="body"
                                fontSize={{
                                    base: 'xl',
                                    lg: '2xl',
                                }}
                            >
                                OK
                            </Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </BlurView>
        </Modal>
    )
}

export default InstructionsModal
