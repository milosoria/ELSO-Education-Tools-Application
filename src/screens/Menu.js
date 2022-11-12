import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import {
    ImageBackground,
    Platform,
    SafeAreaView,
    Text,
    View,
} from 'react-native'
import { useContext } from 'react'
import IphoneModal from '../components/iphoneModal'
import DimensionContext from '../contexts/dimensionContext'
import { ScrollView } from 'react-native-gesture-handler'
import fontSizes from '../utils/font-sizes'
import Button from '../components/button'

const Menu = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)
    const { isPad } = Platform

    const styles = create({
        container: {
            backgroundColor: colors.primary.darkBackground,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        card: {
            height: maxDimension * 0.24,
            width: '100%',
            marginVertical: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 40,
            shadowOffset: { width: 2, height: 4 },
            opacity: 0.8,
        },
        title: {
            alignItems: 'flex-start',
            width: '50%',
            marginLeft: '6%',
            marginBottom: '5%',
        },
        titleText: {
            fontFamily: 'SFPro-Semibold',
            color: colors.primary.white,
            fontSize: fontSizes.subtitles,
        },
        subTitleText: {
            fontFamily: 'SFPro-Medium',
            color: colors.primary.white,
            fontSize: fontSizes.medium,
            marginTop: '2%',
        },
        companyInfoTitle: {
            alignSelf: 'flex-start',
            width: '50%',
            marginLeft: '6%',
            marginTop: '8%',
        },
        iphoneModal: {
            backgroundColor: colors.primary.background,
            marginTop: maxDimension * 0.1,
            borderRadius: 40,
            width: maxDimension * 0.35,
            height: maxDimension * 0.5,
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '90%' }}
            >
                {isPad ? (
                    <View style={{ marginTop: '2.5%' }}>
                        <ImageBackground
                            source={require('../assets/navigation/company-info.png')}
                            imageStyle={{
                                borderRadius: 15,
                            }}
                            style={[
                                styles.card,
                                {
                                    flexDirection: 'column',
                                },
                            ]}
                        >
                            <View style={styles.companyInfoTitle}>
                                <Text style={styles.titleText}>
                                    Welcome to ELSO educational tools app!
                                </Text>
                            </View>
                            <Button
                                navigation={navigation}
                                screen="CompanyInfo"
                                text="Learn about ELSO"
                                containerStyles={{
                                    top: '35%',
                                }}
                                buttonStyles={{
                                    paddingHorizontal: '5%',
                                    paddingVertical: '1.5%',
                                }}
                                textStyles={{
                                    paddingHorizontal: 0,
                                    paddingVertical: 0,
                                }}
                            />
                        </ImageBackground>
                        <ImageBackground
                            source={require('../assets/navigation/simulators.png')}
                            imageStyle={{ borderRadius: 15 }}
                            style={styles.card}
                        >
                            <View style={styles.title}>
                                <Text style={styles.titleText}>
                                    ECMO Machines Simulators
                                </Text>
                                <Text style={styles.subTitleText}>
                                    Air-Oxygen Blender - Pressure Display Box
                                </Text>
                            </View>
                            <Button
                                navigation={navigation}
                                screen="Simulators"
                                text="Go"
                            />
                        </ImageBackground>
                        <ImageBackground
                            source={require('../assets/navigation/clinical-tools.png')}
                            imageStyle={{ borderRadius: 15 }}
                            style={styles.card}
                        >
                            <View style={styles.title}>
                                <Text style={styles.titleText}>
                                    Clinical Tools
                                </Text>
                                <Text style={styles.subTitleText}>
                                    Suggestive Canula
                                </Text>
                            </View>
                            <Button
                                navigation={navigation}
                                screen="ClinicalTools"
                                text="Go"
                            />
                        </ImageBackground>
                    </View>
                ) : (
                    <IphoneModal />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu
