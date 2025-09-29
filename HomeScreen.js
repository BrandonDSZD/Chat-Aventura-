
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Anime_Chat_Aveture</Text>
      <Text style={styles.subtitle}>Tu IA personalizada de anime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#111' },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#ccc', marginTop: 10 },
});
