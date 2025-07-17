# Ejercicio 6.5: Procesamiento por Prioridad  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Usar `PriorityQueue` para procesar tareas de mayor a menor prioridad  
- **PARA:** Practicar colas de prioridad  

**Entrada:**  
```
Tareas: [("A",2),("B",5),("C",1),("D",4)]
```

**Salida:**  
```
[B, D, A, C]
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear PriorityQueue con Comparator descendente]  
  B --> C[offer todas las tareas]  
  C --> D[{while !pq.isEmpty()}]  
  D --> E[poll y añadir a lista resultado]  
  E --> D  
  D --> F[Imprimir lista resultado]  
  F --> G[Fin]
```

![Diagrama Ejercicio 6.5](diagram5.png)
```

```java
import java.util.*;
public class ColaPrioridad {
    public static void main(String[] args) {
        Queue<Map.Entry<String,Integer>> pq = new PriorityQueue<>(
            (a,b)->b.getValue()-a.getValue()
        );
        List<Map.Entry<String,Integer>> tareas = List.of(
            new AbstractMap.SimpleEntry<>("A",2),
            new AbstractMap.SimpleEntry<>("B",5),
            new AbstractMap.SimpleEntry<>("C",1),
            new AbstractMap.SimpleEntry<>("D",4)
        );
        pq.addAll(tareas);
        List<String> orden = new ArrayList<>();
        while(!pq.isEmpty()) orden.add(pq.poll().getKey());
        System.out.println(orden);
    }
}
```