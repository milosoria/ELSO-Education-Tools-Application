import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import fontSizes from '../utils/font-sizes'

const Menu = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)

    const styles = create({
        container : {
            backgroundColor : colors.primary.darkBackground,
            alignItems : 'center',
            flex : 1,
        },
        card : {
            backgroundColor : colors.primary.gray,
            height : maxDimension * 0.22,
            width : maxDimension * 0.55,
            marginVertical : maxDimension * 0.02,
            borderRadius : 10,
            flexDirection : 'row',
            alignItems : 'center'
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
            fontSize : fontSizes.subtitles
        },
        subTitleText : {
            fontFamily : 'SFPro-Medium',
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            marginTop : maxDimension * 0.005
        },
        buttonContainer : {
            alignSelf : 'center',
            marginLeft : maxDimension * 0.1
        },
        button : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : maxDimension * 0.035,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 100,
        },
        buttonDisabled : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.secondary.disabled,
            paddingHorizontal : maxDimension * 0.035,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 100,
        },
        shadowWrap : {
            borderRadius : 100,
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
        },
        buttonText : {
            color : colors.primary.white,
            fontSize : fontSizes.body,
            fontFamily : 'SFPro-Medium',
        },
        companyCard : {
            backgroundColor : colors.primary.gray,
            height : maxDimension * 0.22,
            width : maxDimension * 0.55,
            marginVertical : maxDimension * 0.02,
            borderRadius : 10,
            flexDirection : 'column',
        },
        companyInfoTitle : {
            alignItems : 'flex-start',
            width : maxDimension * 0.25,
            marginLeft : maxDimension * 0.04,
            marginTop : maxDimension * 0.04
        },
        companyInfoButton : {
            alignItems : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : maxDimension * 0.04,
            paddingVertical : maxDimension * 0.008,
            borderRadius : 100,
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
            marginRight : maxDimension * 0.01
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsContainer}>
                    <View style={[styles.companyCard, { opacity: 0.8 }]}>
                        <View style={styles.companyInfoTitle}>
                            <Text style={styles.titleText}>
                                Welcome to ELSO educational tools app!
                            </Text>
                        </View>
                        <View style={[styles.buttonContainer, { marginTop: maxDimension * 0.05, marginLeft: 0 }]}>
                            <View style={styles.buttonDisabled}>
                                <Text style={styles.buttonText}>Learn about ELSO</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                ECMO Machines Simulators
                            </Text>
                            <Text style={styles.subTitleText}>
                                Air-Oxygen Blender - Pressure Display Box
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight underlayColor='#FFFFFF' activeOpacity={0.8} style={styles.shadowWrap} onPress={() => navigation.navigate('SimulatorsCarousel')}>
                                <LinearGradient style={styles.button} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                                    <Text style={styles.buttonText}>Go</Text>
                                </LinearGradient>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={[styles.card, { opacity: 0.8 }]}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                Clinical Tools
                            </Text>
                            <Text style={styles.subTitleText}>
                                Suggestive Canula
                            </Text>
                        </View>
                        <View>
                            <View style={[styles.buttonContainer, { marginTop: maxDimension * 0.05 }]}>
                                <View style={styles.buttonDisabled}>
                                    <Text style={styles.buttonText}>Go</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: maxDimension * 0.01 }}>
                                <Text style={styles.disabledText}>Coming</Text>
                                <Text style={[styles.disabledText, { marginRight: maxDimension * 0.025 }]}>soon!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu
