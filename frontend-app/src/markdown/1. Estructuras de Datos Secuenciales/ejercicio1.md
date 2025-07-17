# Ejercicio 1: Invertir un Arreglo  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Invertir el orden de los elementos de un arreglo  
- **PARA:** Entender la manipulación básica de estructuras secuenciales  

**Entrada:**  
```
5  
1 2 3 4 5
```

**Salida:**  
```
5 4 3 2 1
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer N y arreglo]  
  B --> C[Crear nuevo arreglo]  
  C --> D[Recorrer índices de 0 a N-1]  
  D --> E[Asignar res[i] = arr[N-1-i]]  
  E --> F[Mostrar resultado]  
  F --> G[Fin]
```

![Diagrama](/cristhian-pardo-data-structures-portfolio/images/1.%20Estructuras%20de%20Datos%20Secuenciales/diagram1.png)
```

```java
public class InvertirArreglo {
    public static int[] invertir(int[] arr) {
        int[] res = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            res[i] = arr[arr.length - 1 - i];
        }
        return res;
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int v : invertir(arr)) System.out.print(v + " ");
    }
}
```