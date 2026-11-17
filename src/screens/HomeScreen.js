
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';

// Endereço público da Política de Privacidade
const URL_PRIVACIDADE =
  'https://clever-palmier-327fdc.netlify.app/';

// Tela inicial do EstudaFácil
export default function HomeScreen({ navegar }) {

  // Abre a Política de Privacidade no navegador
  async function abrirPolitica() {
    try {
      await Linking.openURL(URL_PRIVACIDADE);
    } catch (erro) {
      Alert.alert(
        'Erro',
        'Não foi possível abrir a Política de Privacidade.'
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* Nome do aplicativo */}
      <Text style={styles.titulo}>
        EstudaFácil
      </Text>

      {/* Descrição do aplicativo */}
      <Text style={styles.subtitulo}>
        Organize seus estudos em um só lugar
      </Text>

      {/* Abre as tarefas */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navegar('tarefas')}
      >
        <Text style={styles.textoBotao}>
          Minhas Tarefas
        </Text>
      </TouchableOpacity>

      {/* Abre o calendário */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navegar('calendario')}
      >
        <Text style={styles.textoBotao}>
          Calendário
        </Text>
      </TouchableOpacity>

      {/* Abre as matérias */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navegar('materias')}
      >
        <Text style={styles.textoBotao}>
          Matérias
        </Text>
      </TouchableOpacity>

      {/* Acesso público à Política de Privacidade */}
      <TouchableOpacity
        style={styles.botaoPrivacidade}
        onPress={abrirPolitica}
      >
        <Text style={styles.textoPrivacidade}>
          Política de Privacidade
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// Estilos exclusivos da tela inicial
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 40
  },

  botao: {
    backgroundColor: '#2563EB',
    width: '100%',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  botaoPrivacidade: {
    marginTop: 20,
    padding: 12,
    alignItems: 'center'
  },

  textoPrivacidade: {
    color: '#2563EB',
    fontSize: 14,
    textDecorationLine: 'underline'
  }
});
