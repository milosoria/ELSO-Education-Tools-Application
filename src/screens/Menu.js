import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
import fontSizes from '../utils/font-sizes'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

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
            width : maxDimension * 0.26,
            marginLeft : maxDimension * 0.04,
            marginBottom : maxDimension * 0.03
        },
        titleText : {
            fontWeight : '600',
            color : colors.primary.white,
            fontSize : fontSizes.subtitles
        },
        subTitleText : {
            fontWeight : '400',
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            marginTop : maxDimension * 0.01
        },
        buttonContainer : {
            alignSelf : 'center',
            marginLeft : maxDimension * 0.09
        },
        button : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : 40,
            paddingVertical : 8,
            borderRadius : 100,
        },
        buttonDisabled : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.secondary.disabled,
            paddingHorizontal : 40,
            paddingVertical : 8,
            borderRadius : 100,
        },
        shadowWrap : {
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
        },
        buttonText : {
            color : colors.primary.white,
            fontSize : fontSizes.big,
            fontWeight : '600'
        },
        companyCard : {
            backgroundColor : colors.primary.gray,
            height : maxDimension * 0.22,
            width : maxDimension * 0.55,
            marginVertical : 15,
            borderRadius : 10,
            flexDirection : 'column',
        },
        companyInfoTitle : {
            alignItems : 'flex-start',
            width : maxDimension * 0.3,
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
            marginTop : maxDimension * 0.025,
        },
        disabledText : {
            alignSelf : 'center',
            fontSize : fontSizes.medium,
            color : colors.primary.white,
            fontWeight : '600',
            top : maxDimension * 0.01
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsContainer}>
                    <View style={styles.companyCard}>
                        <View style={styles.companyInfoTitle}>
                            <Text style={styles.titleText}>
                                Welcome to ELSO educational tools app!
                            </Text>
                        </View>
                        <View style={styles.companyInfoButtonContainer}>
                            <TouchableOpacity style={styles.shadowWrap} onPress={() => console.log('Pressed')}>
                                <LinearGradient style={styles.companyInfoButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                                    <Text style={styles.buttonText}>Learn about ELSO</Text>
                                </LinearGradient>
                            </TouchableOpacity>
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
                            <TouchableOpacity style={styles.shadowWrap} onPress={() => navigation.navigate('SimulatorsCarousel')}>
                                <LinearGradient style={styles.button} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                                    <Text style={styles.buttonText}>Go</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                Clinical Tools
                            </Text>
                            <Text style={styles.subTitleText}>
                                Suggestive Canula
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.shadowWrap}>
                                <View style={styles.buttonDisabled}>
                                    <TouchableOpacity onPress={() => navigation.navigate('ToolsCarousel')}>
                                        <Text style={styles.buttonText}>Go</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.disabledText}>Coming Soon!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu
