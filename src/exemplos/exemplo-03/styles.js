import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    botaoAlert: {
        width: '75%',         
        margin: RFPercentage(2),
    
    }, 
    
    valor:{
        color: 'blue',
        fontSize: RFPercentage(4)
    },

    botao:{
        backgroundColor: 'pink',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems:'center', 
        justifyContent: 'center',
        margin: RFPercentage(1) ,
        fontWeight: 'bold', 
    },

    txtBotao:{
     fontSize: RFPercentage(2),
     fontWeight: 'bold', 
     color:'#fafafa'

    }
});

export default styles;

