# Ejercicio 12.1: `find` con compresión de ruta  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Implementar función `find(x)` que devuelva la raíz de x con compresión de ruta  
- **PARA:** Practicar optimización de búsqueda  

**Entrada:**  
```
Inicializar parent: [0,1,2,3,4]  
Operaciones: find(3)
```

**Salida:**  
```
3
(parent sin cambios)
```
```

```mermaid
flowchart TD
  A[Inicio: find(x)] --> B{parent[x] != x?}  
  B -->|sí| C[parent[x] = find(parent[x])]  
  C --> D[return parent[x]]  
  B -->|no| D
```

![Diagrama Ejercicio 12.1](diagram1.png)
```

```java
public class DisjointSet {
    private int[] parent;
    public DisjointSet(int n) { parent = new int[n]; for (int i=0;i<n;i++) parent[i]=i; }
    public int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    public static void main(String[] args) {
        DisjointSet ds = new DisjointSet(5);
        System.out.println(ds.find(3));
    }
}
```