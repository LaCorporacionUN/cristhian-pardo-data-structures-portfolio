# Ejercicio 9.5: Verificar propiedades de altura/balanceo en AVL  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Confirmar que un árbol es AVL (|bal|≤1 en cada nodo)  
- **PARA:** Practicar chequeo de propiedades en recorrido  

**Entrada:**  
```
Árbol resultante tras insertar [10,20,30,40,50,25]
```

**Salida:**  
```
true
```

```mermaid
flowchart TD
  A[Inicio] --> B[DFS en cada nodo]  
  B --> C{nodo==null?}  
  C -->|sí| D[return true]  
  C -->|no| E[bal = height(l) - height(r)]  
  E --> F{|bal|>1?}  
  F -->|sí| G[return false]  
  F -->|no| H[verificar subárboles]  
  H --> I[Fin]
```

![Diagrama Ejercicio 9.5](diagram5.png)
```

```java
public class AVLCheck {
    public static int height(AVLNode n){ return n==null?0:n.h; }
    public static boolean isAVL(AVLNode n) {
        if (n==null) return true;
        int bal = height(n.left) - height(n.right);
        if (Math.abs(bal) > 1) return false;
        return isAVL(n.left) && isAVL(n.right);
    }
    public static void main(String[] args) {
        AVLInsertSimpleLeft tree = new AVLInsertSimpleLeft();
        int[] vals = {10,20,30,40,50,25};
        for (int v: vals) tree.root = tree.insert(tree.root,v);
        System.out.println(isAVL(tree.root));
    }
}
```
