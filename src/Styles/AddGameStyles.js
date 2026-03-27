// src/styles/AddGameStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F3640',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#353b48',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCDDE1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#2f3640',
  },
  buttonContainer: {
    marginTop: 20,
    gap: 12, // Espacio entre los botones
    marginBottom: 40,
  },
  saveButton: {
    backgroundColor: '#4CD137', // Verde brillante
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#B2BEC3', // Gris cuando está bloqueado
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  clearButton: {
    backgroundColor: '#FF4757', // Rojo para borrar
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default styles;