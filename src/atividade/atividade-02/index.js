import { View, Text, Image, StyleSheet } from 'react-native'; 

import styles from './styles'; 
import img1 from '../../../assets/cachorro.jpg';
import img2 from '../../../assets/gato.jpg';
import img3 from '../../../assets/raposa.jpeg';
import img4 from '../../../assets/urso.jpeg';

function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade com Imagens</Text>
            
            <View style={styles.imagemContainer}>
                <Image source={img1} style={styles.imagem} />
                <Text style={styles.descricao}>Descrição da primeira imagem</Text>
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img2} style={styles.imagem} />
                <Text style={styles.descricao}>Descrição da segunda imagem</Text>
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img3} style={styles.imagem} />
                <Text style={styles.descricao}>Descrição da terceira imagem</Text>
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img4} style={styles.imagem} />
                <Text style={styles.descricao}>Descrição da quarta imagem</Text>
            </View>
        </View>
    );
}

export default Atividade02;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imagemContainer: {
        flexDirection: 'row',  // Organiza as imagens e descrições lado a lado
        alignItems: 'center',
        marginBottom: 20,  // Espaço entre as imagens
    },
    imagem: {
        width: 100,
        height: 100,
        marginRight: 10,  // Espaço entre a imagem e a descrição
    },
    descricao: {
        fontSize: 16,
        color: '#333',
    },
});
