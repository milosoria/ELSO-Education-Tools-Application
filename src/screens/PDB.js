import { StyleSheet,View } from 'react-native'
import LeftPannel from '../components/pdb/leftPannel'
import CenterPannel from '../components/pdb/centerPannel'
import RightPannel from '../components/pdb/rightPannel'
import colors from '../utils/color-palette'
import { useState } from 'react'
import FunctionsContext from '../contexts/functionalitiesContext'

const PDB = () => {

    const [inInterval, setInInterval] = useState(true) 
    const [alarmInterval, setAlarmInterval] = useState([-30,30]) 
    const [displayValue, setDisplayValue] = useState(15) 
    const [functionType ,setFunctionType] = useState('off') 
    const [unblocked ,setUnblocked] = useState('all') 

    return (
        <FunctionsContext.Provider value={{ unblocked,setUnblocked,alarmInterval,setAlarmInterval,displayValue,setDisplayValue, inInterval, setInInterval, functionType, setFunctionType }}>
            <View style={styles.container}>
                <LeftPannel/>
                <CenterPannel/>
                <RightPannel/>
            </View>
        </FunctionsContext.Provider>
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
