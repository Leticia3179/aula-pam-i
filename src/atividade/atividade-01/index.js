import { View, Text } from 'react-native'; 

import styles from './styles'; 

function Atividade01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 01</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
        </View>
    );
}

export default Atividade01;