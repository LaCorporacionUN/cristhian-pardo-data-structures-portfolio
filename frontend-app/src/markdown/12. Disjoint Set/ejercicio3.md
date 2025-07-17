# Ejercicio 12.3: `connected(x,y)`  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Implementar `connected(x,y)` que retorne true si find(x)==find(y)  
- **PARA:** Practicar consulta de relación  

**Entrada:**  
```
union(0,1), union(1,2)  
connected(0,2), connected(0,3)
```

**Salida:**  
```
true  
false
```
```

```mermaid
flowchart TD
  A[Inicio: connected(x,y)] --> B[return find(x) == find(y)]
```

![Diagrama Ejercicio 12.3](diagram3.png)
```

```java
public class DisjointSetConnected extends DisjointSetSize {
    public DisjointSetConnected(int n){ super(n);}    
    public boolean connected(int x,int y){ return find(x)==find(y);}    
    public static void main(String[] args){ DisjointSetConnected ds=new DisjointSetConnected(5); ds.union(0,1); ds.union(1,2); System.out.println(ds.connected(0,2)); System.out.println(ds.connected(0,3)); }
}
```

