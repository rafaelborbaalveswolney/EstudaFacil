# ROTEIRO DE APRESENTAÇÃO — ESTUDAFÁCIL

## Slide 1 — Capa

**EstudaFácil**

Preparação e simulação de publicação de um aplicativo nas lojas Google Play e Apple App Store.

**Tecnologias:** React Native, Expo e JavaScript.

**Integrantes:**
- Rafael Borba
- Davi Padilha
- Querley Junio

---

## Slide 2 — Objetivo do projeto

Desenvolver um aplicativo para ajudar estudantes a organizar suas atividades acadêmicas de forma simples e prática.

O projeto também apresenta as etapas de preparação, compilação, documentação e simulação de publicação nas lojas oficiais de aplicativos.

O objetivo da atividade é compreender como um aplicativo é preparado para distribuição, mesmo sem realizar sua publicação real.

---

## Slide 3 — Funcionalidades

O EstudaFácil possui três funcionalidades principais:

- **Minhas Tarefas:** cadastrar, concluir e excluir tarefas.
- **Minhas Matérias:** cadastrar e organizar disciplinas, evitando duplicatas.
- **Calendário:** cadastrar e consultar atividades por data.

As informações ficam armazenadas localmente no dispositivo e permanecem disponíveis após fechar e abrir o aplicativo.

**Evidências:** capturas reais das telas Android.

---

## Slide 4 — Tecnologias utilizadas

- JavaScript.
- React Native.
- Expo SDK 58.
- AsyncStorage.
- Android Studio.
- EAS Build.
- Bundletool.

O React Native foi utilizado no desenvolvimento do aplicativo.

O Expo facilitou a configuração e a compilação, enquanto o AsyncStorage foi utilizado para armazenar localmente as informações cadastradas.

O Android Studio foi utilizado para executar e testar o aplicativo no emulador Android.

---

## Slide 5 — Compilação Android

Utilizamos o **Expo EAS Build** para gerar o pacote Android de produção.

**AAB de produção:**
`EstudaFacil-release-v3.aab`

**Pacote utilizado na instalação da versão 3:**
`EstudaFacil-v3.apks`

**APK utilizado nos testes anteriores:**
`EstudaFacil-preview-v2.apk`

**Versão do aplicativo:** 1.0.0  
**Código da versão Android:** 3  
**Identificador:** `com.estudafacil.app`

O AAB foi gerado com credenciais de assinatura Android gerenciadas pelo EAS Build.

Também utilizamos o Bundletool para gerar APKs a partir do AAB e instalar a versão 3 no emulador.

A integridade da assinatura do AAB foi verificada utilizando a ferramenta `jarsigner`.

---

## Slide 6 — Identidade visual

Foram preparados:

- Ícone Android de 512 × 512 pixels.
- Ícone iOS de 1024 × 1024 pixels.
- Banner promocional de 1024 × 500 pixels.
- Quatro screenshots Android de 1080 × 2400 pixels.
- Quatro mockups ilustrativos para a simulação da App Store iOS.

Os materiais foram organizados para representar como o aplicativo seria apresentado nas lojas.

**Observação:** as capturas Android são reais. As imagens iOS são simulações visuais, pois não foi realizada uma compilação do aplicativo para iPhone.

---

## Slide 7 — Metadados e ASO

**Nome:** EstudaFácil.

**Categoria:** Educação.

**Preço planejado:** Gratuito.

**Descrição curta:**
Organize tarefas, matérias e atividades de estudo em um só lugar.

Foram preparados descrições, palavras-chave e materiais de divulgação para simular o cadastro do aplicativo nas lojas.

Essas informações fazem parte do processo de **ASO (App Store Optimization)**, que busca melhorar a apresentação e a descoberta de aplicativos nas lojas.

---

## Slide 8 — Privacidade e permissões

A Política de Privacidade foi preparada e publicada no endereço:

https://clever-palmier-327fdc.netlify.app/

O EstudaFácil utiliza AsyncStorage para armazenar localmente tarefas, matérias e atividades, sem exigir cadastro ou login.

Na análise do manifesto do **AAB Android versão 3**, foram identificadas:

- `INTERNET` — permissão de acesso à rede.
- `DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION` — permissão interna relacionada à proteção de componentes do aplicativo.

As permissões `SYSTEM_ALERT_WINDOW`, `VIBRATE`, `READ_EXTERNAL_STORAGE` e `WRITE_EXTERNAL_STORAGE` não aparecem mais no manifesto principal analisado da versão 3.

Também foram preparados os documentos de revisão de privacidade e a simulação dos formulários de tratamento de dados das lojas.

**Limitação:** não foi realizada uma auditoria completa de tráfego de rede e de todos os componentes de terceiros.

---

## Slide 9 — Google Play Console

Foi simulada a preparação da publicação Android, incluindo:

- Nome, descrição e categoria.
- Ícone, banner e screenshots.
- Política de Privacidade.
- Formulário de Segurança dos Dados.
- Classificação indicativa planejada.
- AAB de produção versão 3.
- Verificação da assinatura digital.
- Revisão das permissões.

**Situação:** materiais e documentação preparados. O aplicativo não foi enviado nem publicado na Google Play Store.

---

## Slide 10 — Apple App Store Connect

Foi simulada a preparação da publicação iOS, incluindo:

- Nome, subtítulo e descrição.
- Categoria e palavras-chave.
- Ícone iOS.
- Quatro mockups ilustrativos de telas.
- Política de Privacidade.
- Simulação do formulário App Privacy.
- Planejamento de assinatura e compilação IPA.

**Situação:**

- Metadados e materiais visuais preparados.
- Arquivo IPA não gerado.
- Aplicativo não testado em iOS.
- Publicação na App Store não realizada.

---

## Slide 11 — Testes realizados

Foram realizados testes funcionais do EstudaFácil no Android durante o desenvolvimento, incluindo:

- Navegação entre as telas.
- Cadastro, conclusão e exclusão de tarefas.
- Cadastro de matérias e prevenção de duplicatas.
- Calendário e atividades por data.
- Persistência local das informações.
- Acesso à Política de Privacidade.

Esses testes foram documentados inicialmente com o APK da versão 2.

**Na versão 3, confirmamos:**

- Instalação limpa no emulador Android.
- Identificação da versão instalada (`versionCode=3`).
- Execução do comando de abertura do aplicativo.
- Cadastro de uma matéria de teste.
- Permanência da matéria após fechar e abrir novamente o aplicativo.

O aplicativo foi instalado sem depender do Expo Go.

Os testes completos da versão 2 não foram repetidos integralmente na versão 3.

---

## Slide 12 — Conclusão

O projeto EstudaFácil demonstrou as etapas de desenvolvimento, compilação Android, preparação de materiais visuais, elaboração de metadados, documentação de privacidade e simulação de publicação nas lojas oficiais.

**Resultados alcançados:**

- Aplicativo Android funcional nos cenários testados.
- AAB de produção versão 3 gerado e assinado.
- Instalação e testes básicos da versão 3 realizados.
- Persistência local validada.
- Política de Privacidade publicada.
- Materiais de publicação Android e iOS preparados.
- Simulações da Google Play Store e da Apple App Store documentadas.

A publicação real não foi realizada, conforme o escopo acadêmico da atividade.

**Conclusão final:** o EstudaFácil permitiu compreender o processo técnico e documental necessário para preparar um aplicativo para distribuição nas lojas, incluindo suas exigências e limitações.