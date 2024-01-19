import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import AddToDo from '../screens/AddToDo';

const Stack = createNativeStackNavigator();
const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
                <Stack.Screen name="addtodo" component={AddToDo} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route
