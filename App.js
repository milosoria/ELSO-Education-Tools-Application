import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { ActivityIndicator,useWindowDimensions } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { create } from './src/utils/normalize'
import colors from './src/utils/color-palette'
import useOrientation from './src/utils/orientation'
import Blender from './src/screens/Blender'
import Carousel from './src/screens/Carousel'
import PDB from './src/screens/PDB'
import DimensionContext from './src/contexts/dimensionContext'

const Stack = createNativeStackNavigator()

const App = () => {
    const isLandscape = useOrientation()
    const { height,width } = useWindowDimensions()
    const dimension = isLandscape ? 0.9* width : 0.9* height

    let [fontsLoaded] = useFonts({
        'Digital-Numbers' : require('./assets/fonts/DigitalNumbers-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return (
            <ActivityIndicator/>
        )
    }

    return (
        <NavigationContainer>
            <StatusBar style={styles.statusBar}/>
            <DimensionContext.Provider value={{ dimension }}>
                <Stack.Navigator initialRouteName='Carousel' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Carousel' component={Carousel}/>
                    <Stack.Screen name='Blender' component={Blender}/>
                    <Stack.Screen name='PDB' component={PDB}/>
                </Stack.Navigator>
            </DimensionContext.Provider>
        </NavigationContainer>
    )
}

const styles = create({
    statusBar : {
        backgroundColor : colors.primary.background
    }
})

export default App
