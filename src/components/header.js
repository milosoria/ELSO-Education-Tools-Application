import { useContext, useEffect, useState } from 'react'
import { Image, Platform, Pressable, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import DimensionContext from '../contexts/dimensionContext'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'
import Icon from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import useOrientation from '../utils/orientation'


const Header = ({ route, navigation }) => {
    const isLandscape = useOrientation()
    const { maxDimension } = useContext(DimensionContext)
    const buttonsContainerSize = Platform.isPad ? maxDimension * 0.2 : maxDimension * 0.1
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        navigation.canGoBack() ? setBackButtonVisible(true) : setBackButtonVisible(false)
    }, [navigation])

    useEffect(() => {
        setVisible(!(isLandscape && route.name == 'Blender'))
    })

    const handleBackHome = () => {
        if (route.name !== 'Menu') navigation.popToTop()
    }

    const styles = create({
        shadowWrap : {
            shadowOpacity : 0.3,
            shadowOffset : { width: 4, height: 4 },
            borderRadius : 40
        },
        container : {
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-between',
            height : Platform.isPad ? maxDimension * 0.08 : maxDimension * 0.09,
            backgroundColor : colors.primary.darkHeader
        },
        backButton : {
            flexDirection : 'row',
            backgroundColor : colors.secondary.blue,
            borderRadius : 40,
            paddingVertical : maxDimension * 0.006,
            paddingLeft : maxDimension * 0.03,
            paddingRight : maxDimension * 0.05,
        },
        backButtonIcon : {
            color : colors.primary.white,
            alignSelf : 'flex-end',
            marginRight : maxDimension * 0.008
        },
        backButtonText : {
            fontFamily : 'SFPro-Medium',
            alignSelf : 'center',
            color : colors.primary.white,
            fontSize : fontSizes.large,
            marginLeft : maxDimension * 0.008,
        },
        buttonContainer : {
            width : buttonsContainerSize,
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center',
        },
        logoContainer : {
            justifyContent : 'center',
            paddingBottom : maxDimension * 0.01
        },
        logo : {
            height : maxDimension * 0.045,
            resizeMode : 'contain',
        }
    })

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        visible && <SafeAreaView style={styles.container}>
            {
                backButtonVisible ?
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            underlayColor='#FFFFFF'
                            activeOpacity={0.8}
                            style={styles.shadowWrap}
                            onPress={handleBackPress}>
                            <LinearGradient style={styles.backButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                                <Icon name='arrowleft' size={maxDimension * 0.03} style={styles.backButtonIcon} />
                                <Text style={styles.backButtonText}>Back</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                    </View>
                    : <View style={styles.buttonContainer} />}
            <Pressable onPress={handleBackHome} style={styles.logoContainer}>
                <Image source={require('../../assets/header-logo.png')} style={styles.logo} />
            </Pressable>
            <View style={styles.buttonContainer} />
        </SafeAreaView >
    )
}

export default Header
