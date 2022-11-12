import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import { useCallback, useContext } from 'react'
import colors from '../../utils/color-palette'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { LinearGradient } from 'expo-linear-gradient'
import fontSizes from '../../utils/font-sizes'

const Item = ({ name, description, imagePath }) => {
    const styles = create({
        shadowWrap: {
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            marginTop: maxDimension * 0.02,
            marginBottom: maxDimension * 0.025,
            marginHorizontal: maxDimension * 0.041,
            flexDirection: 'row',
            borderRadius: 40,
        },
        button: {
            alignSelf: 'center',
            alignItems: 'center',
            flex: 1,
            paddingVertical: maxDimension * 0.008,
            paddingHorizontal: maxDimension * 0.045,
            borderRadius: 40,
        },
        buttonText: {
            fontFamily: 'SFPro-Medium',
            color: colors.primary.white,
            fontSize: fontSizes.large,
        },
        container: {
            backgroundColor: colors.primary.darkBackground,
            flex: 1,
        },
        info: {
            flex: 2,
            backgroundColor: colors.primary.darkBackground,
        },
        cardContainer: {
            flexDirection: 'column-reverse',
            flex: 1,
            marginBottom: maxDimension * 0.015,
        },
        item: {
            alignSelf: 'center',
            borderRadius: 8,
            width: maxDimension * 0.26,
            height: maxDimension * 0.35,
            marginHorizontal: maxDimension * 0.02,
            shadowOpacity: 0.2,
            shadowOffset: { height: 4, width: 4 },
        },
        background: {
            borderRadius: 8,
            resizeMode: 'cover',
        },
        titleText: {
            color: colors.primary.white,
            fontSize: fontSizes.subtitles,
            fontFamily: 'SFPro-Bold',
        },
        subTitleText: {
            color: colors.primary.white,
            fontSize: fontSizes.medium,
            fontWeight: '300',
            fontFamily: 'SFPro-Regular',
        },
        cardInfo: {
            marginLeft: maxDimension * 0.025,
        },
        listView: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
        },
        titleContainer: {
            marginLeft: maxDimension * 0.05,
            marginBottom: maxDimension * 0.05,
            flex: 1,
            flexDirection: 'column-reverse',
        },
        mainTitle: {
            color: colors.primary.white,
            fontSize: fontSizes.titles,
            fontFamily: 'SFPro-Bold',
        },
        mainSubTitle: {
            color: colors.primary.white,
            fontSize: fontSizes.body,
            fontFamily: 'SFPro-Medium',
        },
    })
    return (
        <ImageBackground
            style={styles.item}
            imageStyle={styles.background}
            source={imagePath}
        >
            <View style={styles.cardContainer}>
                {name ? (
                    <TouchableHighlight
                        style={styles.shadowWrap}
                        underlayColor="#FFFFFF"
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate(name)}
                    >
                        <LinearGradient
                            style={styles.button}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                colors.primary.blue,
                                colors.secondary.blueGradient,
                            ]}
                        >
                            <Text style={styles.buttonText}>Continue</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                ) : (
                    <View
                        style={[
                            styles.button,
                            { backgroundColor: colors.secondary.disabled },
                        ]}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </View>
                )}
                <View style={styles.cardInfo}>
                    <Text style={styles.titleText}>
                        {name ? name : 'Coming Soon'}
                    </Text>
                    <Text style={styles.subTitleText}>
                        {description ? description : 'New simulators and tools'}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Item
