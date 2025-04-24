import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'; 

function Exemplo05() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


    const handleCalculate = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(sum.toString());
    };

    return (

        
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 05</Text>

            <Text style={styles.tituloCalculadora}>Calculadora Básica</Text>

            <Text style={styles.texto}>1° número</Text>
            <TextInput
                style={styles.txtEntrada}
                value={num1}
                onChangeText={setNum1}
                keyboardType="numeric"
            />

            <Text style={[styles.texto, { marginTop: 10 }]}>+ </Text>

            <Text style={styles.texto}>2° número</Text>
            <TextInput
                style={styles.txtEntrada}
                value={num2}
                onChangeText={setNum2}
                keyboardType="numeric"
            />

            <Text style={[styles.texto, { marginTop: 10 }]}>= </Text>

            <Text style={styles.texto}>Total</Text>
            <TextInput
                style={styles.txtEntrada}
                value={result}
                editable={false}
            />

            <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                <Text style={styles.textButton}> Calcular </Text>
            </TouchableOpacity>

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { setNum1(''); setNum2(''); setResult(''); }}>
                    <Text style={styles.textButton}> Limpar </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default Exemplo05;
