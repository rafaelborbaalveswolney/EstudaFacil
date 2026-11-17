# EstudaFácil — Relatório de Assinatura Digital

## 1. Identificação do aplicativo

- Aplicativo: EstudaFácil
- Plataforma: Android
- Package ID: com.estudafacil.app
- Version Name: 1.0.0
- Version Code: 3
- Arquivo: EstudaFacil-release-v3.aab
- Perfil de compilação: production
- Formato: Android App Bundle (.aab)

## 2. Geração do aplicativo

O aplicativo foi compilado utilizando o Expo Application Services (EAS Build).

Comando utilizado:

```powershell
eas build -p android --profile production
```

O perfil production foi configurado para gerar um Android App Bundle destinado à distribuição pela Google Play Store.

A compilação foi concluída com sucesso utilizando as credenciais de assinatura Android gerenciadas pelo EAS.

## 3. Assinatura digital

O AAB foi assinado utilizando uma chave de assinatura Android configurada no EAS Build.

Informações identificadas na assinatura:

- Algoritmo de assinatura: SHA256withRSA
- Algoritmo de resumo: SHA-256
- Tamanho da chave RSA: 2048 bits
- Início da validade do certificado: 15/11/2026
- Expiração do certificado: 02/04/2054

## 4. Validação da assinatura

A assinatura foi verificada utilizando a ferramenta jarsigner, disponível no JDK.

Comando utilizado:

```powershell
jarsigner -verify -verbose -certs ".\01_Binarios\EstudaFacil-release-v3.aab"
```

Resultado:

```text
jar verified.
```

Esse resultado confirma que a assinatura criptográfica do arquivo foi validada.

O certificado é autoassinado, característica comum de certificados utilizados na assinatura de aplicativos Android.

A verificação não comprova vínculo com uma conta Google Play Console, pois o aplicativo ainda não foi enviado à loja.

## 5. Permissões Android

O manifesto da versão 3 foi analisado utilizando o Bundletool.

Permissões declaradas:

- android.permission.INTERNET
- com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION

As permissões READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE, presentes na versão 2, foram removidas na versão 3.

## 6. Situação da publicação

O EstudaFácil possui um AAB de produção gerado e assinado digitalmente.

A publicação real na Google Play Store não foi realizada, conforme permitido pelo enunciado da atividade acadêmica.

O arquivo está preparado para a demonstração do processo de geração e assinatura de aplicativos Android.

## 7. Evidências

- AAB: 01_Binarios/EstudaFacil-release-v3.aab
- Manifesto: 01_Binarios/AndroidManifest-release-v3.xml
- Ferramenta de compilação: EAS Build
- Ferramenta de análise do manifesto: Bundletool 1.18.3
- Ferramenta de validação da assinatura: jarsigner
