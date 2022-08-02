import { StyleSheet, View } from 'react-native'
import LeftPannel from '../components/pdb/leftPannel'
import CenterPannel from '../components/pdb/centerPannel'
import RightPannel from '../components/pdb/rightPannel'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
import colors from '../utils/color-palette'

const PDB = () => {
    const { dimension } = useContext(DimensionContext)

    return (
        <View style={styles.container}>
            <LeftPannel dimension={dimension}/>
            <CenterPannel dimension={dimension}/>
            <RightPannel dimension={dimension}/>
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
