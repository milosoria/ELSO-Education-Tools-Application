import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import {
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native'
import Modal from '../components/iphoneModal'
import fontSizes from '../utils/font-sizes'
import { Button } from '../atoms/'

// TODO: fix scrolling
const Menu = ({ navigation }) => {
    const { isPad } = Platform

    const styles = create({
        image: {
            borderRadius: 15,
            width: '100%',
            height: '100%',
        },
        container: {
            backgroundColor: colors.primary.darkBackground,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        card: {
            height: '60%',
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
        buttonText: {
            color: colors.primary.white,
            fontSize: fontSizes.body,
            fontFamily: 'SFPro-Medium',
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            {isPad ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width: '90%' }}
                    scrollToOverflowEnabled={true}
                >
                    <ImageBackground
                        source={require('../assets/navigation/company-info.png')}
                        imageStyle={styles.image}
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
                            onPress={() => navigation.navigate('CompanyInfo')}
                            style={{
                                top: '10%',
                                width: '50%',
                            }}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    {
                                        paddingVertical: '2%',
                                    },
                                ]}
                            >
                                Learn about ELSO
                            </Text>
                        </Button>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/navigation/simulators.png')}
                        imageStyle={styles.image}
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
                            onPress={() => navigation.navigate('Simulators')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    { paddingVertical: '4.5%' },
                                ]}
                            >
                                Go
                            </Text>
                        </Button>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/navigation/clinical-tools.png')}
                        imageStyle={styles.image}
                        style={styles.card}
                    >
                        <View style={styles.title}>
                            <Text style={styles.titleText}>Clinical Tools</Text>
                            <Text style={styles.subTitleText}>
                                Suggestive Canula
                            </Text>
                        </View>
                        <Button
                            onPress={() => navigation.navigate('ClinicalTools')}
                            style={{
                                width: '15%',
                                left: '20%',
                            }}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    { paddingVertical: '4.5%' },
                                ]}
                            >
                                Go
                            </Text>
                        </Button>
                    </ImageBackground>
                </ScrollView>
            ) : (
                <Modal />
            )}
        </SafeAreaView>
    )
}

export default Menu
