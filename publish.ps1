# Script para Publicação no GitHub
# Repositório alvo: https://github.com/henriqueulbricht/09-suporte-tecnico.git

Write-Host "Iniciando processo de publicação no GitHub..." -ForegroundColor Cyan

# Verifica se a origem já está configurada
$remote = git remote -v
if ($remote -notmatch "origin") {
    Write-Host "Configurando repositório remoto (origin)..."
    git remote add origin https://github.com/henriqueulbricht/09-suporte-tecnico.git
} else {
    Write-Host "Repositório remoto 'origin' já configurado. Atualizando URL por segurança..."
    git remote set-url origin https://github.com/henriqueulbricht/09-suporte-tecnico.git
}

# Renomeia a branch atual para main (padrão GitHub)
Write-Host "Garantindo que a branch principal chama-se 'main'..."
git branch -M main

# Faz o push para o repositório remoto
Write-Host "Enviando código para o GitHub (pode solicitar autenticação)..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Publicação concluída com sucesso! 🚀" -ForegroundColor Green
    Write-Host "Acesse: https://github.com/henriqueulbricht/09-suporte-tecnico"
} else {
    Write-Host "Houve um problema durante o push. Verifique sua autenticação e tente novamente." -ForegroundColor Red
}
