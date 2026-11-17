# RELATÓRIO DE TESTES FINAIS — ESTUDAFÁCIL

**Aplicativo:** EstudaFácil  
**Versão:** 1.0.0  
**Código da versão Android:** 3  
**Plataforma:** Android  
**Ambiente de testes:** Emulador Android — Android Studio  
**Período dos testes:** 16 e 17 de novembro de 2026  
**Responsável:** Equipe de Desenvolvimento do EstudaFácil

---

## 1. Objetivo

Verificar o funcionamento das principais funcionalidades do EstudaFácil em ambiente Android e validar a instalação da versão 3, preparada para a simulação acadêmica de publicação na Google Play Store.

Os testes abrangem funcionalidades básicas, armazenamento local, instalação do aplicativo e análise do pacote Android de produção.

## 2. Arquivos utilizados

### 2.1 APK de testes — versão 2

**Arquivo:** `01_Binarios/EstudaFacil-preview-v2.apk`

**Formato:** APK  
**Código da versão:** 2  
**Perfil de compilação:** preview  
**Ferramenta:** Expo EAS Build

Esse arquivo foi utilizado nos testes funcionais anteriores, realizados no emulador Android.

**Resultado:** Instalação e execução aprovadas.

### 2.2 AAB de produção — versão 3

**Arquivo:** `01_Binarios/EstudaFacil-release-v3.aab`

**Formato:** Android App Bundle (AAB)  
**Código da versão:** 3  
**Versão do aplicativo:** 1.0.0  
**Perfil de compilação:** production  
**Ferramenta:** Expo EAS Build  
**Identificador:** `com.estudafacil.app`

O AAB foi gerado como artefato principal para a simulação de publicação na Google Play Store.

### 2.3 Pacote de instalação — versão 3

**Arquivo:** `01_Binarios/EstudaFacil-v3.apks`

**Ferramenta:** Bundletool 1.18.3

O conjunto de APKs foi gerado a partir do AAB versão 3, utilizando uma chave de depuração para instalação no emulador.

A primeira tentativa de atualização foi rejeitada devido à incompatibilidade entre a assinatura do aplicativo anteriormente instalado e a assinatura dos novos APKs.

Após a desinstalação da versão anterior, foi realizada uma instalação limpa da versão 3.

**Resultado:** Instalação concluída.

A versão instalada foi confirmada pelo Android:

```text
versionCode=3
versionName=1.0.0
minSdk=24
targetSdk=36
```

A instalação limpa removeu os dados locais da versão anterior.

---

## 3. Resultados dos testes funcionais

Os testes abaixo foram documentados durante a validação funcional do aplicativo Android, inicialmente com a versão 2.

| Nº | Teste realizado | Resultado |
|---|---|---|
| 1 | Instalação e abertura do APK de testes | Aprovado |
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

**Observação:** a tabela registra os testes funcionais previamente realizados. Não significa que todos esses cenários foram repetidos integralmente na versão 3.

---

## 4. Validação adicional da versão 3

Após a instalação limpa, foram realizadas verificações específicas do EstudaFácil versão 3.

| Nº | Verificação | Resultado |
|---|---|---|
| 1 | Geração do AAB de produção | Aprovado |
| 2 | Geração de APKs utilizando Bundletool | Aprovado |
| 3 | Instalação limpa no emulador Android | Aprovado |
| 4 | Confirmação do `versionCode=3` | Aprovado |
| 5 | Solicitação de abertura do aplicativo pelo ADB | Aprovado |
| 6 | Cadastro de matéria para teste de persistência | Aprovado |
| 7 | Persistência da matéria após fechar e reabrir o aplicativo | Aprovado |

A abertura do aplicativo foi solicitada utilizando o Android Debug Bridge (ADB), com o comando `monkey`.

O terminal confirmou que um evento de inicialização foi enviado ao Android:

```text
Events injected: 1
```

O teste de persistência foi confirmado por verificação funcional no emulador.

---

## 5. Teste de armazenamento local

Para validar o armazenamento local na versão 3, foi cadastrada uma matéria denominada **Teste de Persistência**.

O procedimento realizado foi:

1. Abrir o aplicativo EstudaFácil.
2. Cadastrar a matéria de teste.
3. Fechar o aplicativo.
4. Abrir novamente o EstudaFácil.
5. Verificar se a matéria permanecia cadastrada.

**Resultado:** Aprovado.

A matéria permaneceu disponível após a reabertura.

