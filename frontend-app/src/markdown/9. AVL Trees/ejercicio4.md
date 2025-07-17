# Ejercicio 9.4: Insertar para desequilibrio derecha-izquierda y corregir   
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Insertar secuencialmente [1,3,2] en un AVL  
- **PARA:** Practicar rotación doble derecha-izquierda  

**Entrada:**  
```
Insertar: 1, luego 3, luego 2
```

**Salida (In-Order):**  
```
1 2 3
```

```mermaid
flowchart TD
  A[Inicio] --> B[Insert 1]  
  B --> C[Insert 3]  
  C --> D[Insert 2: desequilibrio en 1 (right-left)]  
  D --> E[Rotación derecha en 3]  
  E --> F[Rotación izquierda en 1]  
  F --> G[Árbol balanceado]  
  G --> H[Fin]
```

![Diagrama Ejercicio 9.4](diagram4.png)
```

```java
public class AVLDobleRL extends AVLInsertSimpleLeft {
    @Override
    protected AVLNode insert(AVLNode n, int v) {
        if (n==null) return new AVLNode(v);
        if (v < n.val) n.left = insert(n.left,v);
        else n.right = insert(n.right,v);
        n.h = 1 + Math.max(height(n.left), height(n.right));
        if (height(n.right) - height(n.left) == 2) {
            if (v < n.right.val) n.right = rotateRight(n.right);
            return rotateLeft(n);
        }
        return n;
    }
    public static void main(String[] args) {
        AVLDobleRL tree = new AVLDobleRL();
        tree.root = tree.insert(tree.root,1);
        tree.root = tree.insert(tree.root,3);
        tree.root = tree.insert(tree.root,2);
        new InOrder().print(tree.root);
    }
}
```
