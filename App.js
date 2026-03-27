// App.js

// 1. Dependencias externas
import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// 2. Navegación
import TabNavigator from './src/Navigation/TabNavigator';

const App = () => {
  return (
    // NavigationContainer es la "casa" que envuelve a todas nuestras cajas de navegación
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;