import { ActivityIndicator, StyleSheet,View } from 'react-native'
import LeftPannel from '../components/pdb/leftPannel'
import CenterPannel from '../components/pdb/centerPannel'
import RightPannel from '../components/pdb/rightPannel'
import colors from '../utils/color-palette'
import { useFonts } from 'expo-font'

const PDB = () => {

    let [fontsLoaded] = useFonts({
        'Digital-Numbers' : require('../../assets/fonts/DigitalNumbers-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <ActivityIndicator/>
    }

    return (
        <View style={styles.container}>
            <LeftPannel/>
            <CenterPannel/>
            <RightPannel/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary.background,
        flexDirection : 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default PDB
