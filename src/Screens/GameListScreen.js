// src/screens/GameListScreen.js

// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity 
} from 'react-native';

// 2. Local files (data and styles)
import GAMES_CATALOG from '../Data/gamesData';
import styles from '../Styles/GameListStyles';

// The navigation prop is automatically passed by StackNavigator
const GameListScreen = ({ navigation }) => {
  // --- STATE (Memory) ---
  // Guardamos la lista de juegos (empieza vacía)
  const [games, setGames] = useState([]);
  
  // Guardamos si está cargando o no (empieza en true)
  const [isLoading, setIsLoading] = useState(true);

  // --- EFFECT (Automatic Assistant) ---
  // Se ejecuta una sola vez al abrir la pantalla gracias al array vacío []
  useEffect(() => {
    // Simulamos que tarda 1.5 segundos en descargar de internet
    const timerId = setTimeout(() => {
      setGames(GAMES_CATALOG); // Llenamos la memoria con los juegos de mentira
      setIsLoading(false); // Apagamos la ruedita de carga
    }, 1500);

    // Limpiamos el temporizador por si el usuario se sale antes de que cargue
    return () => clearTimeout(timerId);
  }, []);

  // --- RENDER ITEM (How each card looks) ---
  const renderGameCard = ({ item }) => {
    return (
      // TouchableOpacity es un botón que se vuelve un poco transparente al tocarlo
      <TouchableOpacity 
        style={styles.card}
        // Al presionar, navegamos a 'GameDetail' y le mandamos el objeto 'item' completo en la mochila
        onPress={() => navigation.navigate('GameDetail', { gameDetails: item })}
      >
        <Text style={styles.emojiContainer}>{item.emoji}</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>
            {item.platform} • {item.genre}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // --- MAIN RENDER ---
  return (
    // SafeAreaView envuelve todo como pidió el profesor
    <SafeAreaView style={styles.safeArea}>
      
      {/* Si isLoading es true, mostramos la ruedita. Si es false, mostramos la lista */}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Cargando catálogo...</Text>
        </View>
      ) : (
        <FlatList 
          data={games} // De dónde saca los datos
          keyExtractor={(item) => item.id} // Cómo identifica cada tarjeta única
          renderItem={renderGameCard} // La función que dibuja cada tarjeta
          contentContainerStyle={styles.listContainer}
        />
      )}

    </SafeAreaView>
  );
};

export default GameListScreen;