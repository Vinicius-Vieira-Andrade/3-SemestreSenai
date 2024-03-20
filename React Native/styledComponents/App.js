import { Alert, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Container } from './src/components/Container/Index';
import { Decrement, Increment } from './src/components/Btn/Btn';
import { TextDecrement, TextIncrement } from './src/components/Title/Title';
import { Image, Background } from './src/components/Img/Img';

export default function App() {
  //hook state
  const [count, setCount] = useState(0);

  function handlerAdd() {
    setCount(count + 1);
  }

  function handlerRemove() {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    console.warn(`Contador atualizado para: ${count}`)
  })

  return (
    <>

      <Container source={{uri: '//assets.gamearena.gg/wp-content/uploads/2023/10/29212247/Dark-Souls.jpg'}}>

        <Image source={{ uri: 'https://www.hardware.com.br/wp-content/uploads/2024/01/1-57.jpg' }}></Image>

        <Increment onPress={handlerAdd}>
          <TextIncrement>Incrementar</TextIncrement>
        </Increment>

        <Decrement onPress={handlerRemove}>
          <TextDecrement>Decrementar</TextDecrement>
        </Decrement>

        <Text>Contagem: {count}</Text>
        <StatusBar style="auto" />
      </Container>
    </>
  );
};
