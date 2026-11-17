
import React, { useState } from 'react';

import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

// Importação das telas do aplicativo
import HomeScreen from './src/screens/HomeScreen';
import TasksScreen from './src/screens/TasksScreen';
import SubjectsScreen from './src/screens/SubjectsScreen';
import CalendarScreen from './src/screens/CalendarScreen';

// Componente principal do EstudaFácil
export default function App() {

  // Guarda o nome da tela atual
  const [telaAtual, setTelaAtual] = useState('inicio');

  // Abre a tela selecionada pelo usuário
  function navegar(tela) {
    setTelaAtual(tela);
  }

  // Retorna para a tela inicial
  function voltar() {
    setTelaAtual('inicio');
  }

  // Define qual tela será exibida
  function mostrarTela() {
    switch (telaAtual) {

      case 'tarefas':
        return <TasksScreen voltar={voltar} />;

      case 'materias':
        return <SubjectsScreen voltar={voltar} />;

      case 'calendario':
        return <CalendarScreen voltar={voltar} />;

      default:
        return <HomeScreen navegar={navegar} />;
    }
  }

  return (
    <View style={styles.container}>

      {/* Configura a barra superior do celular */}
      <StatusBar barStyle="dark-content" />

      {/* Exibe a tela escolhida */}
      {mostrarTela()}

    </View>
  );
}

// Estilo principal do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB'
  }
});
