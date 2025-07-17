# Ejercicio 6.3: Calcular Ancho de Banda Máximo  
**Descripción:**  
- **COMO:** Analista de sistemas  
- **QUIERO:** Dada una cola de tamaños de paquetes, medir la suma máxima de K elementos consecutivos  
- **PARA:** Practicar deslizamiento de ventana con cola  

**Entrada:**  
```
Cola: [1,3,2,5,4,6]  
K=3
```

**Salida:**  
```
13  (5+4+6)
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer K y datos en array]  
  B --> C[Inicializar suma de los primeros K]  
  C --> D[encolar primeros K en deque]  
  D --> E[Para i=K..n-1: suma+=arr[i]-deque.poll(); deque.offer(arr[i]); max=máximo(max,suma)]  
  E --> F[Imprimir max]  
  F --> G[Fin]
```

![Diagrama Ejercicio 6.3](diagram3.png)
```

```java
import java.util.*;
public class AnchoBandaCola {
    public static int maxWindowSum(int[] arr, int k) {
        Deque<Integer> deque = new ArrayDeque<>();
        int sum = 0, max = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            deque.offer(arr[i]);
            if (deque.size() > k) sum -= deque.poll();
            if (i >= k-1) max = Math.max(max, sum);
        }
        return max;
    }
    public static void main(String[] args) {
        int[] datos = {1,3,2,5,4,6};
        System.out.println(maxWindowSum(datos, 3));
    }
}
```