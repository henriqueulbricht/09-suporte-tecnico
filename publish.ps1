# ================================================================
#  publish.ps1 — Script de Publicação GitHub
#  Projeto   : 09 Suporte Tecnico
#  Repositório: https://github.com/henriqueulbricht/09-suporte-tecnico.git
#  Henrique Ulbricht
# ================================================================

$ErrorActionPreference = "Stop"
$repo = "https://github.com/henriqueulbricht/09-suporte-tecnico.git"

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Publicação GitHub — 09 Suporte Tecnico" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar se o Git está instalado
try {
    $gitVersion = git --version 2>&1
    Write-Host "[OK] Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERRO] Git não encontrado. Instale em https://git-scm.com" -ForegroundColor Red
    exit 1
}

# 2. Verificar se estamos em um repositório Git
if (-not (Test-Path ".git")) {
    Write-Host "[INFO] Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host "[OK] Repositório inicializado." -ForegroundColor Green
} else {
    Write-Host "[OK] Repositório Git já existente." -ForegroundColor Green
}

# 3. Configurar ou atualizar o remote origin
$remotes = git remote -v
if ($remotes -match "origin") {
    Write-Host "[INFO] Atualizando URL do remote origin..." -ForegroundColor Yellow
    git remote set-url origin $repo
} else {
    Write-Host "[INFO] Adicionando remote origin..." -ForegroundColor Yellow
    git remote add origin $repo
}
Write-Host "[OK] Remote: $repo" -ForegroundColor Green

# 4. Garantir branch 'main'
git branch -M main
Write-Host "[OK] Branch definida como 'main'." -ForegroundColor Green

# 5. Verificar se há alterações para commitar
$status = git status --porcelain
if ($status) {
    Write-Host ""
    Write-Host "[INFO] Alterações detectadas. Realizando commit..." -ForegroundColor Yellow
    git add -A
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    git commit -m "chore: update — $timestamp"
    Write-Host "[OK] Commit realizado." -ForegroundColor Green
} else {
    Write-Host "[OK] Nenhuma alteração pendente. Repositório limpo." -ForegroundColor Green
}

# 6. Push para o GitHub
Write-Host ""
Write-Host "[INFO] Enviando para GitHub..." -ForegroundColor Yellow
Write-Host "       Pode solicitar autenticação (usuário/PAT token)." -ForegroundColor Gray
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  Publicação concluída com sucesso!" -ForegroundColor Green
    Write-Host "  Acesse: https://github.com/henriqueulbricht/09-suporte-tecnico" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "[ERRO] Falha no push. Verifique:" -ForegroundColor Red
    Write-Host "  1. Sua autenticação no GitHub (use PAT token como senha)" -ForegroundColor Yellow
    Write-Host "  2. https://github.com/settings/tokens para criar um token" -ForegroundColor Yellow
    Write-Host "  3. Execute: git config credential.helper manager" -ForegroundColor Yellow
    exit 1
}
