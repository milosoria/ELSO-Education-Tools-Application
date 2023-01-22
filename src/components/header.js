import { useEffect, useState } from 'react'
import { Dimensions, Platform, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import useOrientation from '../utils/orientation'
import { Button, Text } from '../atoms'
import {
    Box,
    Image,
    Pressable,
    useBreakpointValue,
    useToken,
} from 'native-base'

const heightCalc = (isLandscape, statusBarHeight) => {
    let height
    if (Platform.isPad) {
        height = isLandscape ? '12%' : '8%'
    } else {
        if (20 <= statusBarHeight && statusBarHeight < 30) {
            height = statusBarHeight * 3.5
        } else if (30 <= statusBarHeight && statusBarHeight <= 50)
            height = statusBarHeight * 2.2
        else height = statusBarHeight * 2
    }
    return height
}
const Header = ({ route, navigation }) => {
    const [black100, gray50] = useToken('colors', [
        'primary.black.100',
        'primary.gray.50',
    ])
    const { isPad } = Platform
    const isLandscape = useOrientation()
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)
    const { top: statusBarHeight } = useSafeAreaInsets()
    const { height: windowHeight } = Dimensions.get('window')
    const arrowSize = useBreakpointValue({
        base: windowHeight > 900 ? 25 : 23,
        sm: 30,
        md: 30,
        lg: isLandscape ? 30 : 35,
        xl: 35,
    })
    const mlBackButton = useBreakpointValue({
        base: 10,
        sm: 15,
        md: 20,
    })
    const buttonWidth = useBreakpointValue({
        base: '50%',
        sm: '50%',
        md: '45%',
        lg: isLandscape ? '35%' : '40%',
        xl: isLandscape ? '35%' : '40%',
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
            pr: isPad ? (isLandscape ? '5%' : '10%') : 0,
        },
        button: {
            width: buttonWidth,
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
                    backgroundColor: black100,
                }}
            >
                {backButtonVisible ? (
                    <Box flex={1} justifyContent="center" alignSelf="center">
                        <Button
                            style={{
                                alignSelf: 'flex-start',
                                width: styles.button.width,
                                marginLeft: mlBackButton,
                            }}
                            type="back"
                            onPress={handleBackPress}
                        >
                            <Box
                                right={isPad && '30%'}
                                flexDirection="row"
                                alignItems="center"
                            >
                                <Icon
                                    name="arrowleft"
                                    size={arrowSize}
                                    style={{
                                        color: gray50,
                                        alignSelf: 'center',
                                        paddingRight: styles.icon.pr,
                                    }}
                                />
                                {isPad && (
                                    <Text
                                        type="subtitle"
                                        text="Back"
                                        fontWeight="600"
                                    />
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
