# Micro Fast Informática — Site Institucional

Site institucional da **Micro Fast Informática**, empresa com 25 anos de experiência em manutenção de computadores, redes e criação de sites em Santos, SP.

## Estrutura do Projeto

```
micro-fast/
├── index.html              # Página principal
├── portfolio.html          # Portfólio de sites desenvolvidos
├── ferramentas.html        # Ferramentas úteis para clientes
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais + componentes
│   ├── js/
│   │   └── main.js         # Comportamentos e interações
│   └── images/             # Imagens do site
│       └── (adicionar imagens aqui)
└── README.md
```

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (sem frameworks)
- JavaScript vanilla (sem dependências)
- Google Fonts (Sora + DM Sans)

## Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/arsgoliveira/micro-fast-informatica.git

# Abrir com Live Server (VS Code) ou qualquer servidor local
# Ou simplesmente abrir o index.html no navegador
```

## Deploy

O site está hospedado em: [microfastinformatica.online](https://microfastinformatica.online)

Compatível com qualquer hospedagem estática:
- **Vercel** — `vercel deploy`
- **Netlify** — arrastar a pasta ou conectar ao GitHub
- **GitHub Pages** — ativar nas configurações do repositório

## Imagens necessárias

Adicionar as seguintes imagens na pasta `assets/images/`:

| Arquivo | Tamanho sugerido | Descrição |
|---|---|---|
| `hero.jpg` | 1200×800px | Técnico trabalhando em computador |
| `about.jpg` | 800×600px | Foto do Antonio Rodrigo |
| `service-hardware.jpg` | 600×400px | Manutenção de hardware |
| `service-web.jpg` | 600×400px | Criação de sites |
| `service-network.jpg` | 600×400px | Redes e suporte |
| `logo.png` | 200×60px (transparente) | Logo principal |
| `og-image.jpg` | 1200×630px | Imagem para redes sociais |

## Personalização

As principais variáveis de cor e fonte estão no topo do `style.css`:

```css
:root {
  --color-accent: #E07B2A;    /* Laranja — cor principal */
  --color-dark: #0D1117;      /* Fundo escuro */
  --font-display: 'Sora';     /* Títulos */
  --font-body: 'DM Sans';     /* Texto corrido */
}
```

## Contato

**Antonio Rodrigo** · [contato@microfastinformatica.online](mailto:contato@microfastinformatica.online)

LinkedIn: [linkedin.com/in/antonio-rodrigo-gomes-de-oliveira-55240134a](https://www.linkedin.com/in/antonio-rodrigo-gomes-de-oliveira-55240134a/)

GitHub: [github.com/arsgoliveira](https://github.com/arsgoliveira)
