# Ejercicio 12.4: `union` por rango (rank)  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Implementar `union(x,y)` que use `rank[]` en lugar de tamaño  
- **PARA:** Practicar heurística alternativa  

**Entrada:**  
```
Inicializar rank=[0,0,0,0,0]  
union(0,1), union(1,2)
```

**Salida (parent, rank):**  
```
parent: [0,0,0,3,4]  
rank:   [1,0,0,0,0]
```
```

```mermaid
flowchart TD
  A[Inicio: union(x,y)] --> B[px=find(x); py=find(y)]  
  B --> C{px==py?} -->|sí| D[Fin]  
  C -->|no| E{rank[px]<rank[py]?}  
  E -->|sí| F[parent[px]=py]  
  E -->|no| G[parent[py]=px]; H{rank[px]==rank[py]? rank[px]++:null}  
  F --> I[Fin]  
  G --> I
```

![Diagrama Ejercicio 12.4](diagram4.png)
```

```java
public class DisjointSetRank {
    private int[] parent, rank;
    public DisjointSetRank(int n){ parent=new int[n]; rank=new int[n]; for(int i=0;i<n;i++) parent[i]=i; }
    public int find(int x){ if(parent[x]!=x) parent[x]=find(parent[x]); return parent[x]; }
    public void union(int x,int y){
        int px=find(x), py=find(y); if(px==py) return;
        if(rank[px]<rank[py]) parent[px]=py;
        else if(rank[py]<rank[px]) parent[py]=px;
        else{ parent[py]=px; rank[px]++; }
    }
    public static void main(String[] args){ DisjointSetRank ds=new DisjointSetRank(5); ds.union(0,1); ds.union(1,2); System.out.println(Arrays.toString(ds.parent)); System.out.println(Arrays.toString(ds.rank)); }
}
```