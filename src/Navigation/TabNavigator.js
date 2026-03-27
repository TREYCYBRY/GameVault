// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Los íconos de tu profesora

// Importamos el Stack y las otras pantallas
import StackNavigator from './StackNavigator';
import AddGameScreen from '../Screens/AddGameScreen';
import GamingNewsScreen from '../Screens/GamingNewsScreen';

// Creamos la herramienta Tab
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Lógica para ponerle un ícono distinto a cada pestaña
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'CatalogTab') {
            iconName = 'list-outline';
          } else if (route.name === 'AddGameTab') {
            iconName = 'add-circle-outline';
          } else if (route.name === 'NewsTab') {
            iconName = 'newspaper-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#c652b6', // Color morado cuando está seleccionado
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Pestaña 1: ¡Metemos la caja pequeña (Stack) entera aquí! */}
      <Tab.Screen 
        name="CatalogTab" 
        component={StackNavigator} 
        options={{ tabBarLabel: 'Catálogo', headerShown: false }} 
      />
      
      {/* Pestaña 2: Formulario */}
      <Tab.Screen 
        name="AddGameTab" 
        component={AddGameScreen} 
        options={{ tabBarLabel: 'Agregar', title: 'Agregar Juego' }} 
      />
      
      {/* Pestaña 3: Noticias */}
      <Tab.Screen 
        name="NewsTab" 
        component={GamingNewsScreen} 
        options={{ tabBarLabel: 'Noticias', title: 'Noticias Gaming' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;