import { create } from '../utils/normalize'
import { Dimensions, ImageBackground, Platform, ScrollView } from 'react-native'
import { Button } from '../atoms/'
import useOrientation from '../utils/orientation'
import { Box, Text, useBreakpointValue, useToken } from 'native-base'
import * as ScreenOrientation from 'expo-screen-orientation'
import Icon from 'react-native-vector-icons/AntDesign'

const Menu = ({ navigation }) => {
    const { isPad } = Platform
    const { height } = Dimensions.get('window')
    const [black50, gray50] = useToken('colors', [
        'primary.black.50',
        'primary.gray.50',
    ])
    if (!isPad)
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
    const isLandscape = useOrientation()
    const cardHeight = useBreakpointValue({
        base: '26%',
        sm: '30%',
        md: isLandscape ? 300 : '30%',
        lg: isLandscape ? 300 : '30%',
        xl: isLandscape ? 350 : '30%',
    })
    const styles = create({
        image: {
            borderRadius: 15,
            width: '100%',
            height: '100%',
        },
        card: {
            height: cardHeight,
            width: '100%',
            marginVertical: isPad ? '2%' : '3%',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 40,
            shadowOffset: { width: 2, height: 4 },
            opacity: 0.8,
        },
    })

    const IPhoneButton = (props) => (
        <Button
            {...props}
            style={[
                {
                    left: '20%',
                    width: '16%',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                props.style,
            ]}
        >
            <Icon
                name="arrowright"
                size={height > 900 ? 25 : 23}
                style={{
                    color: gray50,
                    alignSelf: 'center',
                }}
            />
        </Button>
    )
    return (
        <Box
            style={{
                paddingTop: 20,
                backgroundColor: black50,
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
                <ImageBackground
                    source={require('../assets/navigation/company-info.png')}
                    imageStyle={styles.image}
                    style={[
                        styles.card,
                        {
                            flexDirection: isPad ? 'column' : 'row',
                        },
                    ]}
                >
                    {isPad ? (
                        <Box
                            alignSelf="flex-start"
                            ml={{
                                base: 8,
                                sm: 10,
                                md: 12,
                                lg: 12,
                            }}
                            mt={{
                                base: 6,
                                sm: 12,
                                md: 12,
                                lg: 12,
                            }}
                        >
                            <Text
                                maxW={{
                                    base: 'md',
                                    sm: 'md',
                                    md: 'md',
                                    lg: 'lg',
                                    xl: 'xl',
                                }}
                                fontFamily="body"
                                color="white"
                                lineHeight="sm"
                                fontSize={{
                                    base: 'xl',
                                    sm: '3xl',
                                    md: '3xl',
                                    lg: '4xl',
                                    xl: '4xl',
                                }}
                                fontWeight="600"
                            >
                                Welcome to ELSO educational tools app!
                            </Text>
                        </Box>
                    ) : (
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
                    )}
                    {isPad ? (
                        <Button
                            disabled={true}
                            // onPress={() => navigation.navigate('CompanyInfo')}
                            style={{
                                top: '14%',
                                width: '40%',
                            }}
                            text="Learn about ELSO"
                        />
                    ) : (
                        <IPhoneButton
                            style={{
                                left: '15%',
                            }}
                        />
                    )}
                </ImageBackground>
                <ImageBackground
                    source={require('../assets/navigation/simulators.png')}
                    imageStyle={styles.image}
                    style={styles.card}
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
                        {isPad && (
                            <Text
                                fontSize={{
                                    base: 'xs',
                                    sm: 'md',
                                    md: 'md',
                                    lg: 'xl',
                                }}
                                fontWeight="400"
                            >
                                Air-Oxygen Blender - Pressure Display Box
                            </Text>
                        )}
                    </Box>
                    {isPad ? (
                        <Button
                            onPress={() => navigation.navigate('Simulators')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                            text="Go"
                        />
                    ) : (
                        <IPhoneButton
                            onPress={() => navigation.navigate('Simulators')}
                        />
                    )}
                </ImageBackground>
                <ImageBackground
                    source={require('../assets/navigation/clinical-tools.png')}
                    imageStyle={styles.image}
                    style={styles.card}
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
                        {isPad && (
                            <Text
                                fontSize={{
                                    base: 'xs',
                                    sm: 'md',
                                    md: 'md',
                                    lg: 'xl',
                                }}
                                fontWeight="400"
                            >
                                Suggestive Canula
                            </Text>
                        )}
                    </Box>
                    {isPad ? (
                        <Button
                            disabled={true}
                            // onPress={() => navigation.navigate('ClinicalTools')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                            text="Go"
                        />
                    ) : (
                        <IPhoneButton />
                    )}
                </ImageBackground>
            </ScrollView>
        </Box>
    )
}

export default Menu
