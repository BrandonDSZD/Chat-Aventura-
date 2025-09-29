
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de Monedas</Text>
      <Text>100 monedas - $25 MX</Text>
      <Text>300 monedas - $69 MX</Text>
      <Text>600 monedas - $199 MX</Text>
      <Text>1400 monedas - $300 MX</Text>
      <Text>4000 monedas - $700 MX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#111' },
  title: { fontSize: 20, color: '#fff', marginBottom: 15, fontWeight: 'bold' }
});
