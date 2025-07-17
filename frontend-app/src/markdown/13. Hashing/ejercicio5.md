# Ejercicio 13.5: Longest Subarray with Sum K  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Encontrar la longitud de la subarray con suma = k  
- **PARA:** Practicar hashmap de prefix sum a índice  

**Entrada:**  
```
[1,-1,5,-2,3], k=3
```

**Salida:**  
```
4  (subarray [1,-1,5,-2])
```

```mermaid
flowchart TD
  A[Inicio] --> B[sum=0; map={0:-1}; maxLen=0]  
  B --> C[Para i en indices]  
  C --> D[sum+=nums[i]]  
  D --> E{if sum not in map: map.put(sum,i)}  
  E --> F{if map.containsKey(sum-k)}  
  F -->|sí| G[maxLen = max(maxLen, i-map.get(sum-k))]  
  G --> H[Continuar]  
  H --> C
```

![Diagrama Ejercicio 13.5](diagram5.png)
```

```java
import java.util.*;
public class LongestSubarraySumK {
    public static int longest(int[] nums, int k) {
        Map<Integer,Integer> map = new HashMap<>();
        int sum = 0, max = 0;
        map.put(0, -1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            map.putIfAbsent(sum, i);
            if (map.containsKey(sum - k)) {
                max = Math.max(max, i - map.get(sum - k));
            }
        }
        return max;
    }
    public static void main(String[] args) {
        System.out.println(longest(new int[]{1,-1,5,-2,3}, 3));
    }
}
```