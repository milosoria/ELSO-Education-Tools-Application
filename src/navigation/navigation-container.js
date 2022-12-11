import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import CompanyInfo from '../screens/CompanyInfo'
import Menu from '../screens/Menu'
import Blender from '../screens/simulators/Blender'
import PDB from '../screens/simulators/PDB'
import Simulators from '../screens/carousels/Simulators'
import ClinicalTools from '../screens/carousels/ClinicalTools'
import Header from '../components/header'
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
                <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
                <Stack.Group>
                    <Stack.Screen name="Simulators" component={Simulators} />
                    <Stack.Screen name="Blender" component={Blender} />
                    <Stack.Screen name="PDB" component={PDB} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        name="ClinicalTools"
                        component={ClinicalTools}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </RNNavigationContainer>
    )
}
export default NavigationContainer
