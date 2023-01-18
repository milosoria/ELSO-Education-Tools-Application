import { Image, Modal, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { Text } from '../../atoms/'
import { Box, Divider } from 'native-base'

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
                        width={{
                            base: '80%',
                            sm: '60%',
                            md: '50%',
                        }}
                        bg="primary.gray.50"
                        borderRadius="xl"
                        pt={25}
                        alignItems="center"
                        shadow={9}
                    >
                        <Text
                            color="primary.black.100"
                            type="title"
                            text="Remember"
                        />
                        <Text
                            color="primary.black.100"
                            type="subtitle"
                            text="Use two fingers"
                        />
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
                                paddingHorizontal: 100,
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text
                                color="primary.blue.50"
                                fontWeight="600"
                                type="subtitle"
                                text="OK"
                            />
                        </TouchableOpacity>
                    </Box>
                </Box>
            </BlurView>
        </Modal>
    )
}

export default InstructionsModal
