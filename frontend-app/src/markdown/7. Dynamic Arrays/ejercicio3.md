# Ejercicio 7.3: Reemplazar Elemento en Índice  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Reemplazar valor en posición dada  
- **PARA:** Practicar `set(index, value)`  

**Entrada:**  
```
Lista: [2,4,6,8]  
Índice: 1, Valor: 10
```

**Salida:**  
```
[2, 10, 6, 8]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear ArrayList]  
  B --> C[lista.set(1,10)]  
  C --> D[Imprimir lista]  
  D --> E[Fin]
```

![Diagrama Ejercicio 7.3](diagram3.png)
```

```java
import java.util.*;
public class SetDynamic {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(2,4,6,8));
        list.set(1, 10);
        System.out.println(list);
    }
}
```