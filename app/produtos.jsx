import { ScrollView, Text, TextInput, View } from "react-native";
import Botao from "../components/Botao";
import { styles } from "../style";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-web";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProduto from "../components/CardProduto";

export default function Produtos({navigation}){
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/produtos")
            .then(resp => setProdutos(resp.data))
    }, [])

    return(
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Comanda')}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
                {produtos.map(produto => <CardProduto key={produto.id} produto={produto}/>)}
            </ScrollView>


            <Botao>finalizar</Botao>
        </View>

    )
}