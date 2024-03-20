import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";


export default function Hello({backLoginPage}) {

  return (


    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/sabotage.jpg")}
      />

      <Text style={styles.text}>Rap É Compromisso! </Text>

      <TextInput placeholder="exemplo de input" style={styles.input} />
      <View style={styles.flexButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={backLoginPage} style={styles.buttonExit}>
          <Text style={styles.textExit}>Voltar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
  text: {
    color: "yellow",
    fontSize: 24,
    // fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    backgroundColor: "gray",
    borderColor: "yellow",
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  img: {
    width: "35%",
    height: 150,
    borderRadius: 50,
  },
  button: {
    width: "50%",
    height: 45,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "yellow",
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
  },
  textButton: {
    color: "yellow",
    alignSelf: "center",
  },
  buttonExit: {
    width: "50%",
    height: 45,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "yellow",
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
  },
  textExit: {
    color: "yellow",
    alignSelf: "center",
  },
  flexButton: {
    flexDirection: 'row',
    gap: 30
  }
});
