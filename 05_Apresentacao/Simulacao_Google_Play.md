# SIMULAÇÃO DE CADASTRO — GOOGLE PLAY CONSOLE

## Aplicativo EstudaFácil

**Versão:** 1.0.0  
**Código da versão Android:** 3  
**Identificador:** `com.estudafacil.app`  
**Plataforma:** Android  
**Responsável:** Equipe de Desenvolvimento do EstudaFácil  
**Data da revisão:** 17 de novembro de 2026  
**Finalidade:** Simulação acadêmica de preparação e publicação na Google Play Store.

---

## 1. DADOS GERAIS

**Nome do aplicativo:** EstudaFácil

**Categoria:** Educação

**Tipo:** Aplicativo

**Preço planejado:** Gratuito

**Idioma principal:** Português (Brasil)

**Identificador do pacote:** `com.estudafacil.app`

**Versão:** 1.0.0

**Código da versão:** 3

**SDK mínimo:** 24

**SDK de destino:** 36

**Situação:** Preparação acadêmica concluída para os materiais documentados, sem publicação real.

---

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

---

## 3. ASO — OTIMIZAÇÃO DA FICHA

**Palavras e expressões relevantes:**

- Organização de estudos
- Tarefas escolares
- Matérias
- Calendário de estudos
- Atividades acadêmicas
- Planejamento de estudos

As expressões foram selecionadas com base nas funcionalidades disponíveis.

Na Google Play, elas podem ser utilizadas naturalmente nas descrições, sem repetição excessiva.

O objetivo é facilitar a compreensão das funcionalidades e tornar a apresentação do aplicativo mais clara para o público-alvo.

---

## 4. IDENTIDADE VISUAL

### 4.1 Ícone da loja

**Arquivo:**

`02_Imagens/android-icon.png`

**Resolução:** 512 × 512 pixels.

O ícone foi preparado para representar o aplicativo na ficha da Google Play Store.

### 4.2 Banner promocional

**Arquivo:**

`02_Imagens/feature-graphic.png`

**Resolução:** 1024 × 500 pixels.

O banner foi preparado como material visual de divulgação.

### 4.3 Capturas de tela

**Arquivos disponíveis:**

- `03_Screenshots/Android/01-inicio.png`
- `03_Screenshots/Android/02-tarefas.png`
- `03_Screenshots/Android/03-materias.png`
- `03_Screenshots/Android/04-calendario.png`

**Resolução das capturas:** 1080 × 2400 pixels.

As imagens foram capturadas durante a execução do EstudaFácil em um emulador Android.

Elas apresentam as telas de início, tarefas, matérias e calendário.

**Resultado:** os materiais visuais necessários à simulação acadêmica da ficha Android foram preparados.

---

## 5. BINÁRIO E ASSINATURA DIGITAL

### 5.1 Arquivo de produção

**Arquivo:**

`01_Binarios/EstudaFacil-release-v3.aab`

**Formato:** Android App Bundle (AAB)

**Versão:** 1.0.0

**Código da versão:** 3

**Identificador:** `com.estudafacil.app`

**Ferramenta de compilação:** Expo EAS Build.

**Perfil utilizado:** production.

**Assinatura digital:** Realizada com credenciais Android gerenciadas pelo EAS Build.

**Resultado:** Compilação concluída com sucesso.

### 5.2 Verificação do AAB

O AAB versão 3 foi inspecionado utilizando o Bundletool.

A análise identificou:

- Identificador `com.estudafacil.app`.
- Versão `1.0.0`.
- Código da versão `3`.
- SDK mínimo `24`.
- SDK de destino `36`.

Também foi realizada uma verificação de integridade da assinatura digital utilizando a ferramenta `jarsigner`.

**Resultado apresentado pela ferramenta:**

```text
jar verified.
```

Essa verificação confirma a integridade da assinatura do arquivo analisado, mas não representa aprovação do pacote pela Google Play Store.

### 5.3 Pacote utilizado nos testes

**Arquivo:**

`01_Binarios/EstudaFacil-v3.apks`

**Ferramenta:** Bundletool 1.18.3.

O arquivo `.apks` foi gerado a partir do AAB versão 3 para permitir a instalação no emulador Android.

O Bundletool utilizou uma chave de depuração para assinar os APKs gerados.

Na primeira tentativa, a atualização foi rejeitada devido à incompatibilidade entre a assinatura do aplicativo anteriormente instalado e a assinatura do novo pacote.

Após a desinstalação da versão anterior, a instalação limpa foi concluída.

A versão instalada foi confirmada por meio do Android Debug Bridge (ADB):

```text
versionCode=3
versionName=1.0.0
```

**Importante:** o arquivo `.apks` foi utilizado para testes. O artefato de produção preparado para a simulação de publicação é o AAB versão 3.

### 5.4 APK de testes anterior

**Arquivo:**

