import { View, Text, Image, StyleSheet } from 'react-native'; 


import styles from './styles'; 

import img1 from '../../../assets/cachorro.jpg';
import img2 from '../../../assets/gato.jpg';
import img3 from '../../../assets/raposa.jpeg';
import img4 from '../../../assets/urso.jpeg';

import Card from './card';

function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>MINI LOJA DE PELUCIAS</Text>
            
            <Card style={styles.imagemContainer}>
                titulo={'Ursinho de cachorro'}
                descricao={'compra por favor'}
                valor={'R$34,90'}
                img={img1}
                
            </Card>

            <Card style={styles.imagemContainer}>
                titulo={'Ursinho de gato'}
                descricao={'compra por favor'}
                valor={'R$45,30'}
                img={img2}
            </Card>

            <Card style={styles.imagemContainer}>
            titulo={'Ursinho de raposa'}
                descricao={'compra por favor'}
                valor={'R$39,00'}
                img={img3}
            </Card>

            <Card style={styles.imagemContainer}>
                titulo={'Ursinho de pelucia'}
                descricao={'compra por favor'}
                valor={'R$56,00'}
                img={img4}
            </Card>
            
        </View>
    );
}

export default Atividade02;