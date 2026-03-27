// src/navigation/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Importamos las pantallas locales (como pide la regla de orden)
import GameListScreen from '../Screens/GameListScreen';
import GameDetailScreen from '../Screens/GameDetailScreen';

// 2. Creamos la herramienta Stack
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Primera puerta: El catálogo */}
      <Stack.Screen 
        name="GameList" 
        component={GameListScreen} 
        options={{ title: 'Catálogo de Juegos' }} // UI en español
      />
      
      {/* Segunda puerta: El detalle (recibe parámetros) */}
      <Stack.Screen 
        name="GameDetail" 
        component={GameDetailScreen} 
        options={{ title: 'Detalle del Juego' }} // UI en español
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;