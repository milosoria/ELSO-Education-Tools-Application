import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import {
    Blender,
    ClinicalTools,
    CompanyInfo,
    Menu,
    PDB,
    Selector,
    Simulators,
} from '../screens/'
import { Header } from '../components/'
// import Client from '../screens/Client'
// import Server from '../screens/Server'

const Stack = createNativeStackNavigator()

const NavigationContainer = () => {
    return (
        <RNNavigationContainer>
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
                <Stack.Group>
                    <Stack.Screen name="Simulators" component={Simulators} />
                    <Stack.Screen name="Blender" component={Blender} />
                    <Stack.Screen name="PDB" component={PDB} />
                    <Stack.Screen name="Selector" component={Selector} />
                </Stack.Group>
                <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
                <Stack.Screen name="ClinicalTools" component={ClinicalTools} />
            </Stack.Navigator>
        </RNNavigationContainer>
    )
}
export default NavigationContainer
