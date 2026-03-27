// src/styles/GameDetailStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    // Sombras para que parezca una tarjeta real
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F3640',
    textAlign: 'center',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#E8F0FE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  badgeText: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceBadge: {
    backgroundColor: '#E8F5E9',
  },
  priceText: {
    color: '#2E7D32',
  },
  descriptionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F3640',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#718093',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  favoriteButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#FF4757', // Rojo cuando es favorito
  },
  favoriteButtonInactive: {
    backgroundColor: '#DFE4EA', // Gris cuando no lo es
  },
  favoriteButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  favoriteButtonTextInactive: {
    color: '#2F3640',
  },
  backButton: {
    backgroundColor: '#2F3640',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;