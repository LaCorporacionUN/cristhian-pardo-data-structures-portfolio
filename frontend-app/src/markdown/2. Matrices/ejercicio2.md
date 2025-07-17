# Ejercicio 2.2: Transponer una Matriz  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Obtener la matriz transpuesta  
- **PARA:** Practicar acceso y asignación bidimensional  

**Entrada:**  
```
2 3  
1 2 3  
4 5 6
```

**Salida:**  
```
1 4  
2 5  
3 6
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer F y C]  
  B --> C[Leer matriz m[F][C]]  
  C --> D[Crear transpuesta t[C][F]]  
  D --> E[Asignar t[j][i] = m[i][j]]  
  E --> F[Imprimir t]  
  F --> G[Fin]
```

![Diagrama](/cristhian-pardo-data-structures-portfolio/images/2.%20Matrices/diagram2.png)
```

```java
public class TransponerMatriz {
    public static int[][] transpose(int[][] m) {
        int F = m.length, C = m[0].length;
        int[][] t = new int[C][F];
        for (int i = 0; i < F; i++) {
            for (int j = 0; j < C; j++) {
                t[j][i] = m[i][j];
            }
        }
        return t;
    }
    public static void main(String[] args) {
        int[][] m = {{1,2,3},{4,5,6}};
        int[][] t = transpose(m);
        for (int[] row : t) {
            for (int v : row) System.out.print(v + " ");
            System.out.println();
        }
    }
}
```