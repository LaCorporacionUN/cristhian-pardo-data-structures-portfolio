# Ejercicio 7.2: Remover Elemento en Índice  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Eliminar un elemento en posición Dada  
- **PARA:** Practicar `remove(index)`  

**Entrada:**  
```
Lista: [5,10,15,20,25]  
Índice: 2
```

**Salida:**  
```
[5, 10, 20, 25]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear ArrayList con valores]  
  B --> C[lista.remove(2)]  
  C --> D[Imprimir lista]  
  D --> E[Fin]
```

![Diagrama Ejercicio 7.2](diagram2.png)
```

```java
import java.util.*;
public class RemoveDynamic {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(List.of(5,10,15,20,25));
        list.remove(2);
        System.out.println(list);
    }
}
```