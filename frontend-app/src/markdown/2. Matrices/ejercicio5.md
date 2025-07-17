# Ejercicio 2.5: Punto de Silla  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Encontrar un elemento que sea mínimo en su fila y máximo en su columna  
- **PARA:** Practicar búsquedas especiales en matrices  

**Entrada:**  
```
3 3  
1 3 2  
4 5 6  
7 8 9
```

**Salida:**  
```
5
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer F y C]  
  B --> C[Leer matriz]  
  C --> D[Para cada fila i: encontrar min_index j]  
  D --> E[Verificar si m[i][j] es >= todos en su columna]  
  E --> F[Si sí, imprimir valor y terminar]  
  F --> G[Si ninguno, imprimir "No existe"]  
  G --> H[Fin]
```

![Diagrama](/cristhian-pardo-data-structures-portfolio/images/2.%20Matrices/diagram5.png)
```

```java
public class PuntoSilla {
    public static Integer puntoSilla(int[][] m) {
        int F = m.length, C = m[0].length;
        for (int i = 0; i < F; i++) {
            int minJ = 0;
            for (int j = 1; j < C; j++) if (m[i][j] < m[i][minJ]) minJ = j;
            boolean ok = true;
            for (int k = 0; k < F; k++) if (m[k][minJ] > m[i][minJ]) ok = false;
            if (ok) return m[i][minJ];
        }
        return null;
    }
    public static void main(String[] args) {
        int[][] m = {{1,3,2},{4,5,6},{7,8,9}};
        System.out.println(puntoSilla(m));
    }
}
```