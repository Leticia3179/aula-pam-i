import { useState } from 'react';
import { View } from 'react-native';

import Button from './button';
import Display from './display';
import styles from './styles';

export default function Exemplo7() {

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function addDigit(n) {
        const limpaTela = displayValue === '0' || clearDisplay;

        if (n === '.' && displayValue.includes('.') && !limpaTela) return;

        let currentValue = limpaTela ? '' : displayValue;

        // Correção: ao iniciar com ponto, mostrar "0."
        if (n === '.' && (currentValue === '' || currentValue === '0')) {
            currentValue = '0';
        }

        const valorAtualizar = currentValue + n;
        setDisplayValue(valorAtualizar);
        setClearDisplay(false);

        if (n !== '.') {
            const novoValor = parseFloat(valorAtualizar);
            const atualizaValor = [...values]; // cópia segura do array
            atualizaValor[current] = novoValor;
            setValues(atualizaValor);
        }
    }

    function clearMemory() {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    function definieOperacao(operacao) {
        if (current === 0) {
            setOperation(operacao);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            const sinalIgual = operacao === '=';
            if (!sinalIgual && clearDisplay) {
                setOperation(operacao);
                return;
            }

            const valores = [...values];
            valores[0] = calculo(valores[0], valores[1], operation);
            valores[1] = 0;

            setDisplayValue(valores[0].toString());
            setOperation(sinalIgual ? null : operacao);
            setCurrent(sinalIgual ? 0 : 1);
            setClearDisplay(true);
            setValues(valores);
        }
    }

    function calculo(valor1, valor2, operacao) {
        switch (operacao) {
            case '+': return valor1 + valor2;
            case '-': return valor1 - valor2;
            case '*': return valor1 * valor2;
            case '/': return valor2 !== 0 ? valor1 / valor2 : 0;
            default: return valor1;
        }
    }

    return (
        <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label='AC' triple onClick={clearMemory} />
                <Button label='/' operation onClick={definieOperacao} />
                <Button label='7' onClick={addDigit} />
                <Button label='8' onClick={addDigit} />
                <Button label='9' onClick={addDigit} />
                <Button label='*' operation onClick={definieOperacao} />
                <Button label='4' onClick={addDigit} />
                <Button label='5' onClick={addDigit} />
                <Button label='6' onClick={addDigit} />
                <Button label='-' operation onClick={definieOperacao} />
                <Button label='1' onClick={addDigit} />
                <Button label='2' onClick={addDigit} />
                <Button label='3' onClick={addDigit} />
                <Button label='+' operation onClick={definieOperacao} />
                <Button label='0' double onClick={addDigit} />
                <Button label='.' onClick={addDigit} />
                <Button label='=' operation onClick={definieOperacao} />
            </View>
        </View>
    );
}
