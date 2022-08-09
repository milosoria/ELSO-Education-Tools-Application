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
})

export default FunctionsContext
