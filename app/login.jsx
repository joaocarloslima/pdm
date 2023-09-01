import { TextInput } from 'react-native';
import { Image, Text, View } from 'react-native';
import Botao from '../components/Botao';
import { styles } from '../style';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login({navigation}){
    const { logar } = useContext(AuthContext)
    const [erro, setError] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function handleLogin(){
      const resposta = logar(email, senha)
      if (resposta === "ok"){
        setError("")
        navigation.navigate('Comanda')
      }else{
        setError(resposta)
      }
    }

    return (
        <View style={styles.main}>
          <Image style={styles.hero} source={require('../assets/home.png')} />
          
          <View style={styles.container}>
            <Text style={styles.title}>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='email' />
            <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder='senha' secureTextEntry />
            <Botao onPress={handleLogin}>
                entrar
            </Botao>
            <Text>{erro}</Text>
          </View>
    
        </View>
      );
}