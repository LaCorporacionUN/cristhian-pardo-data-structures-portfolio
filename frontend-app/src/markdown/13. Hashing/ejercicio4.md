# Ejercicio 13.4: Zero Sum Subarray  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Determinar si existe subarray con suma cero  
- **PARA:** Practicar uso de `HashSet` para prefix sums  

**Entrada:**  
```
[4,2,-3,1,6]
```

**Salida:**  
```
true  (subarray: [2,-3,1])
```

```mermaid
flowchart TD
  A[Inicio] --> B[sum=0; set={0}]  
  B --> C[Para cada v en nums]  
  C --> D[sum+=v]  
  D --> E{sum en set?}  
  E -->|sí| F[retornar true]  
  E -->|no| G[set.add(sum)]  
  G --> H[Continuar]  
  H --> C
```

![Diagrama Ejercicio 13.4](diagram4.png)
```

```java
import java.util.*;
public class ZeroSumSubarray {
    public static boolean exists(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int sum = 0;
        set.add(0);
        for (int v : nums) {
            sum += v;
            if (set.contains(sum)) return true;
            set.add(sum);
        }
        return false;
    }
    public static void main(String[] args) {
        System.out.println(exists(new int[]{4,2,-3,1,6}));
    }
}
```