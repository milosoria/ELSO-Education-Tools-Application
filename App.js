import { useFonts } from 'expo-font'
import { ActivityIndicator } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import ContextProvider from './src/contexts/context-provider'
import NavigationContainer from './src/navigation/navigation-container'
import theme from './theme'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
    let [fontsLoaded] = useFonts({
        'Digital-Numbers': require('./assets/fonts/DigitalNumbers-Regular.ttf'),
        'SFPro-Bold': require('./assets/fonts/SFPro-Bold.ttf'),
        'SFPro-Heavy': require('./assets/fonts/SFPro-Heavy.ttf'),
        'SFPro-Light': require('./assets/fonts/SFPro-Light.ttf'),
        'SFPro-Medium': require('./assets/fonts/SFPro-Medium.ttf'),
        'SFPro-Regular': require('./assets/fonts/SFPro-Regular.ttf'),
        'SFPro-Semibold': require('./assets/fonts/SFPro-Semibold.ttf'),
    })

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <ContextProvider>
            <NativeBaseProvider
                config={{
                    dependencies: {
                        'linear-gradient': LinearGradient,
                    },
                }}
                theme={theme}
            >
                <NavigationContainer />
            </NativeBaseProvider>
        </ContextProvider>
    )
}
export default App
