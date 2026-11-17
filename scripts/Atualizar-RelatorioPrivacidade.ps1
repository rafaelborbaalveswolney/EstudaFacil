
$ErrorActionPreference = "Stop"

$arquivo = ".\04_Privacidade\Revisao_Privacidade_Permissoes.md"
$backup = ".\04_Privacidade\Revisao_Privacidade_Permissoes.backup.md"

if (-not (Test-Path $arquivo)) {
    throw "Relatorio nao encontrado: $arquivo"
}

$conteudo = Get-Content $arquivo -Raw -Encoding UTF8

if ($conteudo.Contains("### Validação da versão 3")) {
    Write-Host "A versao 3 ja esta documentada. Nenhuma alteracao realizada."
    exit
}

$alteracoes = @(
    @{
        Antigo = "**Versão Android analisada:** 1.0.0 (2)"
        Novo = "**Versão Android analisada:** 1.0.0 (3) - histórico da versão 2 preservado"
    },
    @{
        Antigo = "## 3. Permissões identificadas no AAB versão 2"
        Novo = "## 3. Permissões identificadas no AAB versão 2 (histórico)"
    },
    @{
        Antigo = "As permissões READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE aparecem limitadas a versões antigas do Android e ainda precisam de avaliação para determinar se podem ser removidas sem prejudicar componentes nativos."
        Novo = "As permissões READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE estavam presentes na versão 2, limitadas à API 32. Após análise do armazenamento local e das dependências, foram configuradas para bloqueio e sua ausência foi confirmada no AAB versão 3."
    },
    @{
        Antigo = "- Avaliar a remoção das permissões de armazenamento externo."
        Novo = "- Remoção das permissões de armazenamento externo: concluída e validada no AAB versão 3."
    },
    @{
        Antigo = "A análise do AAB versão 2 confirmou a remoção das permissões SYSTEM_ALERT_WINDOW e VIBRATE."
        Novo = "A análise do AAB versão 3 confirmou que SYSTEM_ALERT_WINDOW, VIBRATE, READ_EXTERNAL_STORAGE e WRITE_EXTERNAL_STORAGE não estão declaradas no manifesto do módulo base."
    }
)

foreach ($item in $alteracoes) {
    if ($conteudo -notmatch [regex]::Escape($item.Antigo)) {
        throw "Texto esperado nao encontrado: $($item.Antigo)"
    }
}

$marcador = "## 4. Avaliação das permissões"

if (-not $conteudo.Contains($marcador)) {
    throw "Secao 4 nao encontrada."
}

$novaSecao = @'
### Validação da versão 3

O arquivo `EstudaFacil-release-v3.aab` foi gerado utilizando o EAS Build com o perfil `production`.

**Configuração validada:**

- Package ID: `com.estudafacil.app`
- Version Name: `1.0.0`
- Version Code: `3`
- Target SDK: `36`

**Permissões declaradas no manifesto do módulo base:**

- `android.permission.INTERNET`
- `com.estudafacil.app.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION`

**Permissões ausentes no manifesto da versão 3:**

- `android.permission.READ_EXTERNAL_STORAGE`
- `android.permission.WRITE_EXTERNAL_STORAGE`
- `android.permission.SYSTEM_ALERT_WINDOW`
- `android.permission.VIBRATE`

O manifesto foi extraído diretamente do AAB versão 3 utilizando o Bundletool 1.18.3.

A ausência das permissões de armazenamento externo foi confirmada. Ainda são necessários testes funcionais da versão atualizada em dispositivo Android.

'@

foreach ($item in $alteracoes) {
    $conteudo = $conteudo.Replace($item.Antigo, $item.Novo)
}

$conteudo = $conteudo.Replace(
    $marcador,
    $novaSecao + "`r`n" + $marcador
)

Copy-Item $arquivo $backup -Force

Set-Content -Path $arquivo -Value $conteudo -Encoding UTF8

Write-Host "Relatorio atualizado com sucesso."
Write-Host "Backup salvo em: $backup"
