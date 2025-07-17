# Ejercicio 13.3: Two Sum  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Encontrar índices de dos números que suman objetivo  
- **PARA:** Practicar búsqueda inversa en hashmap  

**Entrada:**  
```
[2,7,11,15], target=9
```

**Salida:**  
```
[0,1]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Crear map vacío]  
  B --> C[Recorrer indices i]  
  C --> D[complement = target - nums[i]]  
  D --> E{map.containsKey(complement)?}  
  E -->|sí| F[retornar [map.get(complement), i]]  
  E -->|no| G[map.put(nums[i], i)]  
  G --> H[Continuar]  
  H --> C
```

![Diagrama Ejercicio 13.3](diagram3.png)
```

```java
import java.util.*;
public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];
            if (map.containsKey(comp)) return new int[]{map.get(comp), i};
            map.put(nums[i], i);
        }
        return new int[0];
    }
    public static void main(String[] args) {
        int[] res = twoSum(new int[]{2,7,11,15}, 9);
        System.out.println(Arrays.toString(res));
    }
}
```