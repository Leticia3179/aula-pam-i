import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo05() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('+');

    const handleCalculate = () => {
        const num1Float = parseFloat(num1);
        const num2Float = parseFloat(num2);

        if (isNaN(num1Float) || isNaN(num2Float)) {
            setResult('Por favor, insira números válidos');
            return;
        }

        let calculation;
        switch (operation) {
            case '+':
                calculation = num1Float + num2Float;
                break;
            case '-':
                calculation = num1Float - num2Float;
                break;
            case '*':
                calculation = num1Float * num2Float;
                break;
            case '/':
                if (num2Float === 0) {
                    setResult('Não é possível dividir por zero');
                    return;
                }
                calculation = num1Float / num2Float;
                break;
            default:
                calculation = 0;
        }

        setResult(calculation.toString());
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

            <Text style={[styles.texto, { marginTop: 10 }]}>Operação</Text>
            <View style={styles.operacaoContainer}>
                <TouchableOpacity
                    style={styles.operacaoButton}
                    onPress={() => setOperation('+')}
                >
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.operacaoButton}
                    onPress={() => setOperation('-')}
                >
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.operacaoButton}
                    onPress={() => setOperation('*')}
                >
                    <Text style={styles.textButton}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.operacaoButton}
                    onPress={() => setOperation('/')}
                >
                    <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>
            </View>

            <Text style={[styles.texto, { marginTop: 10 }]}>2° número</Text>
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
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setNum1('');
                        setNum2('');
                        setResult('');
                    }}
                >
                    <Text style={styles.textButton}>Limpar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Exemplo05;
