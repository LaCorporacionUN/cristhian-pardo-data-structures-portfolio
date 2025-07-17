# Ejercicio 7.1: Añadir Elementos a ArrayList  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Añadir N elementos a una lista dinámica  
- **PARA:** Practicar `add()` en `ArrayList`  

**Entrada:**  
```
5  
3 8 1 6 9
```

**Salida:**  
```
[3, 8, 1, 6, 9]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer N]  
  B --> C[Leer N números]  
  C --> D[Para cada número, lista.add(num)]  
  D --> E[Imprimir lista]  
  E --> F[Fin]
```

![Diagrama Ejercicio 7.1](diagram1.png)
```

```java
import java.util.*;
public class AddDynamic {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) list.add(sc.nextInt());
        System.out.println(list);
    }
}
```