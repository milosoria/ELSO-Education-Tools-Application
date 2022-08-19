import { FlatList, ImageBackground, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useContext } from 'react'
import colors from '../../utils/color-palette'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { LinearGradient } from 'expo-linear-gradient'
import fontSizes from '../../utils/font-sizes'

const DATA = [
    {
        id : '1',
    },
    {
        id : '2',
        name : 'PDB',
        description : 'Pressure display box simulator',
        imagePath : require('../../assets/carousel/pdb-background.png')
    },
    {
        id : '3',
        name : 'Blender',
        description : 'Air-oxygen mixer simulator',
        imagePath : require('../../assets/carousel/blender-background.png')
    },
    {
        id : '4',
    },
]
const SimulatorsCarousel = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)

    const Item = ({ name, description, imagePath }) => (
        <LinearGradient style={styles.colorGradient} colors={[colors.primary.gray, colors.primary.black]}>
            <ImageBackground style={styles.item} imageStyle={styles.background} source={imagePath} >
                <View style={styles.cardInfo}>
                    <Text style={styles.titleText}>{name ? name : 'Coming Soon'}</Text>
                    <Text style={styles.subTitleText}>{description ? description : 'New simulators and tools'}</Text>
                </View>
                <Pressable style={[styles.button, { backgroundColor: name ? colors.secondary.blue : colors.primary.background }]}>
                    <TouchableOpacity onPress={() => name ? navigation.navigate(name) : null}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </Pressable>
            </ImageBackground>
        </LinearGradient>
    )

    const renderItem = ({ item }) => (
        <Item {...item} />
    )

    const styles = create({
        button : {
            top : maxDimension * 0.35,
            alignItems : 'center',
            marginHorizontal : 50,
            backgroundColor : colors.secondary.blue,
            padding : 10,
            borderRadius : 18,
            shadowRadius : 2,
            shadowOpacity : 0.5,
            shadowOffset : { width: 2, height: 2 },
        },
        buttonText : {
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            fontWeight : '500'
        },
        container : {
            backgroundColor : colors.primary.darkBackground,
            flex : 1,
            alignItems : 'center'
        },
        colorGradient : {
            flex : 1,
            alignSelf : 'center',
            borderRadius : 10,
            width : maxDimension * 0.35,
            height : maxDimension * 0.5,
            marginHorizontal : 20,
        },
        item : {
            flex : 1,
            marginHorizontal : 20,
            shadowRadius : 5,
            shadowOpacity : 0.8,
            shadowOffset : { height: 2 },
        },
        background : {
            borderRadius : 10,
            resizeMode : 'cover',
            opacity : 0.5
        },
        titleText : {
            color : 'white',
            fontSize : fontSizes.body,
            fontWeight : '700'
        },
        subTitleText : {
            color : 'white',
            fontSize : fontSizes.medium,
            fontWeight : '300'
        },
        cardInfo : {
            top : maxDimension * 0.33,
            marginLeft : 20
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


export default SimulatorsCarousel
