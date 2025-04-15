import { StyleSheet, TextInput } from 'react-native'; 
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
        //height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
        paddingVertical:10,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 


TxtInput: {
    borderWidth: RFPercentage(0.4),
    borderColor: 'darkslategrey',
    color:'darkslategrey',
    fontsize: RFPercentage(2.2),
    width: '90%',
    borderRadius: RFPercentage(2),
    marginVertical: RFPercentage(1.5)
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

