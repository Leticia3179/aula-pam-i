import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

//exemplo

import Exemplo01 from './src/exemplos/exemplo-01';
import Exemplo02 from './src/exemplos/exemplo-02';
import Exemplo03 from './src/exemplos/exemplo-03';

//atividades

import Atividade01 from './src/atividade/atividade-01';
import Atividade02 from './src/atividade/atividade-02';
import Atividade03 from './src/atividade/Atividade-03';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight  || 8,
  },
});

