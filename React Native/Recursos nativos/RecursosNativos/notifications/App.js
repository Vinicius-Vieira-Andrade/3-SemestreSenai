import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// importar os recursos do notifications
import * as Notications from 'expo-notifications'

// solicita permissão de notificação ao iniciar o app
Notications.requestPermissionsAsync()


// define como as notificacoes devem ser tratadas, quando recebidas
Notications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //reproduz som ao receber notificacao
    shouldPlaySound: true,

    //numero de notificacoes no icone do app
    shouldSetBadge: false
  })
})

export default function App() {

  //funcao para lidar com a chamada da notificacao
  const handleCallNotifications = async () => {

    //obtem o status da permissao
    const { status } = await Notications.getPermissionsAsync();

    //verifica se o usuario concedeu permissao
    if (status != 'granted') {
      alert('Você não deixou as notificações ativas!')
      return;
    }

    //agenda uma notificacao 
    await Notications.scheduleNotificationAsync({
      content: {
        title: 'Bem vindo ao SENAI!',
        body: 'Notificação recebida.',
        sound: 'cavalomeme.wav'

      },
      trigger: null
    })
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: '50px',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  text: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 24
  }
});
