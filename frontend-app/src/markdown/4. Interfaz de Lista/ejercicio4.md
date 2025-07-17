# Ejercicio 4.4: Ordenar Lista de Cadenas  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Ordenar una `List<String>`  
- **PARA:** Practicar `Collections.sort()`  

**Entrada:**  
```
["banana", "apple", "cherry"]
```

**Salida:**  
```
["apple", "banana", "cherry"]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear lista de Strings]  
  B --> C[Collections.sort(lista)]  
  C --> D[Imprimir lista]  
  D --> E[Fin]
```

![Diagrama Ejercicio 4.4](diagram4.png)
```

```java
import java.util.*;
public class OrdenarStrings {
    public static void main(String[] args) {
        List<String> lista = new ArrayList<>(Arrays.asList("banana","apple","cherry"));
        Collections.sort(lista);
        System.out.println(lista);
    }
}
```