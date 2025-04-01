import { StyleSheet } from 'react-native'

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({

imagemContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginBottom: 50,  
},

imagem: {
    width: RFPercentage(12),
    height: RFPercentage(12),
    resizeMode: 'stretch',
    marginRight: 10, 
},

descricao: {
    fontSize: RFPercentage (1.6),
    color: '#333',
    fontWeight: 'bold',
},

containerTexto: {
    width: '65%'
},

valor: {
    color: 'whitte'
},

titulo:{
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
}

})