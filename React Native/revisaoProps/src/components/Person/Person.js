import { StatusBar } from "react-native";
import { View, Text, StyleSheet } from "react-native"


const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textNome}>Nome: {name}</Text>
            <Text style={styles.textIdade}>Idade: {age}</Text>
            <StatusBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    textNome: {
        color: 'orange',
        fontSize: 25,
        fontFamily: 'SingleDay_400Regular'
    },
    textIdade: {
        color: 'yellow',
    }
})

export default Person;