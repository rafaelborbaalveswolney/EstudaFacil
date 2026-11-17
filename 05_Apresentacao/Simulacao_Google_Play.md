# SIMULAÇÃO DE CADASTRO — GOOGLE PLAY CONSOLE

## Aplicativo EstudaFácil

**Versão:** 1.0.0  
**Código da versão:** 2  
**Identificador:** com.estudafacil.app  
**Plataforma:** Android  
**Responsável:** Equipe de Desenvolvimento do EstudaFácil  
**Data:** 16 de novembro de 2026  
**Finalidade:** Simulação acadêmica de publicação na Google Play Store.

---

## 1. DADOS GERAIS

**Nome do aplicativo:** EstudaFácil

**Categoria:** Educação

**Tipo:** Aplicativo

**Preço:** Gratuito

**Idioma principal:** Português (Brasil)

**Identificador do pacote:** com.estudafacil.app

**Versão:** 1.0.0

**Código da versão:** 2

## 2. FICHA DA LOJA

### Descrição curta

Organize tarefas, matérias e atividades de estudo em um só lugar.

### Descrição completa

O EstudaFácil é um aplicativo gratuito desenvolvido para ajudar estudantes a organizar sua rotina de estudos de maneira simples e prática.

Com ele, é possível cadastrar tarefas, marcar atividades concluídas, organizar matérias escolares e planejar compromissos no calendário.

**Principais funcionalidades:**

- **Minhas Tarefas:** cadastrar, concluir e excluir tarefas.
- **Minhas Matérias:** organizar disciplinas e evitar nomes repetidos.
- **Calendário:** selecionar datas, cadastrar e excluir atividades.
- **Armazenamento local:** manter informações salvas no dispositivo, sem exigir cadastro ou login.

O EstudaFácil possui uma interface simples, adequada a estudantes que desejam acompanhar suas atividades acadêmicas.

**EstudaFácil — organize seus estudos em um só lugar!**

## 3. ASO — OTIMIZAÇÃO DA FICHA

**Palavras e expressões relevantes:**

- Organização de estudos
- Tarefas escolares
- Matérias
- Calendário de estudos
- Atividades acadêmicas
- Planejamento de estudos

As expressões foram selecionadas com base nas funcionalidades disponíveis. Na Google Play, elas podem ser utilizadas naturalmente nas descrições, sem repetição excessiva.

## 4. IDENTIDADE VISUAL

**Ícone da loja:**

- Arquivo: `assets/android-icon.png`
- Resolução: 512 × 512 pixels.

**Banner promocional:**

- Arquivo: `assets/feature-graphic.png`
- Resolução: 1024 × 500 pixels.

**Capturas de tela:**

- `03_Screenshots/01-inicio.png`
- `03_Screenshots/02-tarefas.png`
- `03_Screenshots/03-materias.png`
- `03_Screenshots/04-calendario.png`

**Resolução das capturas:** 1080 × 2400 pixels.

As capturas foram produzidas em um emulador Android utilizando uma versão instalável do aplicativo.

## 5. BINÁRIO E ASSINATURA DIGITAL

**Arquivo de produção:** `01_Binarios/EstudaFacil-release-v2.aab`

**Formato:** Android App Bundle (AAB)

**Versão:** 1.0.0

**Código da versão:** 2

**Ferramenta de compilação:** EAS Build, do Expo.

**Perfil utilizado:** production.

**Assinatura digital:** Realizada com credenciais Android configuradas no EAS Build.

**Resultado:** Compilação concluída com sucesso.

A inspeção do AAB no Android Studio confirmou o identificador `com.estudafacil.app`, a versão 1.0.0 e o código 2.

## 6. POLÍTICA DE PRIVACIDADE

**URL pública:**

https://clever-palmier-327fdc.netlify.app/

**Arquivo PDF:**

`04_Privacidade/Politica_de_Privacidade_EstudaFacil.pdf`

**Responsável:** Equipe de Desenvolvimento do EstudaFácil

