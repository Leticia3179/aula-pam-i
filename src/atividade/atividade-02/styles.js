import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'deeppink', 
        borderRadius: 20,
    },

    titulo: {
        color: 'deeppink',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deeppink',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
    },

    imagemContainer: {
        flexDirection: 'row',  
        alignItems: 'center',
        marginBottom: 50,  
    },

    imagem: {
        width: 100,
        height: 100,
        marginRight: 10, 
    },

    descricao: {
        fontSize: 19,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default styles;
