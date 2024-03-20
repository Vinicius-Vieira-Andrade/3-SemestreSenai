import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from 'expo-local-authentication'
import { useEffect, useState } from 'react';


//import das bibliotecas que usaremos para criar a biometria
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment/moment';

export default function App() {
  const [dateHistory, setDateHistory] = useState({}) //Salva o obj com  historico
  const [authenticated, setAuthenticated] = useState(false) //salvar o status de autenticado
  const [isBiometricSupported, setIsBiometricSupported] = useState(false); //salvar a referencia de suporte



  //funcao para checar se existe a biometria no aparelho
  async function CheckExistAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    //salvando o status  da compatibilidade com a biometria 
    setIsBiometricSupported(compatible)
  }

  //Salva o historico da ultima autenticacao
  async function SetHistory() {
    const ObjAuth = {
      dataAuthentication: moment().format('DD/MM/YYYY HH:mm:ss')
    }


    await AsyncStorage.setItem('authenticate', JSON.stringify(ObjAuth))

    setDateHistory(ObjAuth)
  }


  //Recebe o historico da ultima autenticacao
  async function GetHistory() {
    const ObjAuth = await AsyncStorage.getItem('authenticate')

    if (ObjAuth) {
      setDateHistory(JSON.parse(ObjAuth))
    }
  }

  //chama biometria
  async function handleAuthentication() {
    //verificar se existe uma biometria cadastrada
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    //existe?
    if (!biometricExist) {
      return Alert.alert('Falha ao logar',
        'Não foi encontrado nenhuma biometria cadastrada'
      )
    }


    //caso exista ->
    const auth = await LocalAuthentication.authenticateAsync()

    // console.log(auth);
    setAuthenticated(auth.success)

    //verificar se está autenticado e salvar a data atual
    if (auth.success) {
      SetHistory();
    }
  }

  //  async function ResetAuth(){
  //    auth
  //  }

  useEffect(() => {
    CheckExistAuthentication()
    GetHistory() //Buscando a ultima autenticação
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
          isBiometricSupported ? 'Seu dispositivo é compativel com a biometria' : 'O seu dispositivo não suporta a biometria / Face Id'
        }
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>


      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {
          authenticated ? 'Autenticado!' : 'Não autenticado!'
        }
      </Text>

      {/* <TouchableOpacity style={styles.btnReset}>
        <Text style={styles.txtReset}>Resetar</Text>
      </TouchableOpacity> */}

      {
        dateHistory.dataAuthentication
          ? <Text style={styles.txtHistory}>
              ultimo acesso em {dateHistory.dataAuthentication}
            </Text>
          : null
      }

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
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'brown'
  },
  txtAuth: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50,
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    position: 'absolute',
    bottom: 120
  }
});
