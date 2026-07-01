# 🛠️ Painel de Chamados — Suporte Técnico

> Plataforma de gestão de chamados técnicos com dashboard interativo, filtros por categoria, paginação e relatórios de SLA.

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Sobre o Projeto

Sistema de gerenciamento de chamados de suporte técnico desenvolvido como aplicação frontend pura (sem backend). Permite visualizar, filtrar e paginar tickets de suporte em diferentes categorias (Informática/TI, Elétrica, Predial, Segurança Eletrônica e Telecomunicações).

---

## ⚡ Funcionalidades

- **Dashboard** com métricas em tempo real (abertos, em progresso, resolvidos, urgentes)
- **Filtros** por categoria e status
- **Tabela paginada** com busca dinâmica
- **Gráficos de SLA** e volume por categoria
- **Criação de chamados** via modal interativo
- **Relatórios** de desempenho por período
- **Sidebar responsiva** com overlay mobile

---

## 🧰 Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Estrutura | HTML5 Semântico |
| Estilo | CSS3 (Design Tokens + Componentes) |
| Lógica | JavaScript ES Modules (sem framework) |
| Ícones | Google Material Symbols |
| Fontes | Google Fonts (Inter) |

---

## 📁 Estrutura de Pastas

```
09 Suporte tecnico/
├── app/
│   ├── css/
│   │   ├── tokens.css      # Design tokens (variáveis de cor, espaçamento)
│   │   ├── layout.css      # Grid e estrutura da página
│   │   ├── components.css  # Componentes reutilizáveis
│   │   └── pages.css       # Estilos específicos de cada página
│   ├── js/
│   │   ├── app.js          # Inicialização e orquestração
│   │   ├── data.js         # Mock de dados dos chamados
│   │   ├── filters.js      # Lógica de filtros, busca e paginação
│   │   └── sidebar.js      # Navegação e menu hamburger
│   └── index.html          # Ponto de entrada da aplicação
├── .gitignore
├── publish.ps1             # Script de publicação no GitHub
└── README.md
```

---

## 🚀 Como Rodar Localmente

```bash
# Usando npx serve (recomendado)
npx -y serve ./app --listen 3000

# Ou usando o publish.ps1 para publicar no GitHub:
.\publish.ps1
```

Depois acesse: **http://localhost:3000**

---

## 👨‍💻 Desenvolvedor

**Henrique Ulbricht**  
Desenvolvedor de Inteligência Artificial & Sistemas  
[![GitHub](https://img.shields.io/badge/GitHub-henriqueulbricht-181717?logo=github)](https://github.com/henriqueulbricht)
