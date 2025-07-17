#!/usr/bin/env bash
# Generar diagramas PNG a partir de archivos Mermaid (.mmd)
for i in {1..5}; do
  mmdc -i diagram${i}.mmd -o diagram${i}.png \
    --backgroundColor transparent
  echo "Generado diagram${i}.png"
done