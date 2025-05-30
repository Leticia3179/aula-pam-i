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
    fontSize: RFPercentage(4),
  },

  valor: {
    color: 'deeppink',
    fontSize: RFPercentage(5),
    fontWeight: 'bold',
    marginHorizontal: RFPercentage(2),
  },

  botao: {
    backgroundColor: 'pink',
    width: RFPercentage(18),
    borderRadius: RFPercentage(1.5),
    paddingVertical: RFPercentage(1.8),
    paddingHorizontal: RFPercentage(2),
    alignItems: 'center',
    justifyContent: 'center',
    margin: RFPercentage(1),
  },

  txtBotao: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: RFPercentage(2),
  },

  botaoAlert: {
    marginBottom: RFPercentage(2),
  },
});

export default styles;
