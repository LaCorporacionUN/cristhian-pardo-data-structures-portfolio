# Ejercicio 5.4: Ordenar una Pila con Recursión  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Ordenar una pila de enteros con recursión  
- **PARA:** Practicar manipulación avanzada de pila  

**Entrada:**  
```
[3,1,4,2,5]
```

**Salida:**  
```
[1,2,3,4,5]
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[si pila vacía, retornar]  
  B --> C[n = pop()]  
  C --> D[ordenar(pila)]  
  D --> E[insertarOrdenado(pila, n)]  
  E --> F[Fin]
  subgraph insertarOrdenado
    G[si pila vacía o n > tope] --> H[push(n)]  
    G -->|no| I[x=pop()]  
    I --> J[insertarOrdenado(pila,n)]  
    J --> K[push(x)]
  end
```

![Diagrama Ejercicio 5.4](diagram4.png)
```

``java
import java.util.*;
public class OrdenarPilaRec {
    public static void ordenar(Stack<Integer> s) {
        if (s.isEmpty()) return;
        int n = s.pop();
        ordenar(s);
        insertarOrdenado(s, n);
    }
    private static void insertarOrdenado(Stack<Integer> s, int val) {
        if (s.isEmpty() || val > s.peek()) {
            s.push(val);
        } else {
            int x = s.pop();
            insertarOrdenado(s, val);
            s.push(x);
        }
    }
    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        Arrays.asList(3,1,4,2,5).forEach(s::push);
        ordenar(s);
        System.out.println(s);
    }
}