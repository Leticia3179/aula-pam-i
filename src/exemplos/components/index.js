import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index() {
    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular() {
        if (massa > 0 && altura > 0) {
            const valor = massa / (altura * altura);
            setResultado(valor);
        } else {
            setResultado(0);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 6</Text>

            <View style={styles.entradaImc}>
                <TextInput
                    placeholder='Massa'
                    placeholderTextColor='deeppink'
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={(entrada) => setMassa(parseFloat(entrada))}
                />

                <TextInput
                    placeholder='Altura'
                    placeholderTextColor='deeppink'
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={(entrada) => setAltura(parseFloat(entrada))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={Calcular}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#AAA',
    },
    entradaImc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 80,
        textAlign: 'center',
        width: '48%',
        fontSize: 40,
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
    resultados: {
        alignSelf: 'center',
        color: 'deeppink',
        fontSize: 65,
        padding: 15,
    },
});
