import { View, Text } from 'react-native';
import styles from './styles';  // Certifique-se de ter o arquivo de estilos correto

function Exemplo01() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>

            <Text style={styles.texto}>
                Nesta aula, vamos aprender a construir um aplicativo básico utilizando{' '}
                <Text style={styles.destaque}>React Native</Text> com a ajuda do{' '}
                <Text style={styles.destaque}>Expo</Text>, uma ferramenta poderosa que facilita o desenvolvimento e a execução de aplicativos móveis em React Native.
            </Text>

            <Text style={styles.texto}>
                 <Text style={styles.destaque}>React Native</Text> é uma biblioteca desenvolvida pelo Facebook que permite criar aplicativos móveis nativos usando JavaScript e React.
            </Text>
        </View>
    );
}

export default Exemplo01;

