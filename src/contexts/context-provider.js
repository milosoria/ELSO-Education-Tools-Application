import { useWindowDimensions } from 'react-native'
import { DimensionContext, FunctionsContext } from './index'
import { useState } from 'react'
import useOrientation from '../utils/orientation'

const ContextProvider = (props) => {
    const isLandscape = useOrientation()
    const { width, height } = useWindowDimensions()
    const maxDimension = isLandscape ? 0.9 * width : 0.9 * height
    const minDimension = isLandscape ? 0.9 * width : 1.05 * width

    // PDB functionalities
    const [inInterval, setInInterval] = useState(true)
    const [alarmInterval, setAlarmInterval] = useState([-30, 30])
    const [displayValue, setDisplayValue] = useState(15)
    const [functionType, setFunctionType] = useState('off')
    const [unblocked, setUnblocked] = useState('all')
    const [rotations, setRotations] = useState({
        zero: 0,
        alarm: 0,
        function: 0,
    })
    return (
        <DimensionContext.Provider value={{ maxDimension, minDimension }}>
            <FunctionsContext.Provider
                value={{
                    rotations,
                    setRotations,
                    unblocked,
                    setUnblocked,
                    alarmInterval,
                    setAlarmInterval,
                    displayValue,
                    setDisplayValue,
                    inInterval,
                    setInInterval,
                    functionType,
                    setFunctionType,
                }}
            >
                {props.children}
            </FunctionsContext.Provider>
        </DimensionContext.Provider>
    )
}

export default ContextProvider