**E-mail de contato:** rafaelborbaalveswolney@gmail.com

A Política de Privacidade também pode ser acessada pela tela inicial do aplicativo, por meio de um botão que abre a página publicada.

## 7. SEGURANÇA DOS DADOS

**Cadastro e login:** Não implementados.

**Publicidade:** Não implementada no código desenvolvido.

**Servidor próprio para armazenar tarefas:** Não implementado.

**Armazenamento:** Local, utilizando AsyncStorage.

**Exclusão de dados:** O aplicativo permite excluir tarefas, matérias e atividades. A limpeza geral dos dados também pode ser feita pelas configurações do dispositivo.

**Coleta ou compartilhamento por dependências:** Ainda requer validação definitiva.

**Formulário oficial de Segurança dos Dados:** Simulado e documentado, sem envio real à Google Play.

**Documento de apoio:**

`04_Privacidade/Simulacao_Formularios_Privacidade_EstudaFacil.pdf`

As declarações definitivas sobre coleta, compartilhamento e tratamento dos dados dependeriam da verificação dos componentes utilizados na compilação.

## 8. PERMISSÕES ANDROID

A análise do `AndroidManifest.xml` da versão 2 identificou:

**Permissões presentes:**

- `android.permission.INTERNET`
- `android.permission.READ_EXTERNAL_STORAGE` — limitada até a API 32.
- `android.permission.WRITE_EXTERNAL_STORAGE` — limitada até a API 32.
- `com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION` — permissão interna com proteção `signature`.

**Permissões removidas:**

- `android.permission.SYSTEM_ALERT_WINDOW`
- `android.permission.VIBRATE`

A remoção das duas últimas foi confirmada diretamente no manifesto do AAB versão 2.

As permissões de armazenamento externo permanecem identificadas para revisão adicional.

## 9. PÚBLICO-ALVO E CLASSIFICAÇÃO INDICATIVA

**Público-alvo planejado:** Estudantes a partir de 13 anos.

**Finalidade:** Organização de estudos e atividades escolares.

**Conteúdo:** Educacional.

O aplicativo não possui funcionalidades desenvolvidas de apostas, conteúdo sexual, violência explícita ou interação pública entre usuários.

**Classificação indicativa oficial:** Não obtida.

**Questionário IARC:** Planejado para simulação, ainda sem resultado oficial.

## 10. TESTES

**Ambiente:** Android Studio com emulador Pixel 7.

**Testes realizados:**

- Abertura e navegação entre telas.
- Cadastro, conclusão e exclusão de tarefas.
- Cadastro e exclusão de matérias.
- Prevenção de matérias duplicadas.
- Navegação pelo calendário.
- Cadastro e exclusão de atividades.
- Persistência dos dados locais após reabrir o aplicativo.

**Observação:** Os testes funcionais da versão instalável anterior foram realizados. A versão 2 foi compilada e inspecionada como AAB, mas ainda não foi testada como APK independente atualizado.

**Teste fechado na Google Play:** Não realizado.

## 11. REQUISITOS PENDENTES

- Revisar as permissões de armazenamento externo.
- Confirmar as declarações definitivas de Segurança dos Dados.
- Testar um APK atualizado com o código da versão 2.
- Simular o preenchimento do questionário IARC.
- Verificar todos os requisitos de testes e elegibilidade da Google Play.
- Realizar o envio efetivo à Google Play Console, caso a publicação real seja necessária.

## 12. CONCLUSÃO

O EstudaFácil possui um AAB de produção gerado e assinado digitalmente, materiais visuais, screenshots, metadados e Política de Privacidade publicada.

A preparação Android contempla as principais etapas técnicas e documentais da simulação acadêmica de publicação.

**Situação final:**

- AAB: gerado.
- Assinatura Android: configurada.
- Metadados: preparados.
- Imagens: disponíveis.
- Política de Privacidade: publicada.
- Formulário de Segurança dos Dados: simulado.
- Publicação real: não realizada.