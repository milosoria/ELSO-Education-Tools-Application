import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import {
    ImageBackground,
    Platform,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import { useContext } from 'react'
import IphoneModal from '../components/iphoneModal'
import DimensionContext from '../contexts/dimensionContext'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import fontSizes from '../utils/font-sizes'

const Menu = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)
    const { isPad } = Platform


    const styles = create({
        iphoneModal : {
            backgroundColor : colors.primary.background,
            marginTop : maxDimension * 0.1,
            borderRadius : 40,
            width : maxDimension * 0.35,
            height : maxDimension * 0.5
        },
        modalTitle : {
            fontSize : fontSizes.titles,
            fontWeight : '500',
            width : maxDimension * 0.2,
            marginLeft : maxDimension * 0.04,
            marginTop : maxDimension * 0.04
        },
        modalText : {
            marginLeft : maxDimension * 0.04,
            marginTop : maxDimension * 0.03,
            fontSize : fontSizes.body,
            width : maxDimension * 0.3,
            fontWeight : '500'
        },
        modalButton : {
            alignSelf : 'center',
            marginTop : maxDimension * 0.25,
            height : maxDimension * 0.25,
            backgroundColor : colors.secondary.blue
        },
        modalButtonText : {
            fontSize : fontSizes.big,
            color : 'white'
        },
        container : {
            backgroundColor : colors.primary.darkBackground,
            alignItems : 'center',
            flex : 1,
        },
        card : {
            height : maxDimension * 0.23,
            width : maxDimension * 0.55,
            marginVertical : maxDimension * 0.015,
            borderRadius : 15,
            flexDirection : 'row',
            alignItems : 'center',
        },
        cardsContainer : {
            marginTop : maxDimension * 0.03
        },
        title : {
            alignItems : 'flex-start',
            width : maxDimension * 0.27,
            marginLeft : maxDimension * 0.04,
            marginBottom : maxDimension * 0.03,
        },
        titleText : {
            fontFamily : 'SFPro-Semibold',
            color : colors.primary.white,
            fontSize : fontSizes.subtitles,
        },
        subTitleText : {
            fontFamily : 'SFPro-Medium',
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            marginTop : maxDimension * 0.005,
        },
        buttonContainer : {
            alignSelf : 'center',
            marginLeft : maxDimension * 0.1,
        },
        button : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : maxDimension * 0.035,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 40,
        },
        buttonDisabled : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.secondary.disabled,
            paddingHorizontal : maxDimension * 0.035,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 40,
        },
        shadowWrap : {
            borderRadius : 40,
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
        },
        buttonText : {
            color : colors.primary.white,
            fontSize : fontSizes.large,
            fontFamily : 'SFPro-Medium',
        },
        companyCard : {
            height : maxDimension * 0.23,
            width : maxDimension * 0.55,
            marginVertical : maxDimension * 0.015,
            borderRadius : 15,
        },
        companyInfoTitle : {
            alignItems : 'flex-start',
            width : maxDimension * 0.25,
            marginLeft : maxDimension * 0.04,
            marginTop : maxDimension * 0.04,
        },
        companyInfoButton : {
            alignItems : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : maxDimension * 0.04,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 40,
        },
        companyInfoButtonContainer : {
            flexDirection : 'row',
            justifyContent : 'center',
            marginTop : maxDimension * 0.045,
        },
        disabledText : {
            alignSelf : 'flex-end',
            fontSize : fontSizes.body,
            color : colors.primary.white,
            fontFamily : 'SFPro-Medium',
            marginRight : maxDimension * 0.01,
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {isPad ?
                    (<View style={styles.cardsContainer}>
                        <ImageBackground
                            source={require('../assets/navigation/company-info.png')}
                            imageStyle={{ borderRadius: 10 }}
                            style={[
                                styles.card,
                                {
                                    alignItems : 'flex-start',
                                    flexDirection : 'column',
                                    opacity : 0.8,
                                },
                            ]}
                        >
                            <View style={styles.companyInfoTitle}>
                                <Text style={styles.titleText}>
                                    Welcome to ELSO educational tools app!
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.buttonContainer,
                                    { marginTop: maxDimension * 0.05, marginLeft: 0 },
                                ]}
                            >
                                <View style={styles.buttonDisabled}>
                                    <Text style={[styles.buttonText, { opacity: 0.5 }]}>
                                        Learn about ELSO
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={require('../assets/navigation/simulators.png')}
                            imageStyle={{ borderRadius: 10 }}
                            style={styles.card}
                        >
                            <View style={styles.title}>
                                <Text style={styles.titleText}>ECMO Machines Simulators</Text>
                                <Text style={styles.subTitleText}>
                                    Air-Oxygen Blender - Pressure Display Box
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    underlayColor="#FFFFFF"
                                    activeOpacity={0.8}
                                    style={styles.shadowWrap}
                                    onPress={() => navigation.navigate('SimulatorsCarousel')}
                                >
                                    <LinearGradient
                                        style={styles.button}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[colors.primary.blue, colors.secondary.blueGradient]}
                                    >
                                        <Text style={styles.buttonText}>Go</Text>
                                    </LinearGradient>
                                </TouchableHighlight>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={require('../assets/navigation/clinical-tools.png')}
                            imageStyle={{ borderRadius: 10 }}
                            style={[styles.card, { opacity: 0.8 }]}
                        >
                            <View style={styles.title}>
                                <Text style={styles.titleText}>Clinical Tools</Text>
                                <Text style={styles.subTitleText}>Suggestive Canula</Text>
                            </View>
                            <View>
                                <View
                                    style={[
                                        styles.buttonContainer,
                                        { marginTop: maxDimension * 0.05 }
                                    ]}
                                >
                                    <View style={styles.buttonDisabled}>
                                        <Text style={[styles.buttonText, { opacity: 0.5 }]}>Go</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: maxDimension * 0.01 }}>
                                    <Text style={styles.disabledText}>Coming</Text>
                                    <Text
                                        style={[
                                            styles.disabledText,
                                            { marginRight: maxDimension * 0.025 },
                                        ]}
                                    >
                                        soon!
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>) : (<IphoneModal />
                    )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu
