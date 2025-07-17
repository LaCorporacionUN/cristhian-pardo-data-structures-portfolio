# Ejercicio 2.3: Multiplicación de Matrices  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Multiplicar dos matrices compatibles  
- **PARA:** Practicar producto matricial  

**Entrada:**  
```
2 3 3 2  
1 2 3  
4 5 6  
7 8  
9 10  
11 12
```

**Salida:**  
```
58 64  
139 154
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer dimensiones A(F×K) y B(K×C)]  
  B --> C[Leer matrices A y B]  
  C --> D[Crear resultado R[F][C] inicializada en 0]  
  D --> E[Triple bucle i,j,k: R[i][j]+=A[i][k]*B[k][j]]  
  E --> F[Imprimir R]  
  F --> G[Fin]
```
![Diagrama](/cristhian-pardo-data-structures-portfolio/images/2.%20Matrices/diagram3.png)
```

```java
public class MultiplicarMatrices {
    public static int[][] multiply(int[][] A, int[][] B) {
        int F = A.length, K = A[0].length, C = B[0].length;
        int[][] R = new int[F][C];
        for (int i = 0; i < F; i++) {
            for (int j = 0; j < C; j++) {
                for (int k = 0; k < K; k++) {
                    R[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return R;
    }
    public static void main(String[] args) {
        int[][] A = {{1,2,3},{4,5,6}};
        int[][] B = {{7,8},{9,10},{11,12}};
        int[][] R = multiply(A, B);
        for (int[] row : R) {
            for (int v : row) System.out.print(v + " ");
            System.out.println();
        }
    }
}
```