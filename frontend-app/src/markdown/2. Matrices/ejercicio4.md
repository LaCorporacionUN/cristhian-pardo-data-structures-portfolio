# Ejercicio 2.4: Suma de la Diagonal Principal  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Calcular la suma de los elementos de la diagonal principal  
- **PARA:** Practicar índices iguales en filas y columnas  

**Entrada:**  
```
3  
1 2 3  
4 5 6  
7 8 9
```

**Salida:**  
```
15
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer N]  
  B --> C[Leer matriz N×N]  
  C --> D[Inicializar suma = 0]  
  D --> E[Recorrer i=0..N-1: suma += m[i][i]]  
  E --> F[Mostrar suma]  
  F --> G[Fin]
```

![Diagrama Ejercicio 2.4](diagram4.png)
```

```java
public class DiagonalPrincipal {
    public static int sumaDiagonal(int[][] m) {
        int s = 0;
        for (int i = 0; i < m.length; i++) s += m[i][i];
        return s;
    }
    public static void main(String[] args) {
        int[][] m = {{1,2,3},{4,5,6},{7,8,9}};
        System.out.println(sumaDiagonal(m));
    }
}
```