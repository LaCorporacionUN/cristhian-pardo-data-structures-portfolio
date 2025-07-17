# Ejercicio 5.2: Validar Paréntesis Balanceados  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Comprobar si una cadena con paréntesis, llaves y corchetes está balanceada  
- **PARA:** Practicar uso de pila para validación de expresiones  

**Entrada:**  
```
"{[()]}"  
"{[(])}"  
"()[]{}"
```

**Salida:**  
```
true  
false  
true
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Recorrer cada carácter c]  
  B --> C{c es '(', '{', '['?}  
  C -->|sí| D[pila.push(c)]  
  C -->|no| E{c es ')', '}', ']'?}  
  E -->|sí| F{pila vacía o tope no coincide?}  
  F -->|sí| G[retornar false]  
  F -->|no| H[pila.pop()]  
  H --> B  
  E -->|no| B  
  B --> I[Fin de cadena]  
  I --> J{pila vacía?}  
  J -->|sí| K[true]  
  J -->|no| G
```

![Diagrama Ejercicio 5.2](diagram2.png)
```

```java
import java.util.*;
public class ParentesisBalanceados {
    public static boolean validar(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character,Character> pares = Map.of(')','(', '}', '{', ']','[');
        for (char c: s.toCharArray()) {
            if (pares.containsValue(c)) stack.push(c);
            else if (pares.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pares.get(c)) return false;
            }
        }
        return stack.isEmpty();
    }
    public static void main(String[] args) {
        System.out.println(validar("{[()]}/")); // corrige cadena si es necesario
        System.out.println(validar("{[(])}"));
        System.out.println(validar("()[]{}"));
    }
}
```