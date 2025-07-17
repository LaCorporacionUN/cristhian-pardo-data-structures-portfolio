# Ejercicio 8.1: Recorrido In-Order de Árbol Binario  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Realizar recorrido in-order (izquierda, nodo, derecha)  
- **PARA:** Practicar recursión en árboles  

**Entrada:**  
```
       2
      / \
     1   3
```

**Salida:**  
```
1 2 3
```

```mermaid
flowchart TD
  A[Inicio] --> B{nodo!=null?}  
  B -->|sí| C[inOrder(nodo.left)]  
  C --> D[print nodo.val]  
  D --> E[inOrder(nodo.right)]  
  E --> F[Fin rama]  
  B -->|no| F
```

![Diagrama Ejercicio 8.1](diagram1.png)
```

```java
class TreeNode { int val; TreeNode left, right; TreeNode(int v){val=v;} }
public class InOrderTraversal {
    public static void inOrder(TreeNode root) {
        if (root == null) return;
        inOrder(root.left);
        System.out.print(root.val + " ");
        inOrder(root.right);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        inOrder(root);
    }
}
```