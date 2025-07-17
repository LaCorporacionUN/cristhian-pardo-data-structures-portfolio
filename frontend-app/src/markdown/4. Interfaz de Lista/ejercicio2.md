# Ejercicio 4.2: Insertar Elemento en Índice  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Insertar un valor en posición dada  
- **PARA:** Practicar métodos de `List` como `add(index, element)`  

**Entrada:**  
```
Lista inicial: [1, 2, 4, 5]  
Insertar (índice=2, valor=3)
```

**Salida:**  
```
[1, 2, 3, 4, 5]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear ArrayList con valores iniciales]  
  B --> C[Llamar lista.add(2,3)]  
  C --> D[Imprimir lista]  
  D --> E[Fin]
```

![Diagrama Ejercicio 4.2](diagram2.png)
```

```java
import java.util.*;
public class InsertarEnIndice {
    public static void main(String[] args) {
        List<Integer> lista = new ArrayList<>(Arrays.asList(1,2,4,5));
        lista.add(2, 3);
        System.out.println(lista);
    }
}
```