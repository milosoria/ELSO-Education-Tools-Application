import { useFonts } from 'expo-font'
import { ActivityIndicator, StatusBar, useWindowDimensions } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import useOrientation from './src/utils/orientation'
import DimensionContext from './src/contexts/dimensionContext'
import CompanyInfo from './src/screens/CompanyInfo'
import Menu from './src/screens/Menu'
// import Simulators from './src/navigation/simulatorsStack'
import Blender from './src/screens/simulators/Blender'
import PDB from './src/screens/simulators/PDB'
import SimulatorsCarousel from './src/screens/carousels/SimulatorsCarousel'
import ToolsCarousel from './src/screens/carousels/ToolsCarousel'
import Header from './src/components/header'

const Stack = createNativeStackNavigator()

const App = () => {
    const isLandscape = useOrientation()
    const { width, height } = useWindowDimensions()
    const maxDimension = isLandscape ? 0.9 * width : 0.9 * height
    const minDimension = isLandscape ? 0.9 * width : 1.05 * width

    let [fontsLoaded] = useFonts({
        'Digital-Numbers' : require('./assets/fonts/DigitalNumbers-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return (
            <ActivityIndicator />
        )
    }

    return (
        <DimensionContext.Provider value={{ maxDimension, minDimension }}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" />
                <Stack.Navigator screenOptions={{
                    header : ({ route, navigation }) => <Header navigation={navigation} route={route} />
                }}>
                    <Stack.Screen name='Menu' component={Menu} />
                    <Stack.Screen name='CompanyInfo' component={CompanyInfo} />
                    <Stack.Group>
                        <Stack.Screen name='SimulatorsCarousel' component={SimulatorsCarousel} />
                        <Stack.Screen name='Blender' component={Blender} />
                        <Stack.Screen name='PDB' component={PDB} />
                    </Stack.Group>
                    <Stack.Group>
                        <Stack.Screen name='ToolsCarousel' component={ToolsCarousel} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </DimensionContext.Provider>
    )
}


export default App
