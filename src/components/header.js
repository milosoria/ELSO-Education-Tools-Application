import { useEffect, useState } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { create } from '../utils/normalize'
import Icon from 'react-native-vector-icons/AntDesign'
import useOrientation from '../utils/orientation'
import { Button } from '../atoms'
import {
    Box,
    Image,
    Pressable,
    Text,
    useBreakpointValue,
    useToken,
} from 'native-base'

const heightCalc = (isLandscape, statusBarHeight) => {
    let height
    if (Platform.isPad) {
        height = isLandscape ? '10%' : '8%'
    } else {
        if (20 <= statusBarHeight && statusBarHeight < 30) {
            height = statusBarHeight * 2.8
        } else if (30 <= statusBarHeight && statusBarHeight <= 50)
            height = statusBarHeight * 1.7
        else height = statusBarHeight * 1.5
    }
    return height
}

const Header = ({ route, navigation }) => {
    const [darkBg, iconColor] = useToken('colors', [
        'primary.black.100',
        'primary.gray.50',
    ])
    const isLandscape = useOrientation()
    const backIconSize = useBreakpointValue({
        base: 25,
        lg: isLandscape ? 25 : 35,
        xl: 30,
    })
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)
    const { top: statusBarHeight } = useSafeAreaInsets()

    let height = heightCalc(isLandscape, statusBarHeight)

    useEffect(() => {
        navigation.canGoBack()
            ? setBackButtonVisible(true)
            : setBackButtonVisible(false)
    }, [navigation])

    useEffect(() => {
        setVisible(
            !(isLandscape && (route.name == 'Blender' || route.name == 'PDB'))
        )
    })

    const handleBackHome = () => {
        if (route.name !== 'Menu') navigation.popToTop()
    }
    const styles = create({
        container: {
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height,
            backgroundColor: darkBg,
        },
        backButtonIcon: {
            color: iconColor,
            alignSelf: 'center',
            paddingRight: isLandscape ? '5%' : '10%',
        },
        logo: {
            height: '90%',
            resizeMode: 'contain',
        },
    })

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        visible && (
            <SafeAreaView style={styles.container}>
                {backButtonVisible ? (
                    <Box
                        flex={1}
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        <Button
                            style={{
                                alignSelf: 'flex-start',
                                width: isLandscape ? '30%' : '40%',
                                marginLeft: 20,
                            }}
                            onPress={handleBackPress}
                        >
                            <Box flexDirection="row">
                                <Icon
                                    name="arrowleft"
                                    size={backIconSize}
                                    style={styles.backButtonIcon}
                                />

                                <Text
                                    color="white"
                                    fontSize={{
                                        base: isLandscape ? 'md' : 'xl',
                                        lg: isLandscape ? 'xl' : '2xl',
                                        xl: isLandscape ? '2xl' : '2xl',
                                    }}
                                    fontWeight="600"
                                >
                                    Back
                                </Text>
                            </Box>
                        </Button>
                    </Box>
                ) : (
                    <Box
                        flex={1}
                        alignItems="flex-start"
                        justifyContent="center"
                    />
                )}
                <Pressable
                    onPress={handleBackHome}
                    justifyContent="center"
                    paddingBottom="0.5%"
                >
                    <Image
                        alt="logo"
                        source={require('../../assets/header-logo.png')}
                        style={styles.logo}
                    />
                </Pressable>
                <Box flex={1} alignItems="flex-start" justifyContent="center" />
            </SafeAreaView>
        )
    )
}

export default Header
