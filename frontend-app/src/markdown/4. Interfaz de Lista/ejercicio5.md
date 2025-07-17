# Ejercicio 4.5: Filtrar Números Pares  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Filtrar elementos impares usando `Stream`  
- **PARA:** Practicar programación funcional  

**Entrada:**  
```
[1,2,3,4,5,6]
```

**Salida:**  
```
[2,4,6]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear List<Integer>]  
  B --> C[lista.stream()]  
  C --> D[filter(v->v%2==0)]  
  D --> E[collect to List]  
  E --> F[Imprimir resultado]  
  F --> G[Fin]
```

![Diagrama Ejercicio 4.5](diagram5.png)
```

```java
import java.util.*;
import java.util.stream.*;
public class FiltrarPares {
    public static void main(String[] args) {
        List<Integer> lista = Arrays.asList(1,2,3,4,5,6);
        List<Integer> pares = lista.stream()
            .filter(v->v%2==0)
            .collect(Collectors.toList());
        System.out.println(pares);
    }
}
```