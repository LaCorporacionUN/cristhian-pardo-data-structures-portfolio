# Ejercicio 13.2: Agrupar Anagramas  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Agrupar palabras que son anagramas  
- **PARA:** Practicar clave transformada en hashmap  

**Entrada:**  
```
["eat","tea","tan","ate","nat","bat"]
```

**Salida (grupos):**  
```
[[eat, tea, ate], [tan, nat], [bat]]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Para cada palabra w]  
  B --> C[key = sortChars(w)]  
  C --> D[map.computeIfAbsent(key, k->new ArrayList<>()).add(w)]  
  D --> E[Imprimir map.values()]  
  E --> F[Fin]
```

![Diagrama Ejercicio 13.2](diagram2.png)
```

```java
import java.util.*;
public class GroupAnagrams {
    public static void main(String[] args) {
        String[] arr = {"eat","tea","tan","ate","nat","bat"};
        Map<String,List<String>> map = new HashMap<>();
        for (String w : arr) {
            char[] c = w.toCharArray(); Arrays.sort(c);
            String key = new String(c);
            map.computeIfAbsent(key, k->new ArrayList<>()).add(w);
        }
        System.out.println(new ArrayList<>(map.values()));
    }
}
```