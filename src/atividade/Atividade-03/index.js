import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [num, setNum] = useState(0);

    // Função para aumentar o valor
    const handleIncrementa = () => {
        setNum(num + 1);
    };

    // Função para diminuir o valor
    const handleDecrementa = () => {
        setNum(num - 1);
    };

    // Função para resetar o valor
    const handleReset = () => {
        setNum(0);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <Text style={styles.texto}>Botão :D </Text>

            <View style={styles.botaoAlert}>

            </View>

            <Text style={styles.valor}>{num}</Text>

            {/* Botão para aumentar */}
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>Adicionar +1</Text>
            </TouchableOpacity>

            {/* Botão para diminuir */}
            <TouchableOpacity style={styles.botao} onPress={handleDecrementa}>
                <Text style={styles.txtBotao}>Diminuir -1</Text>
            </TouchableOpacity>

            {/* Botão para resetar */}
            <TouchableOpacity style={styles.botao} onPress={handleReset}>
                <Text style={styles.txtBotao}>Resetar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade03;
