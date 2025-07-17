# Ejercicio 8.3: Buscar Valor en Árbol Binario  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Determinar si un valor existe en el árbol  
- **PARA:** Practicar búsqueda DFS  

**Entrada:**  
```
      5
     / \
    3   7
   / \   \
  2   4   8
Buscar: 4
```

**Salida:**  
```
true
```

```mermaid
flowchart TD
  A[Inicio] --> B{nodo==null?}  
  B -->|sí| C[return false]  
  B -->|no| D{nodo.val==x?}  
  D -->|sí| E[return true]  
  D -->|no| F[return dfs(n.left,x) || dfs(n.right,x)]  
  F --> G[Fin]
```

![Diagrama Ejercicio 8.3](diagram3.png)
```

```java
public class TreeSearch {
    public static boolean exists(TreeNode root, int x) {
        if (root == null) return false;
        if (root.val == x) return true;
        return exists(root.left, x) || exists(root.right, x);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.right = new TreeNode(8);
        System.out.println(exists(root, 4));
    }
}
```