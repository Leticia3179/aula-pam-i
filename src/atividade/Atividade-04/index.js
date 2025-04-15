import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';  

function Atividade04() {

    const [txtDigitado, setTxtDigitado] = useState('');
    const [valorVisualizar, setValorVisualizar] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput style={styles.TxtInput} 
            onChangeText={(valortxtInput) => setTxtDigitado(valortxtInput)}
            />


            <Text style={styles.titulo}>Exemplo exibição valor digitado por botão</Text>
            <Text style={styles.texto}>{valorVisualizar}</Text>
            
            <TouchableOpacity 
            style={styles.botao}
            onPress={() => setValorVisualizar(txtDigitado)}>

                <Text style={styles.txtBotao}>Visualizar valor digitado</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade04;
