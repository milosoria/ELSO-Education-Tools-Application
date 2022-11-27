import { useEffect, useState } from 'react'
import {
    Image,
    Platform,
    Pressable,
    SafeAreaView,
    Text,
    View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'
import Icon from 'react-native-vector-icons/AntDesign'
import useOrientation from '../utils/orientation'
import { Button } from '../atoms'

const Header = ({ route, navigation }) => {
    const isLandscape = useOrientation()
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)
    const { top: statusBarHeight } = useSafeAreaInsets()
    let height
    if (Platform.isPad) {
        if (isLandscape) {
            height = '10%'
        } else {
            height = '8%'
        }
    } else {
        if (statusBarHeight > 20) {
            height = statusBarHeight * 1.5
        } else {
            height = statusBarHeight * 2.5
        }
    }

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
            backgroundColor: colors.primary.darkHeader,
        },
        buttonContainer: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        shadowWrap: {
            marginLeft: '5%',
            alignSelf: 'flex-start',
            shadowOpacity: 0.3,
            shadowOffset: { width: 4, height: 4 },
            borderRadius: 40,
        },
        backButton: {
            width: isLandscape ? '30%' : '50%',
            height: isLandscape ? '75%' : '60%',
            alignSelf: 'flex-start',
            marginLeft: '5%',
            flexDirection: 'row',
            backgroundColor: colors.secondary.blue,
            borderRadius: 40,
        },
        backButtonIcon: {
            color: colors.primary.white,
            alignSelf: 'center',
            paddingRight: '10%',
        },
        backButtonText: {
            fontFamily: 'SFPro-Medium',
            alignSelf: 'center',
            color: colors.primary.white,
            fontSize: Platform.isPad ? fontSizes.large : fontSizes.medium,
        },
        logoContainer: {
            justifyContent: 'center',
            paddingBottom: '0.5%',
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
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.backButton}
                            onPress={handleBackPress}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <Icon
                                    name="arrowleft"
                                    size={30}
                                    style={styles.backButtonIcon}
                                />
                                <Text style={styles.backButtonText}>Back</Text>
                            </View>
                        </Button>
                    </View>
                ) : (
                    <View style={styles.buttonContainer} />
                )}
                <Pressable
                    onPress={handleBackHome}
                    style={styles.logoContainer}
                >
                    <Image
                        source={require('../../assets/header-logo.png')}
                        style={styles.logo}
                    />
                </Pressable>
                <View style={styles.buttonContainer} />
            </SafeAreaView>
        )
    )
}

export default Header
