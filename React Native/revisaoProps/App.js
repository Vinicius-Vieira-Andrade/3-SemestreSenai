import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import Jogos from './src/components/jogos/Jogos';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    BebasNeue_400Regular, SingleDay_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: '1', nome: 'Vinicius', idade: '20' },
    { id: '2', nome: 'Matheus Enrike', idade: '16' },
    { id: '3', nome: 'Lucas Bianchezzi', idade: '16' }
  ]

  const gameList = [
    { id: '1', nome: 'Elder Ring', estudio: 'From Software', genero: 'Souls Like', lancamento: '2022' },
    { id: '2', nome: 'Red Dead Redemption', estudio: 'Rockstar', genero: 'Faroeste, Open Worlds', lancamento: '2018' },
    { id: '3', nome: 'Call Of Duty: Warzone', estudio: 'Activision', genero: 'Shooter, FPS, Ação', lancamento: '2020' }
  ]

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      {/* FlatList de Pessoas */}
      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person name={item.nome} age={item.idade} />}
      />



      {/* FlatList de Jogos */}
      <FlatList
        data={gameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Jogos name={item.nome} studio={item.estudio} gender={item.genero} release={item.lancamento} />}
      />
    </SafeAreaView>
  );
}
