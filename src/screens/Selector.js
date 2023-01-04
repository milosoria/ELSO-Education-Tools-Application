import { Dimensions, ScrollView } from 'react-native'
import useOrientation from '../utils/orientation'
import { Box, Text, useBreakpointValue, useToken } from 'native-base'
import { IPhoneButton } from '../components/'

const Selector = ({ navigation }) => {
    const { height } = Dimensions.get('window')
    const [black100] = useToken('colors', 'primary.black.100')
    const isLandscape = useOrientation()
    const cardHeight = useBreakpointValue({
        base: '26%',
        sm: '30%',
        md: isLandscape ? 300 : '30%',
        lg: isLandscape ? 300 : '30%',
        xl: isLandscape ? 350 : '30%',
    })

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
                style={{
                    alignSelf: 'center',
                    width: isLandscape ? '80%' : '90%',
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >
                <Box
                    height={cardHeight}
                    width="100%"
                    my={'3%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="full"
                    shadow={4}
                >
                    <Box
                        width="55%"
                        alignItems="flex-start"
                        ml={{ base: '8', md: '12' }}
                    >
                        <Text
                            fontFamily="body"
                            color="white"
                            lineHeight="sm"
                            fontSize={{
                                base: height > 900 ? '2xl' : 'xl',
                                sm: '3xl',
                                md: '3xl',
                                lg: '4xl',
                            }}
                            fontWeight="600"
                        >
                            Learn about ELSO
                        </Text>
                    </Box>
                    <IPhoneButton
                        style={{
                            left: '15%',
                        }}
                    />
                </Box>
                <Box
                    height={cardHeight}
                    width="100%"
                    my={'3%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="full"
                    shadow={4}
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
                            fontFamily="body"
                            color="white"
                            lineHeight="sm"
                            fontSize={{
                                base: height > 900 ? '2xl' : 'xl',
                                sm: '3xl',
                                md: '3xl',
                                lg: '4xl',
                                xl: '4xl',
                            }}
                            fontWeight="600"
                        >
                            ECMO Machines Simulators
                        </Text>
                    </Box>
                    <IPhoneButton
                        onPress={() => navigation.navigate('Simulators')}
                    />
                </Box>
                <Box
                    height={cardHeight}
                    width="100%"
                    my={'3%'}
                    flexDirection="row"
                    alignItems="center"
                    rounded="full"
                    shadow={4}
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
                                lg: 'md',
                            }}
                            fontFamily="body"
                            color="white"
                            lineHeight="sm"
                            fontSize={{
                                base: height > 900 ? '2xl' : 'xl',
                                sm: '3xl',
                                md: '3xl',
                                lg: '4xl',
                                xl: '4xl',
                            }}
                            fontWeight="600"
                        >
                            Clinical Tools
                        </Text>
                    </Box>
                    <IPhoneButton />
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Selector
