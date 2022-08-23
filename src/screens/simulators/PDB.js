import { StyleSheet, View } from 'react-native'
import LeftPannel from '../../components/simulators/pdb/leftPannel'
import CenterPannel from '../../components/simulators/pdb/centerPannel'
import RightPannel from '../../components/simulators/pdb/rightPannel'
import colors from '../../utils/color-palette'

const PDB = () => {
    return (
        <View style={styles.container}>
            <LeftPannel />
            <CenterPannel />
            <RightPannel />
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
