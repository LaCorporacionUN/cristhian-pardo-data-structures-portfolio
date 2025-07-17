# Ejercicio 5.5: Min Stack (O(1))  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Implementar una pila que retorne el mínimo en O(1)  
- **PARA:** Practicar diseño de estructuras auxiliares  

**Entrada:**  
```
push(3), push(5), getMin(), push(2), push(1), getMin(), pop(), getMin()
```

**Salida:**  
```
3  1  2
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[push(val): push(val en s); if val<=min.peek(): min.push(val)]  
  B --> C[pop(): v=s.pop(); if v==min.peek(): min.pop()]  
  C --> D[getMin(): return min.peek()]  
  D --> E[Fin]
```

![Diagrama Ejercicio 5.5](diagram5.png)
```

```java
import java.util.*;
public class MinStack {
    private Stack<Integer> s = new Stack<>();
    private Stack<Integer> min = new Stack<>();
    public void push(int x) {
        s.push(x);
        if (min.isEmpty() || x <= min.peek()) min.push(x);
    }
    public void pop() {
        int v = s.pop();
        if (v == min.peek()) min.pop();
    }
    public int top() { return s.peek(); }
    public int getMin() { return min.peek(); }
    public static void main(String[] args) {
        MinStack ms = new MinStack();
        ms.push(3); ms.push(5);
        System.out.println(ms.getMin());
        ms.push(2); ms.push(1);
        System.out.println(ms.getMin());
        ms.pop();
        System.out.println(ms.getMin());
    }
}
```