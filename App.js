import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

//exemplos

import Exemplo01 from './src/exemplos/exemplo-01';

//atividades

import Atividade01 from './src/atividade/atividade-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight  || 8,
  },
});
