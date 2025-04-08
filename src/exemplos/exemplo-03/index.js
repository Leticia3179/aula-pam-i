import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {

    let numero = 0;

    const [num, setNum] = useState(0);

    function handleIncrementa () {
        setNum(num + 1);
    }

    const handleExibeButton2 = () => {
        Alert.alert(
          'Alerta',
          'Alguém clicou no botão!',
          [
            {
              text: 'Sim',
              onPress: () => Alert.alert('Mensagem', 'Clicou em Sim.'),
              style: 'default',
            },
            {
              text: 'Não',
              onPress: () => Alert.alert('Mensagem', 'Clicou em Não.'),
              style: 'default',
            },
            {
              text: 'Cancelar',
              onPress: () => Alert.alert('Mensagem', 'Clicou em Cancelar.'),
              style: 'default',
            },
          ]
        );
      };



    const handleOutroJeitoFuncao = () => {
        Alert.alert('Alerta', 'Texto mensagem', [
            {
                text: 'ok',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis vs State</Text>
            <View style={styles.botaoAlert}>
                <Button
                    onPress={handleOutroJeitoFuncao}
                    title="Alerta"
                    color="deepskyblue"
                    accessibilityLabel="alguem clicou no botão"                     
                />
            </View>


            <Text style={styles.valor}>{num}</Text> 

            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>Adicionar +1</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Exemplo3;

