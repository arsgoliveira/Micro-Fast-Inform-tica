# Micro Fast Informática — Site

Site institucional da Micro Fast Informática. Pasta pronta para deploy na HostGator e publicação no GitHub.

## Estrutura

```
deploy/
├── index.html          # Página principal
├── apps.html           # Aplicativos
├── comandos-rede.html  # Comandos de rede
├── construction.html   # Portfólio (em construção)
├── robots.txt
├── sitemap.xml
├── .htaccess
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── apps/
├── deploy-hostgator.bat
├── deploy-config.example
└── README.md
```

## Deploy HostGator

1. Copie `deploy-config.example` para `deploy-config.local`
2. Edite `deploy-config.local` e preencha a senha do cPanel
3. Execute `deploy-hostgator.bat`

## GitHub

Repositório: https://github.com/arsgoliveira/Micro-Fast-Inform-tica

```bash
cd deploy
git init
git add .
git commit -m "Site Micro Fast - estrutura organizada"
git remote add origin https://github.com/arsgoliveira/Micro-Fast-Inform-tica.git
git push -u origin main
```

## Site

https://microfastinformatica.online/
