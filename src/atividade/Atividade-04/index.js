import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade04() {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const handleExibeNomeCompleto = () => {        
        setNomeCompleto(nome + ' ' + sobrenome);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto}>{nomeCompleto}</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.txtInput}
                onChangeText={(v) => setNome(v)}
                value={nome}
            // placeholder='nome'
            />

            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
                style={styles.txtInput}
                onChangeText={(v) => setSobrenome(v)}
                value={sobrenome}
            // placeholder='sobrenome'
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeNomeCompleto()}
            >
                <Text style={styles.txtBotao}>Visualizar valor digitado</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade04;