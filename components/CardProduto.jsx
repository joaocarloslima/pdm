import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../style';
import { useState } from 'react';

export default function CardProduto({ produto }) {
    const [quantidade, setQuantidade] = useState(0)

    const handleAdd = () => setQuantidade(quantidade + 1)
    const handleMinus = () => setQuantidade(quantidade && quantidade - 1)
    
    return (
        <View style={styles.pedidos}>

            <View style={styles.cardProduto}>
                <Image style={styles.thumb} source={{ uri: produto.imagePath }} />

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity onPress={handleMinus} >
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>{quantidade}</Text>
                    <TouchableOpacity onPress={handleAdd} >
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}