`01_Binarios/EstudaFacil-preview-v2.apk`

Esse APK foi utilizado em testes funcionais anteriores.

Ele permanece documentado como parte do histórico do desenvolvimento e não representa a versão final de produção.

---

## 6. POLÍTICA DE PRIVACIDADE

**URL pública:**

https://clever-palmier-327fdc.netlify.app/

**Arquivo PDF:**

`04_Privacidade/Politica_de_Privacidade_EstudaFacil.pdf`

**Responsável:** Equipe de Desenvolvimento do EstudaFácil.

**E-mail de contato:** rafaelborbaalveswolney@gmail.com

A Política de Privacidade foi preparada e disponibilizada publicamente para informar as práticas documentadas de armazenamento e tratamento de dados do aplicativo.

A página publicada foi verificada e apresentou resposta HTTP 200.

O aplicativo possui uma opção na tela inicial que permite acessar a Política de Privacidade pelo navegador.

A documentação foi atualizada considerando as permissões identificadas no AAB versão 3.

**Resultado:** Política de Privacidade publicada e disponível para a simulação acadêmica.

---

## 7. SEGURANÇA DOS DADOS

A seção Segurança dos Dados da Google Play Console exige informações sobre as práticas de coleta, compartilhamento e tratamento de dados do aplicativo.

Para a simulação acadêmica, foram consideradas as características identificadas no EstudaFácil.

### 7.1 Práticas identificadas

**Cadastro e login:** Não implementados.

**Publicidade:** Não implementada diretamente no código desenvolvido.

**Servidor próprio para armazenar tarefas:** Não implementado.

**Armazenamento:** Local, utilizando AsyncStorage.

**Dados cadastrados:** Tarefas, matérias e atividades de estudo.

**Exclusão de informações:** O aplicativo permite excluir tarefas, matérias e atividades.

A limpeza dos dados locais do aplicativo também pode ser realizada pelas configurações do Android.

### 7.2 Coleta e compartilhamento

Não foi identificado no código desenvolvido um mecanismo próprio para enviar tarefas ou matérias a um servidor externo.

Entretanto, essa observação não comprova a ausência de toda comunicação de rede ou de tratamento de dados técnicos por componentes de terceiros.

A verificação definitiva das práticas de coleta, compartilhamento e segurança exigiria uma avaliação completa das bibliotecas e do comportamento da aplicação compilada.

### 7.3 Formulário de Segurança dos Dados

**Situação:** Simulado para fins acadêmicos.

**Envio à Google Play Console:** Não realizado.

**Documento de apoio:**

`04_Privacidade/Simulacao_Formularios_Privacidade_EstudaFacil.pdf`

As respostas simuladas representam a análise realizada até o momento e não substituem a declaração oficial exigida para uma publicação real.

---

## 8. PERMISSÕES ANDROID

Foi realizada uma análise das permissões declaradas no pacote Android.

### 8.1 Permissões identificadas na versão 3

Na inspeção do manifesto do módulo principal do AAB versão 3, foram identificadas:

- `android.permission.INTERNET`
- `com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`

A permissão `INTERNET` permite que o aplicativo realize comunicações de rede.

A permissão `DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION` é uma permissão interna relacionada à proteção de componentes do aplicativo.

### 8.2 Permissões removidas

As seguintes permissões não aparecem no manifesto principal inspecionado da versão 3:

