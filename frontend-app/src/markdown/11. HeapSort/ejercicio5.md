# Ejercicio 11.5: Benchmark de HeapSort  
**Descripción:**  
- **COMO:** Ingeniero de rendimiento  
- **QUIERO:** Medir tiempo en ms de ordenar con heapSort  
- **PARA:** Evaluar eficiencia en datos grandes  

**Entrada:**  
```
Array de 100000 enteros aleatorios
```

**Salida:**  
```
Tiempo: 45ms
```

```mermaid
flowchart TD
  A[Inicio] --> B[Generar array aleatorio N=100000]  
  B --> C[start = System.nanoTime()]  
  C --> D[heapSort(array)]  
  D --> E[fin = System.nanoTime()]  
  E --> F[Imprimir (fin-start)/1e6 + "ms"]  
  F --> G[Fin]
```

![Diagrama Ejercicio 11.5](diagram5.png)
```

```java
import java.util.*;
public class HeapSortBenchmark {
    public static void main(String[] args) {
        Random r = new Random();
        int N = 100000;
        int[] arr = r.ints(N, 0, N).toArray();
        long start = System.nanoTime();
        HeapSortBasic.heapSort(arr);
        long end = System.nanoTime();
        System.out.printf("Tiempo: %.2fms", (end-start)/1e6);
    }
}
```