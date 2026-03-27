// src/screens/GamingNewsScreen.js

// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';

// 2. Local files
import GAMING_NEWS from '../Data/gamingNewsData'; 
import styles from '../Styles/GamingNewsStyles';

const GamingNewsScreen = () => {
  // --- STATE (Memorias) ---
  // Guardamos el número de la noticia que estamos viendo (empezamos en la 0)
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  // Guardamos la lista de noticias en el estado como pide el taller
  const [news] = useState(GAMING_NEWS); 

  // --- EFFECT 1: El temporizador automático (con Cleanup) ---
  useEffect(() => {
    // setInterval es un reloj que se repite cada X milisegundos
    const intervalId = setInterval(() => { 
      // Avanzamos a la siguiente. El símbolo % evita que nos pasemos del límite, regresando a 0
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length); 
    }, 5000); // 5000 milisegundos = 5 segundos 

    // FUNCIÓN DE LIMPIEZA (Cleanup): Si el usuario se va a otra pestaña, apagamos el reloj
    return () => clearInterval(intervalId); 
  }, []); // Array vacío = se crea el reloj solo al abrir la pantalla 

  // --- EFFECT 2: El chismoso (con Dependencia) ---
  // El profesor pide actualizar un mensaje cuando la noticia cambie 
  useEffect(() => {
    // Solo se imprime en la consola oscura de tu computadora, no en el celular
    console.log(`Now showing news ${currentIndex + 1}`); 
  }, [currentIndex]); // La dependencia: Se ejecuta cada vez que 'currentIndex' cambia 

  // --- EVENT HANDLER (Botón manual) ---
  const handleNextNews = () => {
    // Hacemos exactamente lo mismo que el temporizador, pero manualmente
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  // --- MAIN RENDER ---
  // Obtenemos la noticia actual usando el índice
  const currentNewsItem = news[currentIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* TARJETA DE NOTICIA */}
      <View style={styles.card}>
        {/* Indicador visual "Noticia X de Y" */}
        <Text style={styles.indicatorText}>
          Noticia {currentIndex + 1} de {news.length}
        </Text>

        <Text style={styles.newsTitle}>{currentNewsItem.title}</Text>
        <Text style={styles.newsSummary}>{currentNewsItem.summary}</Text>
      </View>

      {/* BOTÓN MANUAL */}
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={handleNextNews}
      >
        <Text style={styles.nextButtonText}>Siguiente Noticia ➡️</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default GamingNewsScreen;