- `android.permission.SYSTEM_ALERT_WINDOW`
- `android.permission.VIBRATE`
- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.WRITE_EXTERNAL_STORAGE`

Na análise anterior, as permissões de armazenamento externo estavam presentes no manifesto da versão 2, com limitação de API.

Na versão 3, sua ausência foi confirmada na inspeção do manifesto principal do AAB.

**Resultado:** revisão das permissões concluída para o manifesto analisado da versão 3.

### 8.3 Limitações da análise

A inspeção do manifesto permite identificar permissões declaradas, mas não comprova isoladamente a ausência de todas as operações de rede ou de tratamento de dados.

Uma análise completa para publicação real também precisaria considerar os componentes incorporados ao aplicativo e seu comportamento em execução.

**Documento de apoio:**

`04_Privacidade/Revisao_Privacidade_Permissoes.md`

---

## 9. PÚBLICO-ALVO E CLASSIFICAÇÃO INDICATIVA

**Público-alvo planejado:** Estudantes a partir de 13 anos.

**Finalidade:** Organização de estudos e atividades escolares.

**Conteúdo:** Educacional.

O aplicativo não possui funcionalidades desenvolvidas de apostas, conteúdo sexual, violência explícita ou interação pública entre usuários.

**Classificação indicativa oficial:** Não obtida.

**Questionário IARC:** Considerado no planejamento da simulação, sem resultado oficial.

Para uma publicação real, seria necessário responder ao questionário de classificação indicativa e verificar os demais requisitos da Google Play aplicáveis ao público-alvo.

---

## 10. TESTES

### 10.1 Ambiente utilizado

**Ferramenta:** Android Studio.

**Dispositivo de testes:** Emulador Android.

**Aplicativo:** `com.estudafacil.app`

**Versão final instalada:** 1.0.0 — código 3.

### 10.2 Testes funcionais anteriores

Durante o desenvolvimento, foram realizados testes funcionais com uma versão instalável anterior do aplicativo.

Os cenários documentados incluem:

- Abertura e navegação entre telas.
- Cadastro, conclusão e exclusão de tarefas.
- Cadastro e exclusão de matérias.
- Prevenção de matérias duplicadas.
- Navegação pelo calendário.
- Cadastro e exclusão de atividades.
- Persistência dos dados locais após reabrir o aplicativo.
- Acesso à Política de Privacidade.

**Resultado histórico:** Aprovado nos cenários avaliados.

### 10.3 Validações realizadas na versão 3

Após a geração do AAB de produção, foram realizadas as seguintes verificações:

- Geração de APKs utilizando Bundletool.
- Instalação limpa da versão 3 no emulador.
- Confirmação do `versionCode=3`.
- Execução do comando de inicialização do aplicativo.
- Cadastro de uma matéria de teste.
- Fechamento e reabertura do aplicativo.
- Confirmação da permanência da matéria cadastrada.

**Resultado:** Aprovado nos cenários efetivamente testados.

Os testes funcionais completos da versão anterior não foram repetidos integralmente na versão 3.

### 10.4 Verificação preliminar de rede

Foi iniciada uma consulta às estatísticas de rede do Android para identificar registros relacionados ao aplicativo.

O UID utilizado pelo EstudaFácil versão 3 foi identificado como `10182` no ambiente de testes.

A consulta apresentou uma referência a esse UID, mas não forneceu informações suficientes para concluir se houve ou não transmissão de dados.

**Resultado:** Verificação preliminar realizada, sem auditoria completa de tráfego.

### 10.5 Testes de distribuição

**Teste fechado pela Google Play:** Não realizado.

**Publicação em trilha de teste:** Não realizada.

**Instalação por meio da Google Play:** Não realizada.

O aplicativo foi testado diretamente no emulador Android, fora dos mecanismos oficiais de distribuição da Google Play.

**Relatório de apoio:**

`05_Apresentacao/Relatorio_Testes_Finais.md`

---

## 11. REQUISITOS PENDENTES

Para uma publicação real na Google Play Store, ainda seria necessário:

- Validar definitivamente as declarações de Segurança dos Dados.
- Realizar uma auditoria mais completa dos componentes e das comunicações de rede.
- Preencher o formulário oficial de Segurança dos Dados.
- Responder ao questionário IARC e obter a classificação indicativa.
- Confirmar os requisitos de público-alvo e conteúdo do aplicativo.
- Verificar os requisitos de testes e elegibilidade aplicáveis à conta de desenvolvedor.
- Confirmar as configurações de assinatura e distribuição exigidas pela Google Play.
- Enviar o AAB à Google Play Console.
- Realizar os testes de distribuição exigidos.
- Submeter o aplicativo à análise da Google Play, caso a publicação real seja necessária.

**Observação:** a revisão das permissões de armazenamento externo e a instalação da versão 3 no emulador já foram realizadas e, portanto, não permanecem como pendências desta atividade.

---

## 12. CONCLUSÃO

O EstudaFácil possui um **AAB de produção versão 3**, assinado digitalmente, além dos materiais visuais, capturas de tela, metadados e documentos de privacidade preparados para a simulação de publicação na Google Play Store.

O projeto também passou por uma revisão das permissões Android, com remoção das permissões de armazenamento externo anteriormente identificadas.

A versão 3 foi instalada no emulador Android e apresentou funcionamento satisfatório nos testes básicos executados, incluindo a persistência de dados locais.

### Situação final

| Item | Situação |
|---|---|
| AAB de produção versão 3 | Gerado |
| Assinatura Android | Verificada |
| Instalação no emulador | Concluída |
| Código da versão 3 | Confirmado |
| Teste de persistência | Aprovado |
| Ícone e banner | Disponíveis |
| Capturas Android | Disponíveis |
| Metadados | Preparados |
| Política de Privacidade | Publicada |
| Permissões Android | Revisadas |
| Formulário de Segurança dos Dados | Simulado |
| Classificação indicativa oficial | Não obtida |
| Testes pela Google Play | Não realizados |
| Publicação real | Não realizada |

**Resultado geral:** a preparação técnica e documental do EstudaFácil para a simulação acadêmica de publicação Android foi realizada, respeitando as limitações identificadas.

O projeto demonstra as principais etapas necessárias à preparação de um aplicativo para distribuição na Google Play Store, sem representar uma submissão ou aprovação efetiva pela plataforma.