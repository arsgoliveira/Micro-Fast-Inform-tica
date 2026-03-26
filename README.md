# Micro Fast Informática — Site Institucional

> Site institucional moderno para empresa de assistência técnica e criação de sites com 25 anos de experiência em Santos, SP.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-online-brightgreen)

---

## Sobre o Projeto

Site institucional da **Micro Fast Informática**, desenvolvido do zero com HTML, CSS e JavaScript puros — sem dependências externas ou frameworks. O objetivo foi criar uma presença digital profissional, rápida e totalmente responsiva para uma empresa com 25 anos de atuação no mercado de TI da Baixada Santista.

**Páginas:**
- **Home (`index.html`)** — apresentação, serviços, depoimentos e formulário de contato
- **Portfólio (`portfolio.html`)** — galeria de sites desenvolvidos para clientes
- **Ferramentas (`ferramentas.html`)** — utilitários úteis para os clientes

---

## Demo

Acesse o site em produção:

🔗 **[microfastinformatica.online](https://microfastinformatica.online)**

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS3 com variáveis customizadas | Estilos, layout responsivo (sem frameworks) |
| JavaScript Vanilla | Interações e comportamentos |
| Google Fonts (Sora + DM Sans) | Tipografia |

Sem dependências — nenhum `npm install` necessário.

---

## Como Rodar Localmente

**1. Clone o repositório:**

```bash
git clone https://github.com/arsgoliveira/micro-fast-informatica.git
cd micro-fast-informatica
```

**2. Abra no navegador:**

```bash
# Opção A — abrir direto (funciona para navegação básica)
start index.html

# Opção B — rodar com Live Server (recomendado para desenvolvimento)
# Instale a extensão Live Server no VS Code, clique com botão direito
# no index.html e selecione "Open with Live Server"
```

Não há build, bundler ou servidor necessário — é um projeto estático puro.

---

## Estrutura de Arquivos

```
micro-fast/
├── index.html              # Página principal
├── portfolio.html          # Portfólio de sites desenvolvidos
├── ferramentas.html        # Ferramentas úteis para clientes
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais e componentes
│   ├── js/
│   │   └── main.js         # Comportamentos e interações
│   └── images/             # Imagens do site
└── README.md
```

---

## Identidade Visual

As variáveis de cor e fonte estão centralizadas no topo do `assets/css/style.css`:

```css
:root {
  --color-accent: #E07B2A;    /* Laranja — cor principal */
  --color-dark:   #0D1117;    /* Fundo escuro */
  --font-display: 'Sora';     /* Títulos */
  --font-body:    'DM Sans';  /* Texto corrido */
}
```

---

## Deploy

O site é 100% estático e pode ser hospedado em qualquer serviço:

- **Vercel** — `vercel deploy`
- **Netlify** — conectar repositório GitHub ou arrastar a pasta
- **GitHub Pages** — ativar em *Settings → Pages*

---

## Autor

**Antonio Rodrigo** — Micro Fast Informática

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/antonio-rodrigo-gomes-de-oliveira-55240134a/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/arsgoliveira)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:contato@microfastinformatica.online)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5513978264067)
