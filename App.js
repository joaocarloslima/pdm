import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.main}>
      <Image style={styles.hero} source={require('./assets/home.png')} />
      
      <View style={styles.container}>
        <Text style={styles.title}>Sistema</Text>
        <Text style={styles.title}>Comanda</Text>
        <TextInput style={styles.input} placeholder='email' />
        <TextInput style={styles.input} placeholder='senha' secureTextEntry />
        <Botao>entrar</Botao>
        <MaterialIcons name="exit-to-app" size={24} color="black" />
        <Botao>finalizar pedido</Botao>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    position: 'relative'
  },
  hero:{
    position: 'absolute',
    width: '100%',
    height: 200,
    zIndex: 1,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  },
  button:{
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 20
  },

});
