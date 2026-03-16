# Micro Fast Informatica

Site institucional da Micro Fast Informatica criado para apresentar servicos, reforcar credibilidade da marca e facilitar o contato comercial.

## Visao geral

O projeto foi construido como um site estatico, com carregamento rapido e estrutura simples de publicar em hospedagem tradicional. A pagina principal destaca os servicos da empresa, a experiencia profissional de Antonio Rodrigo, canais de contato e um portfolio inicial.

## Demo

- Site publicado: [microfastinformatica.online](https://microfastinformatica.online/)
- Repositorio: [arsgoliveira/Micro-Fast-Inform-tica](https://github.com/arsgoliveira/Micro-Fast-Inform-tica)

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Font Awesome

## Funcionalidades

- Hero com CTA para WhatsApp
- Secao de servicos com foco comercial
- Bloco institucional com experiencia profissional e links sociais
- Portfolio com modal para apresentacao de projetos
- Formulario de contato com validacao em tempo real
- Acionamento de e-mail via `mailto`
- Menu responsivo para mobile
- Alternancia entre tema claro e tema hi-tech
- Botao flutuante de WhatsApp
- Arquivos de SEO tecnico com `robots.txt` e `sitemap.xml`
- Estrutura de deploy para HostGator via script

## Estrutura atual

```text
deploy/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style-hitech.css
│   ├── images/
│   └── js/
│       └── main.js
├── .gitignore
├── .htaccess
├── deploy-agora.ps1
├── deploy-config.example
├── deploy-hostgator.bat
├── robots.txt
├── sitemap.xml
└── README.md
```

## Como executar localmente

Por ser um projeto estatico, voce pode abrir o arquivo principal diretamente no navegador:

1. Abra `index.html`
2. Ou rode a pasta com uma extensao como Live Server no VS Code

## Organizacao para GitHub

- Credenciais de deploy ficaram centralizadas em `deploy-config.local`
- O arquivo de exemplo `deploy-config.example` serve como modelo seguro
- O `.gitignore` ja evita commit do arquivo local de configuracao
- O projeto agora inclui os arquivos basicos de SEO para publicacao

## Deploy

O projeto possui scripts para publicacao em hospedagem tradicional via FTP.

### Configuracao recomendada

1. Copie `deploy-config.example` para `deploy-config.local`
2. Preencha as credenciais do ambiente no arquivo local
3. Execute `deploy-hostgator.bat`

### Observacoes

- `deploy-config.local` esta listado no `.gitignore` e nao deve ser commitado
- O script `deploy-agora.ps1` e o `deploy-hostgator.bat` foram preparados para envio automatizado dos arquivos
- Alguns scripts ja consideram paginas adicionais para futuras publicacoes

## Objetivo

Disponibilizar uma presenca digital profissional para a Micro Fast Informatica, com foco em manutencao de computadores, redes, suporte tecnico e criacao de sites.
