import { Dimensions } from 'react-native'
import useOrientation from '../../utils/orientation'
import { Text } from '../../atoms/'
import { Box, ScrollView, useToken } from 'native-base'
import { IPhoneButton } from '../../components/'

const Selector = ({ route, navigation }) => {
    const { name } = route.params
    const { height } = Dimensions.get('window')
    const [black100, gray300] = useToken('colors', [
        'primary.black.100',
        'primary.gray.300',
    ])
    const isLandscape = useOrientation()

    return (
        <Box
            style={{
                paddingTop: 20,
                backgroundColor: black100,
                alignItems: 'center',
                flex: 1,
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                alignSelf="center"
                width={isLandscape ? '80%' : '90%'}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <Box
                    height="20%"
                    width="100%"
                    my={'5%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="3xl"
                    shadow={9}
                    bg={gray300}
                >
                    <Box
                        width="55%"
                        alignItems="flex-start"
                        ml={{ base: '8', md: '12' }}
                    >
                        <Text type="title" text="Remote controller settings" />
                    </Box>
                    <IPhoneButton
                        style={{
                            left: '10%',
                        }}
                    />
                </Box>
                <Box
                    height="30%"
                    width="100%"
                    my={'5%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="3xl"
                    shadow={9}
                    bg={gray300}
                >
                    <Box
                        width="50%"
                        alignItems="flex-start"
                        ml={{ base: '8', md: '12' }}
                    >
                        <Text
                            maxW={{
                                base: 'xs',
                                sm: 'md',
                                md: 'md',
                                lg: 'md',
                            }}
                            type="title"
                            mb="2"
                            text={name}
                        />
                        <Text
                            maxW={{
                                base: 'xs',
                                sm: 'md',
                                md: 'md',
                                lg: 'md',
                            }}
                            type="large title"
                            text="Regular Simulator"
                        />
                    </Box>
                    <IPhoneButton
                        style={{ left: '15%' }}
                        onPress={() => navigation.navigate('Simulators')}
                    />
                </Box>
                <Box
                    height="30%"
                    width="100%"
                    my={'5%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="3xl"
                    shadow={9}
                    bg={gray300}
                >
                    <Box
                        width="50%"
                        alignItems="flex-start"
                        ml={{
                            base: '8',
                            md: '12',
                        }}
                    >
                        <Text
                            maxW={{
                                base: 'xs',
                                sm: 'md',
                                md: 'md',
                                lg: 'md',
                            }}
                            type="title"
                            mb="2"
                            text={name}
                        />
                        <Text
                            maxW={{
                                base: 'xs',
                                lg: 'md',
                            }}
                            type="large title"
                            fontWeight="600"
                            text="Modular Controller"
                        />
                    </Box>
                    <IPhoneButton style={{ left: '15%' }} />
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Selector
