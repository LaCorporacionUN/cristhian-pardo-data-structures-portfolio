# Ejercicio 12.5: Contar Componentes Conectados  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Dada una lista de uniones, contar cuántos conjuntos disjuntos existen  
- **PARA:** Analizar particiones de datos  

**Entrada:**  
```
n=5, uniones=[[0,1],[1,2],[3,4]]
```

**Salida:**  
```
2
```

```mermaid
flowchart TD
  A[Inicio] --> B[Procesar todas las uniones]  
  B --> C[Set roots = {}]  
  C --> D[Para i=0..n-1: roots.add(find(i))]  
  D --> E[return roots.size()]  
  E --> F[Fin]
```

![Diagrama Ejercicio 12.5](diagram5.png)
```

```java
import java.util.*;
public class CountComponents extends DisjointSet {
    public CountComponents(int n){ super(n); }
    public int count(){ Set<Integer> roots = new HashSet<>(); for(int i=0;i<parent.length;i++) roots.add(find(i)); return roots.size(); }
    public static void main(String[] args){ CountComponents cc=new CountComponents(5); cc.union(0,1); cc.union(1,2); cc.union(3,4); System.out.println(cc.count()); }
}
```