
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suscripciones</Text>
      <Text>Nivel 1 Plata - $100 MX</Text>
      <Text>Nivel 2 Oro - $300 MX</Text>
      <Text>Nivel 3 Diamante - $800 MX</Text>
      <Text>Nivel 4 Divino - $1500 MX</Text>
      <Text>Permanente Divino - $100,000 MX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#111' },
  title: { fontSize: 20, color: '#fff', marginBottom: 15, fontWeight: 'bold' }
});
