# RELATÓRIO DE TESTES FINAIS — ESTUDAFÁCIL

**Aplicativo:** EstudaFácil  
**Versão:** 1.0.0  
**Código da versão Android:** 2  
**Plataforma:** Android  
**Ambiente de testes:** Emulador Pixel 7 — Android Studio  
**Data:** 16 de novembro de 2026  
**Responsável:** Equipe de Desenvolvimento do EstudaFácil

---

## 1. Objetivo

Verificar o funcionamento das principais funcionalidades do EstudaFácil em uma versão APK independente, instalada no emulador Android, antes da apresentação acadêmica de sua preparação para publicação.

## 2. Arquivo testado

**Arquivo:** `01_Binarios/EstudaFacil-preview-v2.apk`

**Formato:** APK

**Perfil de compilação:** preview

**Ferramenta:** Expo EAS Build

**Identificador:** com.estudafacil.app

**Resultado da instalação:** Aprovado.

O aplicativo foi instalado e executado no emulador Pixel 7 sem depender do Expo Go.

## 3. Resultados dos testes

| Nº | Teste realizado | Resultado |
|---|---|---|
| 1 | Instalação e abertura do APK | Aprovado |
| 2 | Navegação pela tela inicial | Aprovado |
| 3 | Cadastro de tarefas | Aprovado |
| 4 | Marcação de tarefa como concluída | Aprovado |
| 5 | Exclusão de tarefas | Aprovado |
| 6 | Cadastro de matérias | Aprovado |
| 7 | Prevenção de matérias duplicadas | Aprovado |
| 8 | Navegação pelo calendário | Aprovado |
| 9 | Cadastro de atividades no calendário | Aprovado |
| 10 | Exclusão de atividades no calendário | Aprovado |
| 11 | Persistência dos dados após reabrir o aplicativo | Aprovado |
| 12 | Abertura da Política de Privacidade | Aprovado |

## 4. Teste de armazenamento local

Foi mantida uma informação cadastrada no aplicativo antes de seu encerramento.

Após fechar e abrir novamente o EstudaFácil, a informação permaneceu disponível.

**Resultado:** Aprovado.

Esse comportamento confirma o funcionamento da persistência local no ambiente testado.

## 5. Teste da Política de Privacidade

A opção **Política de Privacidade** foi acionada na tela inicial do APK instalado.

O navegador abriu a página pública:

https://clever-palmier-327fdc.netlify.app/

**Resultado:** Aprovado.

## 6. Inspeção do pacote de produção

O arquivo `EstudaFacil-release-v2.aab` foi analisado no Android Studio.

Foram confirmados:

- Identificador `com.estudafacil.app`.
- Versão `1.0.0`.
- Código da versão `2`.
- Ausência das permissões `SYSTEM_ALERT_WINDOW` e `VIBRATE`.

As permissões de armazenamento externo continuam registradas no manifesto, limitadas até a API 32, e foram identificadas para revisão adicional.

## 7. Limitações dos testes

- Os testes foram realizados no emulador Android Pixel 7.
- Não foram realizados testes em dispositivos físicos diferentes.
- Não foram realizados testes iOS.
- Não foram realizados testes pelo Google Play Console ou TestFlight.
- A análise completa das dependências e do tráfego de rede não foi concluída.

## 8. Conclusão

Os testes executados no APK versão 2 foram concluídos com sucesso.

O EstudaFácil apresentou funcionamento adequado das tarefas, matérias, calendário, armazenamento local e acesso à Política de Privacidade no ambiente testado.

O resultado constitui evidência da validação funcional Android para a atividade acadêmica, sem representar certificação completa para publicação nas lojas oficiais.