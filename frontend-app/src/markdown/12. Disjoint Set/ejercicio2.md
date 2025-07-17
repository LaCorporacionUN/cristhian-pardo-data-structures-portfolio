# Ejercicio 12.2: `union` por tamaño  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Implementar `union(x,y)` que una dos conjuntos y use tamaño para adjuntar menor a mayor  
- **PARA:** Practicar heurística de unión  

**Entrada:**  
```
Inicializar sets de tamaño [1,1,1,1,1]  
union(0,1), union(2,3)
```

**Salida (parent, size):**  
```
parent: [0,0,2,2,4]  
size:   [2,1,2,1,1]
```
```

```mermaid
flowchart TD
  A[Inicio: union(x,y)] --> B[px = find(x); py = find(y)]  
  B --> C{px == py?}  
  C -->|sí| D[Fin]  
  C -->|no| E{size[px] < size[py]?}  
  E -->|sí| F[parent[px]=py; size[py]+=size[px]]  
  E -->|no| G[parent[py]=px; size[px]+=size[py]]  
  F --> H[Fin]  
  G --> H
```

![Diagrama Ejercicio 12.2](diagram2.png)
```

```java
public class DisjointSetSize {
    private int[] parent, size;
    public DisjointSetSize(int n) { parent=new int[n]; size=new int[n]; for(int i=0;i<n;i++){parent[i]=i;size[i]=1;} }
    public int find(int x) { if(parent[x]!=x) parent[x]=find(parent[x]); return parent[x]; }
    public void union(int x,int y){
        int px=find(x), py=find(y);
        if(px==py) return;
        if(size[px]<size[py]){ parent[px]=py; size[py]+=size[px]; }
        else{ parent[py]=px; size[px]+=size[py]; }
    }
    public static void main(String[] args){ DisjointSetSize ds=new DisjointSetSize(5); ds.union(0,1); ds.union(2,3); System.out.println(Arrays.toString(ds.parent)); System.out.println(Arrays.toString(ds.size)); }
}
```