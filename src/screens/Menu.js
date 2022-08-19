import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
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
            width : maxDimension * 0.5,
            marginVertical : 15,
            borderRadius : 10
        },
        cardContainer : {
            marginTop : 20
        },
        title : {
            alignItems : 'flex-start',
        },
        titleText : {
            fontWeight : '700',
            color : colors.primary.white,
            fontSize : fontSizes.big
        },
        button : {
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
            fontSize : fontSizes.big,
            fontWeight : '500'
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            Welcome to ELSO's educational tools app
                        </Text>
                    </View>
                    <Pressable style={[styles.button, { backgroundColor: colors.secondary.blue }]}>
                        <TouchableOpacity onPress={() => console.log('Pressed')}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </Pressable>
                </View>
                <View style={styles.card}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            ECMO Machines Simulators
                        </Text>
                        <Pressable style={[styles.button, { backgroundColor: colors.secondary.blue }]}>
                            <TouchableOpacity onPress={() => navigation.navigate('SimulatorsCarousel')}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            Clinical Tools
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Menu
