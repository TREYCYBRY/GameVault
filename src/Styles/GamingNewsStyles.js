// src/styles/GamingNewsStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center', // Centramos todo verticalmente
    alignItems: 'center', // Centramos horizontalmente
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  indicatorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee', // Color morado
    marginBottom: 16,
    backgroundColor: '#E8EAF6',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  newsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F3640',
    textAlign: 'center',
    marginBottom: 12,
  },
  newsSummary: {
    fontSize: 16,
    color: '#718093',
    textAlign: 'center',
    lineHeight: 24,
  },
  nextButton: {
    backgroundColor: '#2F3640',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;