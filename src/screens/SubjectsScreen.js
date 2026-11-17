
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';

// Importa o serviço de armazenamento
import { CHAVES, useListaSalva } from '../services/storage';

// Matérias sugeridas para facilitar o cadastro
const sugestoes = [
  'Matemática',
  'Português',
  'História',
  'Geografia',
  'Inglês',
  'Física',
  'Química',
  'Biologia'
];

// Padroniza os nomes para identificar repetições
function normalizarNome(nome) {
  return nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

// Tela responsável pelas matérias
export default function SubjectsScreen({ voltar }) {

  // Guarda o texto digitado
  const [novaMateria, setNovaMateria] = useState('');

  // Mensagem de retorno ao estudante
  const [mensagem, setMensagem] = useState('');

  // Lista de matérias salva no dispositivo
  const {
    itens: materias,
    setItens: setMaterias,
    carregando,
    erro
  } = useListaSalva(CHAVES.MATERIAS);

  // Adiciona uma matéria
  function adicionarMateria(nomeDigitado = novaMateria) {

    // Impede alterações durante o carregamento
    if (carregando || erro) return;

    const nome = nomeDigitado.trim().replace(/\s+/g, ' ');

    // Não permite nomes vazios
    if (!nome) {
      setMensagem('Digite ou selecione uma matéria.');
      return;
    }

    // Verifica se a matéria já foi cadastrada
    const existe = materias.some(
      item =>
        normalizarNome(item.nome) === normalizarNome(nome)
    );

    // Bloqueia matérias repetidas
    if (existe) {
      setMensagem('Essa matéria já está cadastrada!');
      Alert.alert(
        'Matéria repetida',
        'Essa matéria já existe na sua lista.'
      );
      return;
    }

    // Cria a nova matéria
    const materia = {
      id: `${Date.now()}-${Math.random()}`,
      nome: nome
    };

    // Salva na lista
    setMaterias(lista => [...lista, materia]);

    // Limpa o campo e informa o sucesso
    setNovaMateria('');
    setMensagem('Matéria adicionada com sucesso!');
  }

  // Exclui uma matéria
  function excluirMateria(id) {
    setMaterias(lista =>
      lista.filter(item => item.id !== id)
    );

    setMensagem('Matéria excluída.');
  }

  return (
    <View style={styles.container}>

      {/* Título da tela */}
      <Text style={styles.titulo}>
        Minhas Matérias
      </Text>

      {/* Campo para digitar uma matéria */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da matéria"
        value={novaMateria}
        onChangeText={setNovaMateria}
        autoCapitalize="sentences"
        autoCorrect={false}
        keyboardType="default"
        editable={!carregando && !erro}
      />

      {/* Botão para adicionar matéria */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => adicionarMateria()}
        disabled={carregando || !!erro}
      >
        <Text style={styles.textoBotao}>
          Adicionar Matéria
        </Text>
      </TouchableOpacity>

      {/* Matérias sugeridas */}
      <Text style={styles.subtitulo}>
        Ou escolha uma matéria:
      </Text>

      <View style={styles.sugestoes}>
        {sugestoes.map(nome => (
          <TouchableOpacity
            key={nome}
            style={styles.botaoSugestao}
            onPress={() => adicionarMateria(nome)}
            disabled={carregando || !!erro}
          >
            <Text style={styles.textoSugestao}>
              + {nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Mensagens para o estudante */}
      {mensagem !== '' && (
        <Text style={styles.mensagem}>
          {mensagem}
        </Text>
      )}

      {erro !== '' && (
        <Text style={styles.erro}>
          {erro}
        </Text>
      )}

      {/* Carregamento ou lista de matérias */}
      {carregando ? (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={styles.lista}
        />
      ) : (
        <FlatList
          style={styles.lista}
          data={materias}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text style={styles.vazio}>
              Nenhuma matéria cadastrada.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.item}>

              {/* Nome da matéria */}
              <Text style={styles.nomeMateria}>
                {item.nome}
              </Text>

              {/* Botão para excluir */}
              <TouchableOpacity
                onPress={() => excluirMateria(item.id)}
                disabled={!!erro}
              >
                <Text style={styles.excluir}>
                  Excluir
                </Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

      {/* Retorna à tela inicial */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={voltar}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// Estilos exclusivos da tela de matérias
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
    paddingTop: 45
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 12
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12
  },

  sugestoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },

  botaoSugestao: {
    backgroundColor: '#DBEAFE',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
    marginBottom: 8
  },

  textoSugestao: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '500'
  },

  mensagem: {
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 12
  },

  erro: {
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 12
  },

  lista: {
    flex: 1
  },

  vazio: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 15
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  nomeMateria: {
    fontSize: 16,
    color: '#333333',
    flex: 1
  },

  excluir: {
    color: '#DC2626',
    fontWeight: 'bold',
    marginLeft: 10
  },

  botaoVoltar: {
    backgroundColor: '#64748B',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  }
});
