# Ejercicio 4.3: Eliminar Números Mayores a X  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Eliminar todos los elementos mayores a un umbral usando `Iterator`  
- **PARA:** Practicar `iterator.remove()`  

**Entrada:**  
```
Lista: [5, 10, 15, 20, 25]  
Umbral X = 15
```

**Salida:**  
```
[5, 10, 15]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear ArrayList]  
  B --> C[Obtener iterator]  
  C --> D{iterator.hasNext?}  
  D -->|sí| E[v = iterator.next()]  
  E --> F{v > 15?}  
  F -->|sí| G[iterator.remove()]  
  F -->|no| H[seguir]  
  H --> D  
  D -->|no| I[Imprimir lista]  
  I --> J[Fin]
```

![Diagrama Ejercicio 4.3](diagram3.png)
```

```java
import java.util.*;
public class EliminarMayorX {
    public static void main(String[] args) {
        List<Integer> lista = new ArrayList<>(Arrays.asList(5,10,15,20,25));
        Iterator<Integer> it = lista.iterator();
        while (it.hasNext()) {
            if (it.next() > 15) it.remove();
        }
        System.out.println(lista);
    }
}
```