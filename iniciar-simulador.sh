#!/bin/bash
# ============================================================
# iniciar-simulador.sh
# Lanzador para Mac/Linux del Simulador de Ascenso.
# Evita que el usuario final tenga que escribir comandos manualmente.
# ============================================================

cd "$(dirname "$0")"

( python3 -m http.server 8000 & )

sleep 2

if which open >/dev/null; then
  open http://localhost:8000       # macOS
elif which xdg-open >/dev/null; then
  xdg-open http://localhost:8000   # Linux
fi

echo "Servidor iniciado en segundo plano. Para detenerlo, busca el proceso 'http.server' y termínalo."
