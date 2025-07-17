# Ejercicio 5.1: Invertir una Pila  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Invertir el contenido de una pila usando otra pila auxiliar  
- **PARA:** Practicar operaciones de push/pop  

**Entrada:**  
```
Pila original (tope a base): [1, 2, 3, 4, 5]
```

**Salida:**  
```
Pila invertida (tope a base): [5, 4, 3, 2, 1]
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Cargar pila original]  
  B --> C[Crear pila auxiliar vacía]  
  C --> D{original no está vacía?}  
  D -->|sí| E[aux.push(original.pop())]  
  E --> D  
  D -->|no| F[aux contiene invertida]  
  F --> G[Imprimir aux]  
  G --> H[Fin]
```

![Diagrama Ejercicio 5.1](diagram1.png)
```

```java
import java.util.*;
public class InvertirPila {
    public static Stack<Integer> invertir(Stack<Integer> s) {
        Stack<Integer> aux = new Stack<>();
        while (!s.isEmpty()) {
            aux.push(s.pop());
        }
        return aux;
    }
    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        for (int i = 1; i <= 5; i++) s.push(i);
        Stack<Integer> inv = invertir(s);
        System.out.println(inv);
    }
}
```