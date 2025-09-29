
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos y Grupos</Text>
      <Text>• Puedes agregar amigos y chatear</Text>
      <Text>• Grupos disponibles solo para Nivel 3+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#111' },
  title: { fontSize: 20, color: '#fff', marginBottom: 15, fontWeight: 'bold' }
});
