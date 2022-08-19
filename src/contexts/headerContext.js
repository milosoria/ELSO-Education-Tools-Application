import { createContext } from 'react'
const headerShown = {
    headerShown : true,
    setHeaderShown : () => { }
}

const HeaderShownContext = createContext(headerShown)

export default HeaderShownContext


