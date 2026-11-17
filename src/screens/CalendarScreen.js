
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';

// Importa o serviço de armazenamento
import { CHAVES, useListaSalva } from '../services/storage';

// Dias da semana, começando pelo domingo
const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

// Formata datas no padrão AAAA-MM-DD
function formatarData(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');

  return `${ano}-${mes}-${dia}`;
}

// Tela do calendário de estudos
export default function CalendarScreen({ voltar }) {

  // Data selecionada pelo estudante
  const [dataSelecionada, setDataSelecionada] = useState(
    () => new Date()
  );

  // Mês exibido no calendário
  const [mesAtual, setMesAtual] = useState(
    () => new Date()
  );

  // Texto da nova atividade
  const [novaAtividade, setNovaAtividade] = useState('');

  // Atividades salvas no dispositivo
  const {
    itens: atividades,
    setItens: setAtividades,
    carregando,
    erro
  } = useListaSalva(CHAVES.ATIVIDADES);

  // Avança ou volta um mês
  function mudarMes(valor) {
    setMesAtual(data => new Date(
      data.getFullYear(),
      data.getMonth() + valor,
      1
    ));
  }

  // Seleciona uma data
  function selecionarDia(dia) {
    const data = new Date(
      mesAtual.getFullYear(),
      mesAtual.getMonth(),
      dia
    );

    setDataSelecionada(data);
  }

  // Adiciona uma atividade
  function adicionarAtividade() {
    if (carregando || erro) return;

    const titulo = novaAtividade.trim();

    // Impede atividades vazias
    if (!titulo) {
      Alert.alert('Atenção', 'Digite uma atividade.');
      return;
    }

    // Cria a atividade para a data escolhida
    const atividade = {
      id: `${Date.now()}-${Math.random()}`,
      titulo: titulo,
      data: formatarData(dataSelecionada)
    };

    // Atualiza a lista
    setAtividades(lista => [...lista, atividade]);

    // Limpa o campo
    setNovaAtividade('');
  }

  // Exclui uma atividade
  function excluirAtividade(id) {
    setAtividades(lista =>
      lista.filter(item => item.id !== id)
    );
  }

  // Ano e mês que estão sendo exibidos
  const ano = mesAtual.getFullYear();
  const mes = mesAtual.getMonth();

  // Primeiro dia da semana do mês
  const primeiroDia = new Date(ano, mes, 1).getDay();

  // Quantidade de dias do mês
  const totalDias = new Date(ano, mes + 1, 0).getDate();

  // Nome do mês em português
  const nomeMes = mesAtual.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric'
  });

  // Cria as células do calendário
  const dias = [
    ...Array(primeiroDia).fill(null),
    ...Array.from(
      { length: totalDias },
      (_, indice) => indice + 1
    )
  ];

  // Filtra as atividades da data selecionada
  const atividadesDoDia = atividades.filter(
    item => item.data === formatarData(dataSelecionada)
  );

  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >

        {/* Título da tela */}
        <Text style={styles.titulo}>
          Calendário de Estudos
        </Text>

        {/* Navegação entre os meses */}
        <View style={styles.navegacao}>

          <TouchableOpacity
            onPress={() => mudarMes(-1)}
          >
            <Text style={styles.seta}>❮</Text>
          </TouchableOpacity>

          <Text style={styles.nomeMes}>
            {nomeMes}
          </Text>

          <TouchableOpacity
            onPress={() => mudarMes(1)}
          >
            <Text style={styles.seta}>❯</Text>
          </TouchableOpacity>

        </View>

        {/* Dias da semana */}
        <View style={styles.grade}>
          {diasSemana.map((dia, indice) => (
            <View key={indice} style={styles.celula}>
              <Text style={styles.diaSemana}>
                {dia}
              </Text>
            </View>
          ))}
        </View>

        {/* Dias do mês */}
        <View style={styles.grade}>

          {dias.map((dia, indice) => {

            // Célula vazia antes do primeiro dia
            if (dia === null) {
              return (
                <View
                  key={`vazio-${indice}`}
                  style={styles.celula}
                />
              );
            }

            // Data correspondente ao dia
            const data = new Date(ano, mes, dia);
            const dataTexto = formatarData(data);

            // Identifica a data selecionada
            const selecionado =
              dataTexto === formatarData(dataSelecionada);

            // Verifica se existem atividades no dia
            const possuiAtividade = atividades.some(
              item => item.data === dataTexto
            );

            return (
              <View
                key={dataTexto}
                style={styles.celula}
              >
                <TouchableOpacity
                  style={[
                    styles.dia,
                    selecionado && styles.diaSelecionado
                  ]}
                  onPress={() => selecionarDia(dia)}
                >

                  {/* Número do dia */}
                  <Text style={[
                    styles.numeroDia,
                    selecionado && styles.textoSelecionado
                  ]}>
                    {dia}
                  </Text>

                  {/* Indicador de atividade */}
                  {possuiAtividade && (
                    <View style={styles.indicador} />
                  )}

                </TouchableOpacity>
              </View>
            );
          })}

        </View>

        {/* Data selecionada */}
        <Text style={styles.subtitulo}>
          Atividades de{' '}
          {dataSelecionada.toLocaleDateString('pt-BR')}
        </Text>

        {/* Campo para nova atividade */}
        <TextInput
          style={styles.input}
          placeholder="Digite uma atividade"
          value={novaAtividade}
          onChangeText={setNovaAtividade}
          autoCapitalize="sentences"
          editable={!carregando && !erro}
        />

        {/* Botão para adicionar atividade */}
        <TouchableOpacity
          style={styles.botao}
          onPress={adicionarAtividade}
          disabled={carregando || !!erro}
        >
          <Text style={styles.textoBotao}>
            Adicionar Atividade
          </Text>
        </TouchableOpacity>

        {/* Mensagem de erro */}
        {erro !== '' && (
          <Text style={styles.erro}>
            {erro}
          </Text>
        )}

        {/* Carregamento ou atividades do dia */}
        {carregando ? (
          <ActivityIndicator
            size="large"
            color="#2563EB"
          />
        ) : atividadesDoDia.length === 0 ? (
          <Text style={styles.vazio}>
            Nenhuma atividade para esta data.
          </Text>
        ) : (
          atividadesDoDia.map(item => (
            <View key={item.id} style={styles.item}>

              {/* Nome da atividade */}
              <Text style={styles.nomeAtividade}>
                {item.titulo}
              </Text>

              {/* Exclui a atividade */}
              <TouchableOpacity
                onPress={() => excluirAtividade(item.id)}
                disabled={!!erro}
              >
                <Text style={styles.excluir}>
                  Excluir
                </Text>
              </TouchableOpacity>

            </View>
          ))
        )}

      </ScrollView>

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

// Estilos exclusivos do calendário
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 20
  },

  lista: {
    flex: 1
  },

  conteudo: {
    paddingBottom: 30
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 25
  },

  navegacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  nomeMes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textTransform: 'capitalize'
  },

  seta: {
    fontSize: 24,
    color: '#2563EB',
    padding: 10
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  celula: {
    width: '14.2857%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },

  diaSemana: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: 'bold'
  },

  dia: {
    width: 38,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  diaSelecionado: {
    backgroundColor: '#2563EB'
  },

  numeroDia: {
    fontSize: 15,
    color: '#333333'
  },

  textoSelecionado: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  indicador: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#F59E0B',
    marginTop: 2
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 25,
    marginBottom: 15
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

  vazio: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 15
  },

  erro: {
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 12
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  nomeAtividade: {
    flex: 1,
    fontSize: 16,
    color: '#333333'
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
    marginTop: 10
  }
});
