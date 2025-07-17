# Ejercicio 6.1: Invertir una Cola  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Invertir el orden de los elementos en una cola usando pila auxiliar  
- **PARA:** Practicar operaciones de encolado y desencolado  

**Entrada:**  
```
Cola original (frente a final): [1, 2, 3, 4, 5]
```

**Salida:**  
```
Cola invertida (frente a final): [5, 4, 3, 2, 1]
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear cola original]  
  B --> C[Crear pila vacía]  
  C --> D{cola no vacía?}  
  D -->|sí| E[pila.push(cola.poll())]  
  E --> D  
  D -->|no| F{pila no vacía?}  
  F -->|sí| G[cola.offer(pila.pop())]  
  G --> F  
  F -->|no| H[Imprimir cola]  
  H --> I[Fin]
```

![Diagrama Ejercicio 6.1](diagram1.png)
```

```java
import java.util.*;
public class InvertirCola {
    public static Queue<Integer> invertir(Queue<Integer> q) {
        Deque<Integer> pila = new ArrayDeque<>();
        while (!q.isEmpty()) pila.push(q.poll());
        while (!pila.isEmpty()) q.offer(pila.pop());
        return q;
    }
    public static void main(String[] args) {
        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 1; i <= 5; i++) q.offer(i);
        System.out.println(invertir(q));
    }
}
```