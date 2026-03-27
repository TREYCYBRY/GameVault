// src/screens/GameDetailScreen.js

// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from 'react-native';

// 2. Local files
import styles from '../Styles/GameDetailStyles';

// Recibimos 'route' (la mochila con datos) y 'navigation' (para poder volver atrás)
const GameDetailScreen = ({ route, navigation }) => {
  // --- ROUTE PARAMS (Abriendo la mochila) ---
  // Desestructuramos el objeto completo del videojuego que enviamos desde GameListScreen
  const { gameDetails } = route.params;

  // --- STATE (Memoria local adicional requerida por el taller) ---
  // Un toggle (interruptor) para la lista de deseos
  const [isFavorite, setIsFavorite] = useState(false);

  // --- EFFECT WITH DEPENDENCY (El observador) ---
  // El profesor pide un useEffect que se ejecute si el parámetro recibido cambia
  useEffect(() => {
    // Si por alguna razón los detalles del juego cambian, reiniciamos el botón de favoritos
    // y mostramos un log en la consola (simulando que registramos la visita en una base de datos)
    setIsFavorite(false);
    console.log(`El usuario está viendo los detalles de: ${gameDetails.title}`);
  }, [gameDetails]); // <--- Esta es la "dependencia" que exige el taller

  // --- EVENT HANDLERS ---
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Cambia de true a false, y viceversa
    if (!isFavorite) {
      Alert.alert('¡Añadido!', `${gameDetails.title} está en tu lista de deseos.`);
    }
  };

  const handleGoBack = () => {
    navigation.goBack(); // Función oficial de React Navigation para volver a la pantalla anterior
  };

  // --- MAIN RENDER ---
  return (
    // SafeAreaView como contenedor raíz
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* TARJETA VISUAL */}
        <View style={styles.card}>
          <Text style={styles.emoji}>{gameDetails.emoji}</Text>
          <Text style={styles.title}>{gameDetails.title}</Text>
          
          {/* Mostramos todos los campos exigidos en forma de "etiquetas" (badges) */}
          <View style={styles.badgesContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{gameDetails.platform}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{gameDetails.genre}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Edad: {gameDetails.ageRating}</Text>
            </View>
            <View style={[styles.badge, styles.priceBadge]}>
              <Text style={[styles.badgeText, styles.priceText]}>
                ${gameDetails.price}
              </Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>{gameDetails.description}</Text>
          </View>
        </View>

        {/* BOTONES */}
        <View style={styles.buttonContainer}>
          {/* Botón de Lista de Deseos (Usa el useState) */}
          <TouchableOpacity 
            style={[
              styles.favoriteButton, 
              isFavorite ? styles.favoriteButtonActive : styles.favoriteButtonInactive
            ]}
            onPress={toggleFavorite}
          >
            <Text style={[
              styles.favoriteButtonText,
              !isFavorite && styles.favoriteButtonTextInactive
            ]}>
              {isFavorite ? '❤️ En lista de deseos' : '🤍 Añadir a deseos'}
            </Text>
          </TouchableOpacity>

          {/* Botón de Volver (Exigido por el taller) */}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleGoBack}
          >
            <Text style={styles.backButtonText}>Volver al Catálogo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;