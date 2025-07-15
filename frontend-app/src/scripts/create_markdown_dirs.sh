#!/usr/bin/env bash
set -euo pipefail

# Ruta base de markdown
BASE="src/markdown"

# Lista de carpetas a crear
DIRS=(
  "1. Estructuras de Datos Secuenciales"
  "2. Matrices"
  "3. Listas Enlazadas"
  "4. Interfaz de Lista"
  "5. Pilas"
  "6. Colas"
  "7. Dynamic Arrays"
  "8. Árboles"
  "9. AVL Trees"
  "10. Heaps"
  "11. HeapSort"
  "12. Disjoint Set"
  "13. Hashing"
)

# Crear cada carpeta (si ya existe, no hace nada)
for d in "${DIRS[@]}"; do
  mkdir -p "$BASE/$d"
done

echo "✅ Carpetas creadas en $BASE."
