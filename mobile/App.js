import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/pages/login/Login"
import Signup from './src/pages/login/Signup';
import BottomNav from './src/navigation/BottomNav';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Bottom" component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;