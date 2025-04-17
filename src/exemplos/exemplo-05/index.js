import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';
import styles from './styles';  // Certifique-se de ter o arquivo de estilos correto

function Exemplo05() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 5</Text>

            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.textLabel}>1° número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin:0}]}> + </Text>

            <Text style={styles.textLabel}>2° número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin:0}]}> = </Text>

            <Text style={styles.textLabel}>Total</Text>
            <TextInput style={styles.txtEntrada} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo05;

