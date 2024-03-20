import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  //hook state
  const [count, setCount] = useState(0);

  function handlerAdd() {
    setCount(count + 1);
  }

  function handlerRemove() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.warn(`Contador atualizado para: ${count}`)
  })

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botao} onPress={handlerAdd}>
        <Text style={styles.texto}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} onPress={handlerRemove}>
        <Text style={styles.text}>Decrementar</Text>
      </TouchableOpacity>

      <Text>Count: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: 'gray',
    marginBottom: 30,
    borderRadius: 8,
  },
  texto: {
    color: 'black'
  },
  botao2: {
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 8,
  },
  text: {
    color: 'red',
    backgroundColor: ""
  }
});
