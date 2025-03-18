import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',  // Cor suave de fundo
    padding: 20,  // Padding geral
    justifyContent: 'center',  // Alinha o conteúdo no centro
    alignItems: 'center',  // Alinha o conteúdo no centro
  },

  titulo: {
    fontSize: RFPercentage(4),  // Tamanho maior para o título
    fontWeight: 'bold',
    color: '#3498db',  // Cor azul para destacar o título
    marginBottom: 20,  // Espaço abaixo do título
    textAlign: 'center',  // Centraliza o texto
  },

  texto: {
    fontSize: RFPercentage(2.2),  // Tamanho confortável para o texto
    color: '#2c3e50',  // Cor escura para o texto principal
    lineHeight: 28,  // Maior espaçamento entre as linhas para melhor leitura
    textAlign: 'left',  // Alinha o texto à esquerda
    marginVertical: 10,  // Espaçamento entre os parágrafos
    paddingHorizontal: 10,  // Padding horizontal para não colar na borda
  },

  destaque: {
    fontWeight: 'bold',  // Aplica negrito nas palavras importantes
    color: '#e74c3c',  // Cor vermelha para destacar certas palavras
  },

  lista: {
    marginVertical: 10,
    paddingLeft: 20,
    marginTop: 10,
  },

  listaItem: {
    fontSize: RFPercentage(2),  // Tamanho confortável para a lista
    color: '#34495e',  // Cor da lista mais neutra
    marginBottom: 8,  // Espaçamento entre os itens da lista
  },
});

export default styles;
