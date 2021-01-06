import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.introductions}>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
      
      <Field flagged />
      <Field flagged opened/>
      <Field nearMines={8} opened mined/>
      <Field nearMines={8} opened mined exploded/>
      <Field nearMines={1} />
      <Field nearMines={8} opened/>

      <StatusBar style="light" hidden/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },

  introductions: {
    fontSize: 16,
    textAlign: 'center'
  },
});
