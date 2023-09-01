import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Botao from '../components/Botao';
import { styles } from '../style';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Comanda({navigation}){
    const { user } = useContext(AuthContext)
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Olá,</Text>
                    <Text style={styles.title}>{user.nome}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <MaterialIcons name="exit-to-app" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Comanda" />
                <Botao onPress={() => navigation.navigate('Produtos')}>
                    Confirmar
                </Botao>
            </View>

            <Text>Digite o código da comanda para iniciar um pedido</Text>

        </View>
    )
}