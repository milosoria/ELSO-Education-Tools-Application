import { useEffect, useState } from 'react'
import {
    Image,
    Platform,
    Pressable,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'
import Icon from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import useOrientation from '../utils/orientation'

const Header = ({ route, navigation }) => {
    const isLandscape = useOrientation()
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)

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
            height: isLandscape ? '10%' : '8%',
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
            flexDirection: 'row',
            backgroundColor: colors.secondary.blue,
            borderRadius: 40,
            paddingVertical: isLandscape ? '1%' : '2%',
            paddingLeft: isLandscape ? '6%' : '10%',
            paddingRight: isLandscape ? '10%' : '14%',
        },
        backButtonIcon: {
            color: colors.primary.white,
            alignSelf: 'flex-end',
            paddingRight: '4%',
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
                        <TouchableHighlight
                            underlayColor="#FFFFFF"
                            activeOpacity={0.8}
                            style={styles.shadowWrap}
                            onPress={handleBackPress}
                        >
                            <LinearGradient
                                style={styles.backButton}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    colors.primary.blue,
                                    colors.secondary.blueGradient,
                                ]}
                            >
                                <Icon
                                    name="arrowleft"
                                    size={30}
                                    style={styles.backButtonIcon}
                                />
                                <Text style={styles.backButtonText}>Back</Text>
                            </LinearGradient>
                        </TouchableHighlight>
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
