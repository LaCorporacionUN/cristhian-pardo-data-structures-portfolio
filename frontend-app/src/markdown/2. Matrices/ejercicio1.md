# Ejercicio 2.1: Suma de Elementos de una Matriz  
**Descripción:**  
- **COMO:** Analista de datos  
- **QUIERO:** Calcular la suma de todos los elementos en una matriz  
- **PARA:** Practicar recorridos bidimensionales  

**Entrada:**  
```
2 3  
1 2 3  
4 5 6
```

**Salida:**  
```
21
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer filas F y columnas C]  
  B --> C[Leer matriz F×C]  
  C --> D[Inicializar suma = 0]  
  D --> E[Recorrer i=0..F-1, j=0..C-1 y acumular]  
  E --> F[Mostrar suma]  
  F --> G[Fin]
```

![Diagrama](/cristhian-pardo-data-structures-portfolio/images/2.%20Matrices/diagram1.png)
```

```java
public class SumaMatriz {
    public static int sumar(int[][] m) {
        int s = 0;
        for (int[] fila : m) {
            for (int v : fila) s += v;
        }
        return s;
    }
    public static void main(String[] args) {
        int[][] m = {{1,2,3},{4,5,6}};
        System.out.println(sumar(m));
    }
}
```