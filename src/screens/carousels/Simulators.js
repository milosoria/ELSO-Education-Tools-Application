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

const DATA = [
    {
        id: '1',
        name: 'Blender',
        description: 'Air-oxygen mixer simulator',
        imagePath: require('../../assets/carousel/blender.png'),
    },
    {
        id: '2',
        name: 'PDB',
        description: 'Pressure display box simulator',
        imagePath: require('../../assets/carousel/pdb.png'),
    },
]

const Simulators = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)

    const Item = ({ name, description, imagePath }) => (
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

    const renderItem = useCallback(({ item }) => <Item {...item} />, [])

    const styles = create({
        container: {
            backgroundColor: colors.primary.darkBackground,
            flex: 1,
        },
        info: {
            height: '40%',
            backgroundColor: colors.primary.darkBackground,
        },
        cardContainer: {
            flexDirection: 'column-reverse',
            flex: 1,
        },
        item: {
            borderRadius: 10,
            width: '65%',
            height: '70%',
            shadowOpacity: 0.2,
            shadowOffset: { height: 4, width: 4 },
        },
        background: {
            height: '100%',
            width: '100%',
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
            marginLeft: '10%',
        },
        listView: {
            justifyContent: 'space-around',
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
        },
        titleContainer: {
            marginLeft: '5%',
            marginBottom: '5%',
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
        shadowWrap: {
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            marginTop: '5%',
            marginBottom: '10%',
            marginHorizontal: '15%',
            flexDirection: 'row',
            borderRadius: 40,
        },
        button: {
            alignSelf: 'center',
            alignItems: 'center',
            flex: 1,
            paddingVertical: '4%',
            paddingHorizontal: '10%',
            borderRadius: 40,
        },
        buttonText: {
            fontFamily: 'SFPro-Medium',
            color: colors.primary.white,
            fontSize: fontSizes.large,
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/navigation/simulators.png')}
                imageStyle={{ height: '100%', opacity: 0.8 }}
                style={styles.info}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.mainSubTitle}>
                        Scroll and select a simulator
                    </Text>
                    <Text style={styles.mainTitle}>Simulations</Text>
                </View>
            </ImageBackground>
            <FlatList
                contentContainerStyle={styles.listView}
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

export default Simulators
