# Ejercicio 8.2: Calcular Altura de Árbol Binario  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Calcular la altura (máxima profundidad)  
- **PARA:** Practicar recursión y casos base  

**Entrada:**  
```
      1
     / \
    2   3
       /
      4
```

**Salida:**  
```
3
```

```mermaid
flowchart TD
  A[Inicio] --> B{nodo==null?}  
  B -->|sí| C[return 0]  
  B -->|no| D[leftH = f(n.left)]  
  D --> E[rightH = f(n.right)]  
  E --> F[return max(leftH,rightH)+1]  
  F --> G[Fin]
```

![Diagrama Ejercicio 8.2](diagram2.png)
```

```java
public class TreeHeight {
    public static int height(TreeNode root) {
        if (root == null) return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        System.out.println(height(root));
    }
}
```