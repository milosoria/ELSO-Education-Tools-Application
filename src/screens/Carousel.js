import { SafeAreaView,Text, TouchableOpacity,View } from 'react-native'
import colors from '../utils/color-palette'
import { create } from '../utils/normalize'

const Carousel = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.row}>
            <View style={styles.column}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Blender')}>
                    <Text >Blender</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('PDB')}>
                    <Text>PDB</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = create({
    button : {
        marginHorizontal : 5,
        backgroundColor : colors.secondary.blue,
        padding : 10,
        borderRadius : 5
    },
    column : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    row : {
        backgroundColor : colors.primary.background,
        flex : 1 ,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    }
})
export default Carousel
