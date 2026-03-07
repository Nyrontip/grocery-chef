#!/bin/bash
# =============================================================
# deploy-render.sh — Grocery Chef
# Script de despliegue en Render: PostgreSQL + Backend Node.js
#
# MODO DE USO:
#
#   Primera vez (instalación + login + verificación):
#     chmod +x deploy-render.sh
#     ./deploy-render.sh
#
#   Redeploy manual tras un git push:
#     ./deploy-render.sh --redeploy <SERVICE_ID>
#
#   Ver servicios y obtener IDs:
#     ./deploy-render.sh --services
#
#   Conectarse a la base de datos:
#     ./deploy-render.sh --db <DATABASE_ID>
# =============================================================

set -e

# ── Colores para la salida ────────────────────────────────
BOLD="\033[1m"
RESET="\033[0m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"

info()    { echo -e "${BOLD}→ $1${RESET}"; }
success() { echo -e "${GREEN}✓ $1${RESET}"; }
warning() { echo -e "${YELLOW}⚠ $1${RESET}"; }
error()   { echo -e "${RED}✗ $1${RESET}"; exit 1; }
divider() { echo -e "\n${BOLD}──────────────────────────────────────────${RESET}"; }

# ── Verificar que el CLI está instalado ──────────────────
check_cli() {
    if ! command -v render &> /dev/null; then
        error "Render CLI no encontrado. Ejecutá primero: ./deploy-render.sh --install"
    fi
}

# ── Modos de ejecución ────────────────────────────────────

# Instalar CLI
if [ "$1" == "--install" ]; then
    divider
    info "Instalando Render CLI..."
    curl -fsSL https://raw.githubusercontent.com/render-oss/cli/refs/heads/main/bin/install.sh | sh
    export PATH="$HOME/.local/bin:$PATH"
    success "Render CLI instalado: $(render --version)"
    exit 0
fi

# Ver servicios del workspace
if [ "$1" == "--services" ]; then
    check_cli
    divider
    info "Servicios en el workspace activo:"
    render services -o text
    exit 0
fi

# Redeploy manual
if [ "$1" == "--redeploy" ]; then
    check_cli
    if [ -z "$2" ]; then
        echo ""
        echo "  Uso: ./deploy-render.sh --redeploy <SERVICE_ID>"
        echo ""
        echo "  Para obtener el SERVICE_ID del backend, ejecutar:"
        echo "  ./deploy-render.sh --services"
        echo ""
        error "SERVICE_ID no proporcionado."
    fi
    divider
    info "Ejecutando redeploy para el servicio: $2"
    render deploys create "$2" --wait
    success "Redeploy completado exitosamente."
    exit 0
fi

# Ver historial de deploys
if [ "$1" == "--history" ]; then
    check_cli
    if [ -z "$2" ]; then
        echo "  Uso: ./deploy-render.sh --history <SERVICE_ID>"
        error "SERVICE_ID no proporcionado."
    fi
    divider
    info "Historial de deploys para el servicio: $2"
    render deploys list "$2"
    exit 0
fi

# Conectarse a la base de datos
if [ "$1" == "--db" ]; then
    check_cli
    if [ -z "$2" ]; then
        echo "  Uso: ./deploy-render.sh --db <DATABASE_ID>"
        echo ""
        echo "  Para obtener el DATABASE_ID, ejecutar:"
        echo "  ./deploy-render.sh --services"
        echo ""
        error "DATABASE_ID no proporcionado."
    fi
    divider
    info "Abriendo sesión psql para la base de datos: $2"
    render psql "$2"
    exit 0
fi

# ── FLUJO PRINCIPAL (primera vez) ────────────────────────

echo ""
echo -e "${BOLD}============================================${RESET}"
echo -e "${BOLD}  Despliegue Grocery Chef en Render         ${RESET}"
echo -e "${BOLD}============================================${RESET}"
echo ""

# ── PASO 1: Instalar CLI ─────────────────────────────────
divider
echo -e "${BOLD}PASO 1 — Instalación del Render CLI${RESET}"
echo ""

if command -v render &> /dev/null; then
    success "Render CLI ya se encuentra instalado: $(render --version)"
else
    info "Descargando e instalando el Render CLI..."
    curl -fsSL https://raw.githubusercontent.com/render-oss/cli/refs/heads/main/bin/install.sh | sh
    export PATH="$HOME/.local/bin:$PATH"
    success "Render CLI instalado: $(render --version)"
fi

# ── PASO 2: Autenticación ────────────────────────────────
divider
echo -e "${BOLD}PASO 2 — Autenticación en Render${RESET}"
echo ""
info "Iniciando sesión... Se abrirá el navegador automáticamente."
info "En la página que aparece, hacer click en 'Generate token'."
echo ""
render login

echo ""
info "Listando workspaces disponibles..."
render workspaces

# ── PASO 3: Verificar render.yaml ───────────────────────
divider
echo -e "${BOLD}PASO 3 — Verificación de archivos necesarios${RESET}"
echo ""

if [ ! -f "./render.yaml" ]; then
    error "No se encontró render.yaml en el directorio actual. Ejecutar este script desde la raíz del repositorio."
fi
success "render.yaml encontrado."

info "Validando la estructura del render.yaml..."
render blueprints validate ./render.yaml && success "render.yaml válido." || error "El render.yaml contiene errores. Revisarlo antes de continuar."

# ── PASO 4: Instrucciones Blueprint ──────────────────────
divider
echo -e "${BOLD}PASO 4 — Creación del Blueprint en el dashboard${RESET}"
echo ""
echo "  Este paso requiere acceso al dashboard de Render."
echo "  Seguir el procedimiento a continuación:"
echo ""
echo "  1. Ingresar a: https://dashboard.render.com"
echo "  2. Hacer click en 'New' → 'Blueprint'"
echo "  3. Seleccionar 'Public Git Repository'"
echo "  4. Ingresar la URL del repositorio de GitHub"
echo "  5. En Blueprint Name ingresar: grocery-chef"
echo "  6. Hacer click en 'Apply'"
echo ""
echo "  Tiempos estimados:"
echo "    Base de datos PostgreSQL  →  ~2 minutos"
echo "    Backend (build Docker)    →  ~5 minutos"
echo ""
read -p "  ¿Se completó el Blueprint en el dashboard? (s para continuar): " DONE
echo ""

if [[ "$DONE" != "s" && "$DONE" != "S" ]]; then
    warning "Completar el Blueprint en el dashboard y volver a ejecutar el script."
    exit 0
fi

# ── PASO 5: Verificar servicios ──────────────────────────
divider
echo -e "${BOLD}PASO 5 — Verificación del despliegue${RESET}"
echo ""
info "Consultando servicios activos en el workspace..."
render services -o text

echo ""
info "Para verificar que el backend responde, ejecutar:"
echo ""
echo "  curl https://recetario-backend.onrender.com/api/health"
echo ""

# ── Resumen final ─────────────────────────────────────────
divider
echo -e "${BOLD}  Despliegue finalizado${RESET}"
echo ""
echo "  Comandos disponibles para operaciones posteriores:"
echo ""
echo "  Ver servicios e IDs:"
echo "    ./deploy-render.sh --services"
echo ""
echo "  Redeploy tras un git push:"
echo "    ./deploy-render.sh --redeploy <SERVICE_ID>"
echo ""
echo "  Ver historial de deploys:"
echo "    ./deploy-render.sh --history <SERVICE_ID>"
echo ""
echo "  Conectarse a la base de datos:"
echo "    ./deploy-render.sh --db <DATABASE_ID>"
echo ""
