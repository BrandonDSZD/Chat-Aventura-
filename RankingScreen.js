
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RankingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking Global</Text>
      <Text>🏆 Top 1: Suscripción Oro Gratis</Text>
      <Text>🥈 Top 2: Suscripción Plata Gratis</Text>
      <Text>🥉 Top 3: 700 monedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#111' },
  title: { fontSize: 20, color: '#fff', marginBottom: 15, fontWeight: 'bold' }
});
