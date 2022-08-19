import { useContext } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import DimensionContext from '../contexts/dimensionContext'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import fontSizes from '../utils/font-sizes'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import HeaderShownContext from '../contexts/headerContext'


const Header = ({ navigation }) => {
    const { headerShown } = useContext(HeaderShownContext)
    const { maxDimension } = useContext(DimensionContext)
    const buttonsContainerSize = maxDimension * 0.15
    const styles = create({
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
            paddingHorizontal : maxDimension * 0.035,
            paddingVertical : maxDimension * 0.005,
            marginLeft : maxDimension * 0.01
        },
        backButtonIcon : {
            color : colors.primary.white,
            right : maxDimension * 0.008
        },
        backButtonText : {
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            fontWeight : '500',
            marginLeft : maxDimension * 0.01,
            marginRight : maxDimension * 0.01
        },
        buttonContainer : {
            width : buttonsContainerSize,
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center',
        },
        settingsButton : {
            marginLeft : maxDimension * 0.1
        },
        logoContainer : {
            alignItems : 'center',
            justifyContent : 'center',
        },
        logo : {
            height : maxDimension * 0.05,
            resizeMode : 'contain',
        }
    })

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        headerShown && <SafeAreaView style={styles.container}>
            {
                navigation.canGoBack() ?
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleBackPress}>
                            <Icon name='arrowleft' size={maxDimension * 0.025} style={styles.backButtonIcon} />
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.buttonContainer} />}
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo-header-bar.png')} style={styles.logo} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={() => console.log('TODO: must implement settings modal')}>
                    <Ionicon name='settings-sharp' size={maxDimension * 0.035} style={{ color: colors.primary.gray }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default Header