Esse comportamento confirma a persistência dos dados no cenário avaliado, compatível com o uso do AsyncStorage.

---

## 6. Teste da Política de Privacidade

Durante os testes funcionais anteriores, a opção **Política de Privacidade** foi acionada na tela inicial do aplicativo.

O navegador abriu o endereço público:

https://clever-palmier-327fdc.netlify.app/

**Resultado histórico:** Aprovado.

Posteriormente, foi verificada a disponibilidade da página publicada, com resposta HTTP 200, incluindo as informações atualizadas sobre armazenamento local e permissões.

**Observação:** o acesso à Política de Privacidade pela interface do aplicativo não foi novamente documentado como teste funcional completo na versão 3.

---

## 7. Inspeção do pacote Android de produção

O arquivo `EstudaFacil-release-v3.aab` foi inspecionado utilizando o Bundletool.

Foram identificados:

- Identificador: `com.estudafacil.app`.
- Versão do aplicativo: `1.0.0`.
- Código da versão Android: `3`.
- SDK mínimo: `24`.
- SDK de destino: `36`.

### 7.1 Permissões declaradas

A inspeção do manifesto do módulo principal do AAB versão 3 identificou:

- `android.permission.INTERNET`.
- `com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`.

As seguintes permissões, encontradas ou discutidas durante as análises anteriores, não aparecem mais entre as permissões declaradas no manifesto principal da versão 3:

- `SYSTEM_ALERT_WINDOW`.
- `VIBRATE`.
- `READ_EXTERNAL_STORAGE`.
- `WRITE_EXTERNAL_STORAGE`.

A ausência dessas permissões no manifesto inspecionado representa uma melhoria em relação à versão anterior.

### 7.2 Assinatura digital

A integridade da assinatura do AAB versão 3 foi verificada utilizando `jarsigner`.

O comando retornou:

```text
jar verified.
```

A verificação confirmou a integridade criptográfica do arquivo assinado.

A assinatura de produção do AAB é diferente da assinatura de depuração utilizada nos APKs instalados no emulador.

O resultado não comprova, isoladamente, a aceitação do pacote pela Google Play Store.

As informações técnicas estão registradas em:

`05_Apresentacao/Relatorio_Assinatura_Digital.md`

---

## 8. Verificação preliminar de rede

Foi iniciada uma verificação das estatísticas de rede do Android para identificar registros relacionados ao aplicativo.

O EstudaFácil versão 3 foi identificado com o UID:

```text
userId=10182
```

A consulta ao serviço `netstats` apresentou uma referência a esse UID:

```text
uid=10182 set=1
```

Esse registro representa uma informação de contabilização do Android e **não comprova a realização de comunicação externa**.

A consulta também não apresentou valores suficientes de bytes enviados ou recebidos para concluir que houve ou não tráfego de rede.

**Resultado:** Verificação preliminar realizada; auditoria completa de tráfego não executada.

---

## 9. Limitações dos testes

- Os testes foram realizados em ambiente de emulação Android.
- Não foram documentados testes em diferentes dispositivos físicos.
- Os testes funcionais completos da versão 2 não foram integralmente repetidos na versão 3.
- Não foi gerado um arquivo IPA para iOS.
- Não foram realizados testes em dispositivos iOS.
- Não foram realizadas publicações reais na Google Play Store ou Apple App Store.
- Não foram realizados testes de distribuição pelo Google Play Console ou TestFlight.
- A auditoria completa de dependências e tráfego de rede não foi concluída.
- Não foram realizados testes completos de desempenho, acessibilidade, segurança ou compatibilidade entre diferentes versões do sistema operacional.

---

## 10. Conclusão

Os testes funcionais registrados anteriormente demonstraram o funcionamento das principais funcionalidades do EstudaFácil em ambiente Android.

Na versão 3, foram confirmados:

- Geração do AAB de produção.
- Verificação da integridade da assinatura digital.
- Revisão das permissões declaradas.
- Instalação limpa do aplicativo no emulador.
- Identificação correta da versão instalada.
- Persistência de dados locais após fechar e reabrir o aplicativo.

**Resultado geral:** Aprovado para os cenários efetivamente testados e para a demonstração acadêmica de preparação da publicação Android.

Os resultados não representam certificação completa de qualidade, segurança ou aprovação pelas lojas oficiais.

O projeto está preparado para apresentar o processo de desenvolvimento, compilação, documentação de privacidade e simulação de publicação do EstudaFácil, respeitando as limitações identificadas.