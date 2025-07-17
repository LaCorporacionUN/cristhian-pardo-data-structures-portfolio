# Ejercicio 5.3: Evaluar Expresión Postfija  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Evaluar una expresión en notación postfija (RPN)  
- **PARA:** Practicar pila para cálculo de expresiones  

**Entrada:**  
```
["2", "3", "1", "*", "+", "9", "-"]
```

**Salida:**  
```
-4
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Recorrer tokens]  
  B --> C{token es número?}  
  C -->|sí| D[pila.push(num)]  
  C -->|no| E[b = pop(); a = pop()]  
  E --> F[resultado = aplicar operador]  
  F --> G[pila.push(resultado)]  
  G --> B  
  B --> H[Fin tokens]  
  H --> I[retornar pila.pop()]  
```

![Diagrama Ejercicio 5.3](diagram3.png)
```

```java
import java.util.*;
public class EvaluarPostfija {
    public static int evaluar(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();
        for (String t : tokens) {
            switch (t) {
                case "+": stack.push(stack.pop() + stack.pop()); break;
                case "-": { int b=stack.pop(), a=stack.pop(); stack.push(a-b); } break;
                case "*": stack.push(stack.pop() * stack.pop()); break;
                case "/": { int b=stack.pop(), a=stack.pop(); stack.push(a/b); } break;
                default: stack.push(Integer.parseInt(t));
            }
        }
        return stack.pop();
    }
    public static void main(String[] args) {
        String[] expr = {"2","3","1","*","+","9","-"};
        System.out.println(evaluar(expr));
    }
}
```