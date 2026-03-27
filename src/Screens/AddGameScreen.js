// src/screens/AddGameScreen.js

// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';

// 2. Local files
import styles from '../Styles/AddGameStyles';

const AddGameScreen = () => {
  // --- STATE (Múltiples memorias, una para cada campo) ---
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState('');
  
  // Estado extra para saber si el botón de guardar debe estar habilitado o bloqueado
  const [isFormValid, setIsFormValid] = useState(false);

  // --- EFFECT (El guardia de seguridad en tiempo real) ---
  useEffect(() => {
    // Validamos que ningún campo esté vacío (trim quita los espacios en blanco)
    const allFieldsFilled = 
      title.trim() !== '' && 
      platform.trim() !== '' && 
      genre.trim() !== '' && 
      price.trim() !== '' && 
      ageRating.trim() !== '';

    // Validamos que el precio sea un número y sea mayor a cero
    // isNaN significa "Is Not a Number" (¿No es un número?)
    const isPriceValid = !isNaN(price) && Number(price) > 0;

    // Si todo está lleno y el precio es válido, habilitamos el formulario
    if (allFieldsFilled && isPriceValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [title, platform, genre, price, ageRating]); // El guardia vigila si ALGUNO de estos cambia

  // --- EVENT HANDLERS (Acciones de los botones) ---
  const handleSave = () => {
    // Mostramos el Alert con el resumen como pide el taller
    Alert.alert(
      '¡Juego Agregado!',
      `Resumen:\nTítulo: ${title}\nPlataforma: ${platform}\nGénero: ${genre}\nPrecio: $${price}\nClasificación: ${ageRating}`,
      [{ text: 'OK' }]
    );
    
    // Opcional: Limpiamos el formulario después de guardar
    handleClear();
  };

  const handleClear = () => {
    // Para limpiar, simplemente regresamos todas las memorias a texto vacío ('')
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setAgeRating('');
  };

  // --- MAIN RENDER ---
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* KeyboardAvoidingView: El escudo contra el teclado */}
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.headerTitle}>Nuevo Videojuego</Text>

          {/* CAMPO 1: TÍTULO */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Título del juego</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ej. The Legend of Zelda"
              value={title}
              onChangeText={setTitle} // Conecta la caja con la memoria
            />
          </View>

          {/* CAMPO 2: PLATAFORMA */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plataforma (PS5, Xbox, PC, Switch)</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ej. PS5"
              value={platform}
              onChangeText={setPlatform}
            />
          </View>

          {/* CAMPO 3: GÉNERO */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Género (Acción, RPG, Deportes...)</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ej. RPG"
              value={genre}
              onChangeText={setGenre}
            />
          </View>

          {/* CAMPO 4: PRECIO (Teclado numérico) */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Precio (USD)</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ej. 59.99"
              keyboardType="numeric" // Abre el teclado de solo números
              value={price}
              onChangeText={setPrice}
            />
          </View>

          {/* CAMPO 5: CLASIFICACIÓN DE EDAD */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Clasificación de Edad (E, T, M)</Text>
            <TextInput 
              style={styles.input}
              placeholder="Ej. M"
              maxLength={1} // Solo permitimos una letra
              value={ageRating}
              onChangeText={setAgeRating}
            />
          </View>

          {/* BOTONES */}
          <View style={styles.buttonContainer}>
            {/* Botón de Guardar: Se bloquea (disabled) si isFormValid es falso */}
            <TouchableOpacity 
              style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
              onPress={handleSave}
              disabled={!isFormValid} // Propiedad oficial para desactivar clics
            >
              <Text style={styles.saveButtonText}>Agregar Juego</Text>
            </TouchableOpacity>

            {/* Botón de Limpiar */}
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={handleClear}
            >
              <Text style={styles.clearButtonText}>Limpiar Formulario</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;