import { create } from '../utils/normalize'
import { Dimensions, ImageBackground, Platform } from 'react-native'
import { Button, Text } from '../atoms/'
import useOrientation from '../utils/orientation'
import { Box, ScrollView, useBreakpointValue, useToken } from 'native-base'
import * as ScreenOrientation from 'expo-screen-orientation'
import { IPhoneButton } from '../components/'

const Menu = ({ navigation }) => {
    const { isPad } = Platform
    const { height } = Dimensions.get('window')
    const [black50] = useToken('colors', ['primary.black.50'])
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
    const buttonTop = useBreakpointValue({
        sm: '14%',
        md: '12%',
        lg: '14%',
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
                alignSelf="center"
                width={isLandscape ? '80%' : '90%'}
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
                                type="title"
                                fontWeight="600"
                                text="Welcome to ELSO educational tools app!"
                            />
                        </Box>
                    ) : (
                        <Box
                            width="55%"
                            alignItems="flex-start"
                            ml={{ base: '8', md: '12' }}
                        >
                            <Text
                                type="title"
                                fontWeight="600"
                                text="Learn about ELSO"
                            />
                        </Box>
                    )}
                    {isPad ? (
                        <Button
                            disabled={true}
                            // onPress={() => navigation.navigate('CompanyInfo')}
                            style={{
                                top: buttonTop,
                                width: '30%',
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
                            type="title"
                            text="ECMO Machines Simulators"
                        />
                        {isPad && (
                            <Text
                                type="small"
                                fontWeight="400"
                                text="Air-Oxygen Blender - Pressure Display Box"
                            />
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
                            type="title"
                            text="Clinical Tools"
                        />
                        {isPad && (
                            <Text type="small" text="Suggestive Cannula" />
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
