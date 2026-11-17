
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

// Importa o serviço de armazenamento
import { CHAVES, useListaSalva } from '../services/storage';

// Tela responsável pelas tarefas
export default function TasksScreen({ voltar }) {

  // Texto digitado pelo estudante
  const [novaTarefa, setNovaTarefa] = useState('');

  // Lista de tarefas salva no dispositivo
  const {
    itens: tarefas,
    setItens: setTarefas,
    carregando,
    erro
  } = useListaSalva(CHAVES.TAREFAS);

  // Adiciona uma nova tarefa
  function adicionarTarefa() {
    const titulo = novaTarefa.trim();

    // Impede tarefas vazias
    if (!titulo) return;

    // Cria uma tarefa com identificador único
    const tarefa = {
      id: `${Date.now()}-${Math.random()}`,
      titulo: titulo,
      concluida: false
    };

    // Atualiza a lista
    setTarefas(lista => [...lista, tarefa]);

    // Limpa o campo de texto
    setNovaTarefa('');
  }

  // Marca ou desmarca uma tarefa
  function concluirTarefa(id) {
    setTarefas(lista =>
      lista.map(item =>
        item.id === id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    );
  }

  // Exclui uma tarefa
  function excluirTarefa(id) {
    setTarefas(lista =>
      lista.filter(item => item.id !== id)
    );
  }

  return (
    <View style={styles.container}>

      {/* Título da tela */}
      <Text style={styles.titulo}>
        Minhas Tarefas
      </Text>

      {/* Campo para cadastrar tarefa */}
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChangeText={setNovaTarefa}
        autoCapitalize="sentences"
        returnKeyType="done"
        onSubmitEditing={adicionarTarefa}
        editable={!carregando && !erro}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
        disabled={carregando || !!erro}
      >
        <Text style={styles.textoBotao}>
          Adicionar Tarefa
        </Text>
      </TouchableOpacity>

      {/* Informa problemas no armazenamento */}
      {erro !== '' && (
        <Text style={styles.erro}>{erro}</Text>
      )}

      {/* Mostra o carregamento inicial */}
      {carregando ? (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={styles.lista}
        />
      ) : (
        <FlatList
          style={styles.lista}
          data={tarefas}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text style={styles.vazio}>
              Nenhuma tarefa cadastrada.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.item}>

              {/* Conclui ou desmarca a tarefa */}
              <TouchableOpacity
                style={styles.areaTarefa}
                onPress={() => concluirTarefa(item.id)}
                disabled={!!erro}
              >
                <Text style={[
                  styles.nomeTarefa,
                  item.concluida && styles.concluida
                ]}>
                  {item.concluida ? '✅' : '⬜'} {item.titulo}
                </Text>
              </TouchableOpacity>

              {/* Exclui a tarefa */}
              <TouchableOpacity
                onPress={() => excluirTarefa(item.id)}
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

      {/* Retorna para a tela inicial */}
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

// Estilos exclusivos da tela de tarefas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 24,
    paddingTop: 50
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  lista: {
    flex: 1
  },

  vazio: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 20
  },

  erro: {
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 10
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  areaTarefa: {
    flex: 1
  },

  nomeTarefa: {
    fontSize: 16,
    color: '#333333'
  },

  concluida: {
    color: '#64748B',
    textDecorationLine: 'line-through'
  },

  excluir: {
    color: '#DC2626',
    fontWeight: 'bold',
    marginLeft: 10
  },

  botaoVoltar: {
    backgroundColor: '#64748B',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  }
});
