import { useFonts } from 'expo-font'
import { useState } from 'react'
import { ActivityIndicator, StatusBar, useWindowDimensions } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import FunctionsContext from './src/contexts/functionalitiesContext'
import CompanyInfo from './src/screens/CompanyInfo'
import Menu from './src/screens/Menu'
import Blender from './src/screens/simulators/Blender'
import PDB from './src/screens/simulators/PDB'
import Simulators from './src/screens/carousels/Simulators'
import ClinicalTools from './src/screens/carousels/ClinicalTools'
import Header from './src/components/header'
import useOrientation from './src/utils/orientation'
import DimensionContext from './src/contexts/dimensionContext'
import Client from './src/screens/Client'
import Server from './src/screens/Server'

const Stack = createNativeStackNavigator()

const App = () => {
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
                <NavigationContainer>
                    <StatusBar barStyle="light-content" />
                    <Stack.Navigator
                        initialRouteName="Menu"
                        screenOptions={{
                            header: ({ route, navigation }) => (
                                <Header navigation={navigation} route={route} />
                            ),
                        }}
                    >
                        <Stack.Screen name="Menu" component={Menu} />
                        <Stack.Screen
                            name="CompanyInfo"
                            component={CompanyInfo}
                        />
                        <Stack.Group>
                            <Stack.Screen
                                name="Simulators"
                                component={Simulators}
                            />
                            <Stack.Screen name="Blender" component={Blender} />
                            <Stack.Screen name="PDB" component={PDB} />
                        </Stack.Group>
                        <Stack.Group>
                            <Stack.Screen
                                name="ClinicalTools"
                                component={ClinicalTools}
                            />
                        </Stack.Group>
                        <Stack.Group>
                            <Stack.Screen name="Client" component={Client} />
                            <Stack.Screen name="Server" component={Server} />
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </FunctionsContext.Provider>
        </DimensionContext.Provider>
    )
}
export default App
