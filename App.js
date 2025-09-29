
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';
import SubsScreen from './screens/SubsScreen';
import RankingScreen from './screens/RankingScreen';
import FriendsScreen from './screens/FriendsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Tienda" component={StoreScreen} />
        <Tab.Screen name="Suscripciones" component={SubsScreen} />
        <Tab.Screen name="Ranking" component={RankingScreen} />
        <Tab.Screen name="Amigos" component={FriendsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
