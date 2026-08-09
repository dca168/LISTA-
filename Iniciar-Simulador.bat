@echo off
REM ============================================================
REM Iniciar-Simulador.bat
REM Lanzador de doble clic para el Simulador de Ascenso.
REM Evita que el usuario final tenga que escribir comandos.
REM
REM Que hace:
REM 1. Abre una ventana de servidor local Python en segundo plano.
REM 2. Espera un instante y abre el navegador automaticamente en
REM    http://localhost:8000
REM
REM Nota: la ventana negra que aparece brevemente es el servidor;
REM debes dejarla abierta mientras uses la app. Minimizala si quieres,
REM pero no la cierres hasta terminar.
REM ============================================================

cd /d "%~dp0"

start "Servidor local - Simulador de Ascenso (no cerrar)" cmd /k python -m http.server 8000

timeout /t 2 /nobreak >nul

start http://localhost:8000

exit
