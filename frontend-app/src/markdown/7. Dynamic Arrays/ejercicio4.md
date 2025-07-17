# Ejercicio 7.4: Índice de un Elemento  
**Descripción:**  
- **COMO:** Analista  
- **QUIERO:** Obtener el primer índice de un valor dado  
- **PARA:** Practicar `indexOf()`  

**Entrada:**  
```
Lista: [7,3,5,3,9]  
Valor: 3
```

**Salida:**  
```
1
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear ArrayList]  
  B --> C[int idx = lista.indexOf(3)]  
  C --> D[Imprimir idx]  
  D --> E[Fin]
```

![Diagrama Ejercicio 7.4](diagram4.png)
```

```java
import java.util.*;
public class IndexDynamic {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(7,3,5,3,9));
        System.out.println(list.indexOf(3));
    }
}
```