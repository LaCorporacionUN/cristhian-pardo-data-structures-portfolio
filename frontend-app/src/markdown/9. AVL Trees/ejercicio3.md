# Ejercicio 9.3: Insertar para desequilibrio izquierda-derecha y corregir   
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Insertar secuencialmente [3,1,2] en un AVL  
- **PARA:** Practicar rotación doble izquierda-derecha  

**Entrada:**  
```
Insertar: 3, luego 1, luego 2
```

**Salida (In-Order):**  
```
1 2 3
```

```mermaid
flowchart TD
  A[Inicio] --> B[Insert 3]  
  B --> C[Insert 1]  
  C --> D[Insert 2: desequilibrio en 3 (left-right)]  
  D --> E[Rotación izquierda en 1]  
  E --> F[Rotación derecha en 3]  
  F --> G[Árbol balanceado]  
  G --> H[Fin]
```

![Diagrama Ejercicio 9.3](diagram3.png)
```

```java
public class AVLDobleLR extends AVLInsertSimpleRight {
    private AVLNode insert(AVLNode n, int v) {
        if (n==null) return new AVLNode(v);
        if (v < n.val) n.left = insert(n.left,v);
        else n.right = insert(n.right,v);
        n.h = 1 + Math.max(height(n.left), height(n.right));
        if (height(n.left) - height(n.right) == 2) {
            if (v > n.left.val) n.left = rotateLeft(n.left);
            return rotateRight(n);
        }
        return n;
    }
    public static void main(String[] args) {
        AVLDobleLR tree = new AVLDobleLR();
        tree.root = tree.insert(tree.root,3);
        tree.root = tree.insert(tree.root,1);
        tree.root = tree.insert(tree.root,2);
        new InOrder().print(tree.root);
    }
}
```