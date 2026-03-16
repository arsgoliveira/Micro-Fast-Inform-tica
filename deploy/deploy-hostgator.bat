@echo off
chcp 65001 >nul
title Deploy Micro Fast - microfastinformatica.online

REM ============================================================
REM  DEPLOY PARA HOSTGATOR - microfastinformatica.online
REM  Configure as variáveis abaixo com seus dados do cPanel
REM  NÃO commite este arquivo com senha real no Git!
REM ============================================================

set "LOCAL_PATH=%~dp0"
set "LOCAL_PATH=%LOCAL_PATH:~0,-1%"

set "FTP_HOST=ftp.seu-dominio.com"
set "FTP_USER=SEU_USUARIO_FTP"
set "FTP_PASS=SUA_SENHA_CPANEL"
set "REMOTE_PATH=/public_html"

REM Carrega credenciais do arquivo local (opcional, mais seguro)
if exist "%~dp0deploy-config.local" (
  echo Carregando config de deploy-config.local...
  for /f "usebackq tokens=1,* delims==" %%a in ("%~dp0deploy-config.local") do (
    if "%%a"=="FTP_USER" set "FTP_USER=%%b"
    if "%%a"=="FTP_PASS" set "FTP_PASS=%%b"
    if "%%a"=="FTP_HOST" set "FTP_HOST=%%b"
    if "%%a"=="REMOTE_PATH" set "REMOTE_PATH=%%b"
  )
)

if "%FTP_PASS%"=="SUA_SENHA_CPANEL" (
  echo.
  echo [ERRO] Configure FTP_HOST, FTP_USER e FTP_PASS em deploy-config.local!
  echo.
  pause
  exit /b 1
)

if "%FTP_USER%"=="SEU_USUARIO_FTP" (
  echo.
  echo [ERRO] Configure FTP_HOST, FTP_USER e FTP_PASS em deploy-config.local!
  echo.
  pause
  exit /b 1
)

if "%FTP_HOST%"=="ftp.seu-dominio.com" (
  echo.
  echo [ERRO] Configure FTP_HOST, FTP_USER e FTP_PASS em deploy-config.local!
  echo.
  pause
  exit /b 1
)

echo.
echo ========================================
echo  Deploy: Micro Fast Informatica
echo  Destino: %FTP_HOST%%REMOTE_PATH%
echo ========================================
echo.

REM Verifica se LFTP está instalado
where lftp >nul 2>&1
if %errorlevel% equ 0 (
  echo Usando LFTP...
  lftp -e "set ssl:verify-certificate no; set ftp:ssl-allow no; open -u %FTP_USER%,%FTP_PASS% ftp://%FTP_HOST%; cd %REMOTE_PATH%; lcd \"%LOCAL_PATH%\"; mirror -R -v --exclude-glob .git* --exclude-glob deploy-* --exclude-glob DEPLOY-README.md; bye"
  goto :done
)

REM Fallback: tenta WinSCP (FTP porta 21)
set "WINSCP="
where winscp.com >nul 2>&1 && set "WINSCP=winscp.com"
if "%WINSCP%"=="" if exist "%LOCALAPPDATA%\Programs\WinSCP\WinSCP.com" set "WINSCP=%LOCALAPPDATA%\Programs\WinSCP\WinSCP.com"
if "%WINSCP%"=="" if exist "C:\Program Files (x86)\WinSCP\WinSCP.com" set "WINSCP=C:\Program Files (x86)\WinSCP\WinSCP.com"
if "%WINSCP%"=="" if exist "C:\Program Files\WinSCP\WinSCP.com" set "WINSCP=C:\Program Files\WinSCP\WinSCP.com"
if not "%WINSCP%"=="" (
  echo Usando WinSCP...
  echo open ftp://%FTP_USER%:%FTP_PASS%@%FTP_HOST%/ -rawsettings ProxyMethod=0 > "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\index.html" echo put -delete "%LOCAL_PATH%\index.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\portfolio.html" echo put -delete "%LOCAL_PATH%\portfolio.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\ferramentas.html" echo put -delete "%LOCAL_PATH%\ferramentas.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\apps.html" echo put -delete "%LOCAL_PATH%\apps.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\app.html" echo put -delete "%LOCAL_PATH%\app.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\comandos-rede.html" echo put -delete "%LOCAL_PATH%\comandos-rede.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\comandos-win.html" echo put -delete "%LOCAL_PATH%\comandos-win.html" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\robots.txt" echo put -delete "%LOCAL_PATH%\robots.txt" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\sitemap.xml" echo put -delete "%LOCAL_PATH%\sitemap.xml" %REMOTE_PATH%/ >> "%TEMP%\deploy_winscp.txt"
  if exist "%LOCAL_PATH%\assets" echo synchronize remote "%LOCAL_PATH%\assets" %REMOTE_PATH%/assets -mirror >> "%TEMP%\deploy_winscp.txt"
  echo exit >> "%TEMP%\deploy_winscp.txt"
  "%WINSCP%" /script="%TEMP%\deploy_winscp.txt"
  del "%TEMP%\deploy_winscp.txt" 2>nul
  goto :done
)

REM Nenhuma ferramenta encontrada
echo.
echo [ERRO] Nenhuma ferramenta de deploy encontrada!
echo.
echo Instale uma das opcoes:
echo   1. LFTP:    choco install lftp
echo   2. WinSCP:  winget install WinSCP.WinSCP
echo.
echo Ou use o cPanel - Gerenciador de Arquivos para upload manual.
echo.
pause
exit /b 1

:done
echo.
echo ========================================
echo  Deploy concluido!
echo  Verifique: https://microfastinformatica.online/
echo ========================================
echo.
pause
