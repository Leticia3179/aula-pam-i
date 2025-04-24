import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 10,  
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20,
        margin: 8,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 12, 
        width: '80%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
        
    }, 
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#333',
        marginTop: 8,
    },
    txtEntrada: {
        width: '80%', 
        height: 50, 
        borderColor: 'deepskyblue', 
        borderWidth: 1, 
        borderRadius: 10, 
        paddingLeft: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'deepskyblue',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginTop: 12,
        width: '80%',
        alignItems: 'center',
        
      
    },
    buttonContainer: {
        marginTop: 20, 
        
    },
    textButton: {
        color: '#fff',
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        
        
    },

    tituloCalculadora:{
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: 20, 
        color: 'deeppink'
    }
});

export default styles;
