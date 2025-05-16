import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Atividade06() {
    const [massa, setMassa] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(0);
    const [mensagem, setMensagem] = useState('');

    function Calcular() {
        const peso = parseFloat(massa);
        const alt = parseFloat(altura) / 100; 
    
        if (!isNaN(peso) && peso > 0 && !isNaN(alt) && alt > 0) {
            const imc = peso / (alt * alt);
            setResultado(imc);
            setMensagem(classificarIMC(imc));
        } else {
            setResultado(0);
            setMensagem('Preencha os campos corretamente.');
        }
    }
    

    function classificarIMC(imc) {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 35) return 'Obesidade grau 1';
        if (imc < 40) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>ATIVIDADE 06</Text>

            <View style={styles.entradaImc}>
                <TextInput
                    placeholder="Massa (kg)"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(entrada) => setMassa(entrada)}
                    value={massa}
                />

                <TextInput
                    placeholder="Altura (cm)"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(entrada) => setAltura(entrada)}
                    value={altura}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={Calcular}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            {resultado > 0 && (
                <>
                    <Text style={styles.resultado}>IMC: {resultado.toFixed(2)}</Text>
                    <Text style={styles.classificacao}>{mensagem}</Text>
                </>
            )}

            {mensagem === 'Preencha os campos corretamente.' && (
                <Text style={[styles.classificacao, { color: 'red' }]}>{mensagem}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEE',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C2185B',
    },
    entradaImc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 60,
        textAlign: 'center',
        width: '48%',
        fontSize: 28,
        marginTop: 24,
        color: 'deeppink',
        borderBottomWidth: 1,
        borderColor: 'deeppink',
    },
    button: {
        backgroundColor: 'pink',
        marginTop: 20,
        paddingVertical: 10,
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'deeppink',
        fontWeight: 'bold',
    },
    resultado: {
        alignSelf: 'center',
        color: 'deeppink',
        fontSize: 30,
        padding: 15,
    },
    classificacao: {
        alignSelf: 'center',
        fontSize: 22,
        color: '#333',
        marginTop: 5,
    },
});
