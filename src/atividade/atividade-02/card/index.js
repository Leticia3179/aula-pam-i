import { View, Text } from "react-native";

import styles from "./styles";

function Mensagem({titulo, valor, descricao, img}){
    return(
        <View style={styles.container}> 
        <Image source={img} style={styles.imagem}/>

        <View style={styles.containerTexto}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.descricao}>{descricao}</Text> //valor
        
        </View>

        </View>
    );
}

export default Mensagem;
