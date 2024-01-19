import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons} from '@expo/vector-icons';
import Home from '../Home'
import Settings from '../Setting'

const Tab = createBottomTabNavigator();


const Dashboard = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="home" options={{ headerShown: false, tabBarIcon: () => (<Entypo name="home" size={24} color="black" />) }} component={Home} />
      <Tab.Screen name="setting" options={{ headerShown: false, tabBarIcon: () => (<Ionicons name="settings" size={24} color="black" />) }} component={Settings} />
    </Tab.Navigator>
  )
}

export default Dashboard
