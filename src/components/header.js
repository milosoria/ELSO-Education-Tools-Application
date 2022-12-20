import { useEffect, useState } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
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
            height = statusBarHeight * 3.2
        } else if (30 <= statusBarHeight && statusBarHeight <= 50)
            height = statusBarHeight * 2
        else height = statusBarHeight * 1.8
    }
    return height
}

const Header = ({ route, navigation }) => {
    const [darkBg, arrowColor] = useToken('colors', [
        'primary.black.100',
        'primary.gray.50',
    ])
    const isLandscape = useOrientation()
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)
    const { top: statusBarHeight } = useSafeAreaInsets()
    const arrowSize = useBreakpointValue({
        base: 23,
        sm: 30,
        md: 30,
        lg: isLandscape ? 25 : 35,
        xl: 30,
    })
    const mlBackButton = useBreakpointValue({
        base: 10,
        sm: 15,
        md: 20,
    })

    let height = heightCalc(isLandscape, statusBarHeight)

    useEffect(() => {
        navigation.canGoBack()
            ? setBackButtonVisible(true)
            : setBackButtonVisible(false)
    }, [navigation])

    const styles = {
        container: {
            height: height,
        },
        icon: {
            pr: Platform.isPad ? (isLandscape ? '5%' : '10%') : '0%',
        },
        button: {
            width: Platform.isPad ? (isLandscape ? '30%' : '42%') : '50%',
        },
    }

    useEffect(() => {
        setVisible(
            !(isLandscape && (route.name == 'Blender' || route.name == 'PDB'))
        )
    })

    const handleBackHome = () => {
        if (route.name !== 'Menu') navigation.popToTop()
    }

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        visible && (
            <SafeAreaView
                style={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: styles.container.height,
                    backgroundColor: darkBg,
                }}
            >
                {backButtonVisible ? (
                    <Box flex={1} justifyContent="center" alignSelf="center">
                        <Button
                            style={{
                                alignSelf: 'flex-start',
                                width: styles.button.width,
                                marginLeft: mlBackButton,
                                bottom: Platform.isPad ? 0 : 2,
                            }}
                            onPress={handleBackPress}
                        >
                            <Box flexDirection="row">
                                <Icon
                                    name="arrowleft"
                                    size={arrowSize}
                                    style={{
                                        color: arrowColor,
                                        alignSelf: 'center',
                                        paddingRight: styles.icon.pr,
                                    }}
                                />

                                {Platform.isPad && (
                                    <Text
                                        color="white"
                                        fontSize={{
                                            base: isLandscape ? 'sm' : 'xl',
                                            sm: isLandscape ? 'sm' : 'xl',
                                            md: isLandscape ? 'md' : 'xl',
                                            lg: isLandscape ? 'xl' : '2xl',
                                            xl: isLandscape ? '2xl' : '2xl',
                                        }}
                                        fontWeight="600"
                                    >
                                        Back
                                    </Text>
                                )}
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
                    alignSelf="center"
                    paddingBottom="0.5%"
                >
                    <Image
                        alt="logo"
                        source={require('../../assets/header-logo.png')}
                        height="90%"
                        resizeMode="contain"
                    />
                </Pressable>
                <Box flex={1} alignItems="flex-start" justifyContent="center" />
            </SafeAreaView>
        )
    )
}

export default Header
