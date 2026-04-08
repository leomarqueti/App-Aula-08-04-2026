import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListaScreen from '../screens/ListaScreen'
import DetalhesScreen from '../screens/DetalhesScreen'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Itens" component={ListaScreen}/>
            <Stack.Screen name="Detalhes" component={DetalhesScreen}/>
        </Stack.Navigator>
    )
}