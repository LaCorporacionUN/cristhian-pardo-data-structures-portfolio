# Ejercicio 13.1: Contar Frecuencia de Palabras  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Contar cuántas veces aparece cada palabra en un texto  
- **PARA:** Practicar uso de `HashMap<String,Integer>`  

**Entrada:**  
```
"apple banana apple orange banana apple"
```

**Salida:**  
```
apple: 3  
banana: 2  
orange: 1
```

```mermaid
flowchart TD
  A[Inicio] --> B[Dividir texto en palabras]  
  B --> C[Para cada palabra w]  
  C --> D[map.put(w, map.getOrDefault(w,0)+1)]  
  D --> E[Imprimir claves y valores]  
  E --> F[Fin]
```

![Diagrama Ejercicio 13.1](diagram1.png)
```

```java
import java.util.*;
public class WordFrequency {
    public static void main(String[] args) {
        String[] words = "apple banana apple orange banana apple".split(" ");
        Map<String,Integer> freq = new HashMap<>();
        for (String w : words) freq.put(w, freq.getOrDefault(w,0) + 1);
        freq.forEach((k,v) -> System.out.println(k + ": " + v));
    }
}
```