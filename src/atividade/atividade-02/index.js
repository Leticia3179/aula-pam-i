import { View, Text, Image, StyleSheet } from 'react-native'; 


import styles from './styles'; 
import img1 from '../../../assets/cachorro.jpg';
import img2 from '../../../assets/gato.jpg';
import img3 from '../../../assets/raposa.jpeg';
import img4 from '../../../assets/urso.jpeg';

import Mensagem from './card';

function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>MINI LOJA DE PELUCIAS</Text>
            
            <View style={styles.imagemContainer}>
                <Image source={img1} style={styles.imagem} />
                <Text style={styles.descricao}>Ursinho de cachorro</Text>
                
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img2} style={styles.imagem} />
                <Text style={styles.descricao}>Ursinho de gato
                </Text>
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img3} style={styles.imagem} />
                <Text style={styles.descricao}>Ursinho de raposa</Text>
            </View>

            <View style={styles.imagemContainer}>
                <Image source={img4} style={styles.imagem} />
                <Text style={styles.descricao}>Ursinho com laço rosa</Text>
            </View>
            
        </View>
    );
}

export default Atividade02;