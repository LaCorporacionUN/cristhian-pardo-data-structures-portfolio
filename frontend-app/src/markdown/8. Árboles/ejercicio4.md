# Ejercicio 8.4: Contar Nodos en un Árbol  
**Descripción:**  
- **COMO:** Ingeniero de datos  
- **QUIERO:** Contar el número total de nodos  
- **PARA:** Practicar recursión simple  

**Entrada:**  
```
    10
   /  \
  5    15
      /  \
     12   20
```

**Salida:**  
```
5
```

```mermaid
flowchart TD
  A[Inicio] --> B{nodo==null?}  
  B -->|sí| C[return 0]  
  B -->|no| D[return 1 + f(left) + f(right)]  
  D --> E[Fin]
```

![Diagrama Ejercicio 8.4](diagram4.png)
```

```java
public class CountNodes {
    public static int count(TreeNode root) {
        if (root == null) return 0;
        return 1 + count(root.left) + count(root.right);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.right.left = new TreeNode(12);
        root.right.right = new TreeNode(20);
        System.out.println(count(root));
    }
}