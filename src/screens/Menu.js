import { create } from '../utils/normalize'
import { ImageBackground, Platform, ScrollView } from 'react-native'
import Modal from '../components/iphoneModal'
import { Button } from '../atoms/'
import useOrientation from '../utils/orientation'
import { Box, Text, useBreakpointValue, useToken } from 'native-base'
import * as ScreenOrientation from 'expo-screen-orientation'

const Menu = ({ navigation }) => {
    const { isPad } = Platform
    // lock screen only for iphone
    if (!isPad)
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
    const [darkBg] = useToken('colors', ['primary.black.50'])
    const isLandscape = useOrientation()
    const cardHeight = useBreakpointValue({
        base: isLandscape ? 300 : 250,
        lg: isLandscape ? 300 : 300,
        xl: isLandscape ? 350 : 350,
    })
    const styles = create({
        image: {
            borderRadius: 15,
            width: '100%',
            height: '100%',
        },
        container: {
            backgroundColor: darkBg,
            alignItems: 'center',
            flex: 1,
        },
        card: {
            height: cardHeight,
            width: '100%',
            marginVertical: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 40,
            shadowOffset: { width: 2, height: 4 },
            opacity: 0.8,
        },
    })

    return (
        <Box style={styles.container}>
            {isPad ? (
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
                                flexDirection: 'column',
                            },
                        ]}
                    >
                        <Box
                            alignSelf="flex-start"
                            marginLeft="12"
                            marginTop="12"
                        >
                            <Text
                                maxW={{
                                    base: 'md',
                                    lg: 'lg',
                                }}
                                fontFamily="body"
                                color="white"
                                lineHeight="sm"
                                fontSize={{
                                    base: '3xl',
                                    lg: '4xl',
                                }}
                                fontWeight="600"
                            >
                                Welcome to ELSO educational tools app!
                            </Text>
                        </Box>
                        <Button
                            disabled={true}
                            // onPress={() => navigation.navigate('CompanyInfo')}
                            style={{
                                top: '14%',
                                width: '40%',
                            }}
                            text="Learn about ELSO"
                        />
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/navigation/simulators.png')}
                        imageStyle={styles.image}
                        style={styles.card}
                    >
                        <Box
                            width="50%"
                            alignItems="flex-start"
                            marginLeft="12"
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
                                    base: '3xl',
                                    lg: '4xl',
                                }}
                                fontWeight="600"
                            >
                                ECMO Machines Simulators
                            </Text>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    lg: 'xl',
                                }}
                                fontWeight="400"
                            >
                                Air-Oxygen Blender - Pressure Display Box
                            </Text>
                        </Box>
                        <Button
                            onPress={() => navigation.navigate('Simulators')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                            text="Go"
                        />
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/navigation/clinical-tools.png')}
                        imageStyle={styles.image}
                        style={styles.card}
                    >
                        <Box
                            width="50%"
                            alignItems="flex-start"
                            marginLeft="12"
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
                                    base: '3xl',
                                    lg: '4xl',
                                }}
                                fontWeight="600"
                            >
                                Clinical Tools
                            </Text>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    lg: 'xl',
                                }}
                                fontWeight="400"
                            >
                                Suggestive Canula
                            </Text>
                        </Box>
                        <Button
                            disabled={true}
                            // onPress={() => navigation.navigate('ClinicalTools')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                            text="Go"
                        />
                    </ImageBackground>
                </ScrollView>
            ) : (
                <Modal />
            )}
        </Box>
    )
}

export default Menu
