import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao(props){
    return (
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.button}>
            {props.children}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#121A2C',
        color: '#FFBA26',
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 20,
        paddingVertical: 8
      }
})