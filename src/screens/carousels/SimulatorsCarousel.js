import { FlatList, ImageBackground, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import { useContext } from 'react'
import colors from '../../utils/color-palette'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { LinearGradient } from 'expo-linear-gradient'
import fontSizes from '../../utils/font-sizes'

const DATA = [
    {
        id : '1',
        name : 'Blender',
        description : 'Air-oxygen mixer simulator',
        imagePath : require('../../assets/carousel/blender-background.png')
    },
    {
        id : '2',
        name : 'PDB',
        description : 'Pressure display box simulator',
        imagePath : require('../../assets/carousel/pdb-background.png')
    },
]

const SimulatorsCarousel = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)

    const Item = ({ name, description, imagePath }) => (
        <ImageBackground style={styles.item} imageStyle={styles.background} source={imagePath} >
            <View style={styles.cardContainer}>
                {name ? (
                    <TouchableHighlight style={styles.shadowWrap} underlayColor='#FFFFFF' activeOpacity={0.8} onPress={() => navigation.navigate(name)}>
                        <LinearGradient style={styles.button} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[colors.primary.blue, colors.secondary.blueGradient]}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                ) : (
                    <View style={[styles.button, { backgroundColor: colors.secondary.disabled }]}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </View>
                )}
                <View style={styles.cardInfo}>
                    <Text style={styles.titleText}>{name ? name : 'Coming Soon'}</Text>
                    <Text style={styles.subTitleText}>{description ? description : 'New simulators and tools'}</Text>
                </View>
            </View>
        </ImageBackground>
    )

    const renderItem = ({ item }) => (
        <Item {...item} />
    )

    const styles = create({
        shadowWrap : {
            shadowOpacity : 0.2,
            shadowOffset : { width: 4, height: 4 },
            marginTop : maxDimension * 0.02,
            marginBottom : maxDimension * 0.025,
            //TODO: fix this TouchableHighlight width
            marginHorizontal : maxDimension * 0.041,
            flexDirection : 'row',
            borderRadius : 100,
        },
        button : {
            alignSelf : 'center',
            alignItems : 'center',
            flex : 1,
            paddingVertical : maxDimension * 0.008,
            paddingHorizontal : maxDimension * 0.045,
            borderRadius : 100,
        },
        buttonText : {
            fontFamily : 'SFPro-Medium',
            color : colors.primary.white,
            fontSize : fontSizes.body,
        },
        container : {
            backgroundColor : colors.primary.darkBackground,
            flex : 1,
        },
        info : {
            flex : 2,
            backgroundColor : colors.primary.blue
        },
        cardContainer : {
            flexDirection : 'column-reverse',
            flex : 1
        },
        item : {
            alignSelf : 'center',
            borderRadius : 8,
            width : maxDimension * 0.26,
            height : maxDimension * 0.35,
            marginHorizontal : maxDimension * 0.02,
            shadowOpacity : 0.8,
            shadowOffset : { height: 4, width: 4 },
        },
        background : {
            borderRadius : 8,
            resizeMode : 'cover',
            opacity : 0.5
        },
        titleText : {
            color : 'white',
            fontSize : fontSizes.subtitles,
            fontFamily : 'SFPro-Bold',
        },
        subTitleText : {
            color : 'white',
            fontSize : fontSizes.medium,
            fontWeight : '300',
            fontFamily : 'SFPro-Regular',
        },
        cardInfo : {
            marginLeft : maxDimension * 0.025,
        },
        listView : {
            flexDirection : 'row',
            flex : 1,
            justifyContent : 'center',
        },
        titleContainer : {
            marginLeft : maxDimension * 0.05,
            marginBottom : maxDimension * 0.05,
            flex : 1,
            flexDirection : 'column-reverse'
        },
        mainTitle : {
            color : 'white',
            fontSize : fontSizes.titles,
            fontFamily : 'SFPro-Bold',
        },
        mainSubTitle : {
            color : 'white',
            fontSize : fontSizes.body,
            fontFamily : 'SFPro-Medium',
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.info}>
                <View style={styles.titleContainer}>
                    <Text style={styles.mainSubTitle}>Scroll and select a simulator</Text>
                    <Text style={styles.mainTitle}>Simulations</Text>
                </View>
            </View>
            <FlatList
                contentContainerStyle={styles.listView}
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


export default SimulatorsCarousel