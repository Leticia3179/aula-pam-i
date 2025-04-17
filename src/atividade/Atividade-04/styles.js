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
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
    paddingVertical: 10,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    marginTop: RFPercentage(2),
  },
  txtInput: {
    borderWidth: RFPercentage(0.4),
    borderColor: 'darkslategrey',
    color: 'darkslategrey',
    fontSize: RFPercentage(2.2),
    width: '90%',
    borderRadius: RFPercentage(2),
    marginVertical: RFPercentage(1.5),
    padding: RFPercentage(1),
  },
  botao: {
    backgroundColor: 'pink',
    width: '75%',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1),
    alignItems: 'center',
    justifyContent: 'center',
    margin: RFPercentage(1),
    fontWeight: 'bold',
  },
  txtBotao: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: '#fafafa',
  },

  insira: {
    fontSize: RFPercentage(3),
    color: 'deeppink',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
    paddingVertical: 10,},

    txt: {
        fontSize: RFPercentage(2.5),
        color: 'darkslategrey',
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginTop: RFPercentage(1),
        fontWeight: 'bold',
        color: 'black'
      },

      label:{
        fontSize: RFPercentage(2.5),
        color: 'darkslategrey',
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginTop: RFPercentage(1),
        fontWeight: 'bold',
        color: 'blackPink'
      }
      
  
});

export default styles;
