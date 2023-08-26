import { TextInput } from 'react-native';
import { Image, Text, View } from 'react-native';
import Botao from '../components/Botao';
import { styles } from '../style';

export default function Login({navigation}){
    return (
        <View style={styles.main}>
          <Image style={styles.hero} source={require('../assets/home.png')} />
          
          <View style={styles.container}>
            <Text style={styles.title}>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <TextInput style={styles.input} placeholder='email' />
            <TextInput style={styles.input} placeholder='senha' secureTextEntry />
            <Botao onPress={() => navigation.navigate('Comanda')}>
                entrar
            </Botao>
          </View>
    
        </View>
      );
}