## Ejercicio 3: Encontrar Máximo y Mínimo

```markdown
# Ejercicio 3: Encontrar Máximo y Mínimo  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Determinar el valor máximo y mínimo en un arreglo  
- **PARA:** Identificar rangos de datos  

**Entrada:**  
```
6  
3 -1 7 0 5 2
```

**Salida:**  
```
-1 7
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer N y arreglo]  
  B --> C[Inicializar min/max con arr[0]]  
  C --> D[Recorrer arreglo y actualizar extremos]  
  D --> E[Mostrar min y max]  
  E --> F[Fin]
```

![Diagrama Ejercicio 3](diagram3.png)
```

```java
public class Extremos {
    public static int[] extremos(int[] arr) {
        int min = arr[0], max = arr[0];
        for (int v : arr) {
            if (v < min) min = v;
            if (v > max) max = v;
        }
        return new int[]{min, max};
    }
    public static void main(String[] args) {
        int[] arr = {3,-1,7,0,5,2};
        int[] ex = extremos(arr);
        System.out.println(ex[0] + " " + ex[1]);
    }
}
```