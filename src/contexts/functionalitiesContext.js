import  { createContext } from 'react'

const FunctionsContext = createContext({
    inInterval : false,
    setInInterval : ()=>{},
    functionType : '',
    setFunctionType : ()=>{},
    interval : [],
    setInterval : ()=>{},
    displayValue : [],
    setDisplayValue : ()=>{},
    unblocked : 0,
    setUnblocked : ()=>{},
    rotations : { zero: 0,alarm: 0,function: 0 },
    setRotations : ()=>{}
})

export default FunctionsContext
