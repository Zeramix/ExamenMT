import * as React from 'react';
import { Component } from 'react';
import {Text, View,Image, StyleSheet,Linking, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Primera from './components/Primera';
import Segunda from './components/Segunda';
import Tercera from './components/Tercera';

//https://aboutreact.com/react-native-vector-icons/
//https://oblador.github.io/react-native-vector-icons/

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Quienes Somos') {
              iconName = focused
                ? 'ghost'
                : 'rocket';
            } else if (route.name === 'Contactanos') {
              iconName = focused 
               ? 'sms'
               : 'sms';
            }else if (route.name === 'Ubicanos') {
              iconName = focused 
               ? 'map-marked-alt'
               : 'map-marked';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />
           
      
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Quienes Somos" component={Primera} />
        <Tab.Screen name="Contactanos" component={Segunda} />
        <Tab.Screen name="Ubicanos" component={Tercera} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}




