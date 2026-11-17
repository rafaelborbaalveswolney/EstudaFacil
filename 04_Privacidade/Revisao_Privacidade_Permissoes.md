# REVISÃO DE PRIVACIDADE E PERMISSÕES — ESTUDAFÁCIL

**Aplicativo:** EstudaFácil  
**Versão Android analisada:** 1.0.0 (2)  
**Identificador:** com.estudafacil.app  
**Data:** 16 de novembro de 2026

---

## 1. Objetivo

Documentar a análise das permissões Android e das práticas de privacidade do EstudaFácil, como parte da preparação acadêmica para publicação nas lojas oficiais.

## 2. Armazenamento das informações

O EstudaFácil utiliza AsyncStorage para armazenar localmente:

- Tarefas de estudo.
- Matérias escolares.
- Atividades cadastradas no calendário.

O aplicativo não exige cadastro nem login e não possui um servidor próprio para armazenar essas informações.

O AsyncStorage não oferece criptografia automática dos dados armazenados localmente.

## 3. Permissões identificadas no AAB versão 2

A análise foi realizada no Android Studio, utilizando o arquivo `EstudaFacil-release-v2.aab`.

**Permissões presentes:**

- `android.permission.INTERNET`
- `android.permission.READ_EXTERNAL_STORAGE`, limitada até a API 32.
- `android.permission.WRITE_EXTERNAL_STORAGE`, limitada até a API 32.
- `com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`, de uso interno e proteção `signature`.

**Permissões removidas:**

- `android.permission.SYSTEM_ALERT_WINDOW`
- `android.permission.VIBRATE`

A ausência das duas permissões removidas foi confirmada diretamente no AndroidManifest.xml do novo AAB.

## 4. Avaliação das permissões

A permissão INTERNET permanece no manifesto do aplicativo.

As permissões READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE aparecem limitadas a versões antigas do Android e ainda precisam de avaliação para determinar se podem ser removidas sem prejudicar componentes nativos.

A permissão DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION é uma permissão interna, utilizada para proteção de componentes do aplicativo.

O código das funcionalidades de tarefas, matérias e calendário não implementa acesso direto aos arquivos pessoais do usuário.

## 5. Política de Privacidade

**Endereço público:**

https://clever-palmier-327fdc.netlify.app/

A Política de Privacidade também possui uma versão em PDF na pasta `04_Privacidade`.

O botão de acesso à Política de Privacidade foi testado durante o desenvolvimento no Expo Go.

Ainda é necessário confirmar seu funcionamento em uma versão independente atualizada do aplicativo.

## 6. Coleta e compartilhamento de dados

Nas funcionalidades desenvolvidas diretamente para o EstudaFácil:

- Não foi implementado cadastro de usuários.
- Não foi implementado login.
- Não foi implementada publicidade.
- Não foi implementado envio de tarefas para servidor próprio.
- Não foi implementado compartilhamento de informações com outros usuários.

Essas observações não substituem a auditoria das dependências e do comportamento de rede do aplicativo.

Portanto, uma declaração definitiva de ausência de coleta de dados ainda depende de validação adicional.

## 7. Formulários de privacidade das lojas

Foram preparados documentos de simulação para:

- Google Play Console — Segurança dos Dados.
- Apple App Store Connect — App Privacy.

Esses formulários não foram enviados às lojas.

As respostas documentadas são preliminares e deverão ser confirmadas antes de uma eventual publicação real.

## 8. Pendências identificadas

- Avaliar a remoção das permissões de armazenamento externo.
- Testar a versão Android atualizada como APK independente.
- Verificar as práticas de dados das dependências utilizadas.
- Confirmar a Política de Privacidade na versão final instalada.
- Validar as declarações de privacidade específicas da versão iOS, caso seja compilada.

## 9. Conclusão

A análise do AAB versão 2 confirmou a remoção das permissões SYSTEM_ALERT_WINDOW e VIBRATE.

O EstudaFácil possui Política de Privacidade pública, armazenamento local de informações e documentos de simulação dos formulários exigidos pelas lojas.

Foram identificados pontos pendentes de validação, devidamente registrados para evitar afirmações incorretas sobre a conformidade do aplicativo.

A revisão constitui evidência da análise de privacidade e permissões realizada durante o projeto acadêmico.