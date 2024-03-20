import { StatusBar, ViewBase } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const Jogos = ({ name, studio, gender, release }) => {
    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.nome}> Nome: {name}</Text>
                <Text style={styles.estudio}> Estúdio: {studio}</Text>
                <Text style={styles.genero}> Genêro: {gender}</Text>
                <Text style={styles.lancamento}> Data de lançamento: {release}</Text>
            </View>
            <StatusBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        marginBottom: 1,
        marginTop: 5
    },
    div: {
        borderWidth: 20,
        borderRadius: 10
    },
    nome: {
        fontFamily: 'SingleDay_400Regular',
    },
    estudio: {
        fontFamily: 'BebasNeue_400Regular'
    },
    genero: {
        fontFamily: 'SingleDay_400Regular'
    },
    lancamento: {
        fontFamily: 'BebasNeue_400Regular'
    },
})

export default Jogos;