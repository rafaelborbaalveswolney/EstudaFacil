
import { useEffect, useRef, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Identificadores usados no armazenamento do aplicativo
export const CHAVES = {
  TAREFAS: '@estudafacil_tarefas',
  MATERIAS: '@estudafacil_materias',
  ATIVIDADES: '@estudafacil_atividades'
};

// Organiza as gravações para evitar conflitos
const filas = {};

// Aguarda as gravações anteriores da mesma lista
function aguardarGravacao(chave) {
  return filas[chave] || Promise.resolve();
}

// Salva uma lista no dispositivo
function salvarLista(chave, lista) {
  const anterior = aguardarGravacao(chave);

  const gravacao = anterior
    .catch(() => {})
    .then(() =>
      AsyncStorage.setItem(chave, JSON.stringify(lista))
    );

  // Mantém a fila disponível mesmo depois de um erro
  filas[chave] = gravacao.catch(() => {});

  return gravacao;
}

// Hook reutilizável para listas salvas no dispositivo
export function useListaSalva(chave) {

  // Dados da lista
  const [itens, setItens] = useState([]);

  // Controla o carregamento inicial
  const [carregando, setCarregando] = useState(true);

  // Guarda uma mensagem quando ocorre algum problema
  const [erro, setErro] = useState('');

  // Identifica se a lista já foi carregada
  const carregado = useRef(false);

  // Carrega os dados ao abrir a tela
  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        // Aguarda gravações anteriores
        await aguardarGravacao(chave);

        const texto = await AsyncStorage.getItem(chave);
        const dados = texto ? JSON.parse(texto) : [];

        if (ativo) {
          if (!Array.isArray(dados)) {
            throw new Error('Lista inválida');
          }

          setItens(dados);
          carregado.current = true;
        }
      } catch (error) {
        if (ativo) {
          setErro('Não foi possível carregar os dados.');
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregar();

    // Evita atualizar uma tela que já foi fechada
    return () => {
      ativo = false;
    };
  }, [chave]);

  // Salva as alterações depois do carregamento
  useEffect(() => {
    if (!carregado.current || carregando) return;

    let ativo = true;

    async function salvar() {
      try {
        await salvarLista(chave, itens);

        if (ativo) setErro('');
      } catch (error) {
        if (ativo) {
          setErro('Não foi possível salvar os dados.');
        }
      }
    }

    salvar();

    return () => {
      ativo = false;
    };
  }, [chave, itens, carregando]);

  return {
    itens,
    setItens,
    carregando,
    erro
  };
}
