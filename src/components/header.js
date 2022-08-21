import { useContext, useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import DimensionContext from '../contexts/dimensionContext'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'
import Icon from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import useOrientation from '../utils/orientation'


const Header = ({ route, navigation }) => {
    const { name } = route
    const isLandscape = useOrientation()
    const { maxDimension } = useContext(DimensionContext)
    const buttonsContainerSize = maxDimension * 0.2
    const [backButtonVisible, setBackButtonVisible] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        navigation.canGoBack() ? setBackButtonVisible(true) : setBackButtonVisible(false)
    }, [navigation])

    useEffect(() => {
        setVisible(!(isLandscape && name == 'Blender'))
    })

    const styles = create({
        shadowWrap : {
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
        },
        container : {
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-between',
            height : maxDimension * 0.08,
            backgroundColor : colors.primary.darkHeader
        },
        backButton : {
            flexDirection : 'row',
            justifyContent : 'center',
            backgroundColor : colors.secondary.blue,
            borderRadius : 100,
            paddingHorizontal : maxDimension * 0.03,
            paddingVertical : maxDimension * 0.0065,
        },
        backButtonIcon : {
            color : colors.primary.white,
            marginRight : maxDimension * 0.005
        },
        backButtonText : {
            alignSelf : 'center',
            color : colors.primary.white,
            fontSize : fontSizes.big,
            fontWeight : '500',
            marginLeft : maxDimension * 0.005,
            marginRight : maxDimension * 0.015
        },
        buttonContainer : {
            width : buttonsContainerSize,
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center',
        },
        logoContainer : {
            justifyContent : 'center',
        },
        logo : {
            height : maxDimension * 0.055,
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
                        <TouchableOpacity
                            style={styles.shadowWrap}
                            onPress={handleBackPress}>
                            <LinearGradient style={styles.backButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                                <Icon name='arrowleft' size={maxDimension * 0.025} style={styles.backButtonIcon} />
                                <Text style={styles.backButtonText}>Back</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.buttonContainer} />}
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo-header-bar.png')} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer} />
        </SafeAreaView >
    )
}

export default Header
