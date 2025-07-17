# Ejercicio 8.5: Verificar si un Árbol es AVL Balanceado  
**Descripción:**  
- **COMO:** Ingeniero de software  
- **QUIERO:** Determinar si la diferencia de altura de subárboles es ≤1  
- **PARA:** Practicar recursión con múltiples retornos  

**Entrada:**  
```
     4
    / \
   2   6
      / \
     5   7
```

**Salida:**  
```
true
```

```mermaid
flowchart TD
  A[Inicio] --> B[Función retorna (isBal,h)]  
  B --> C{nodo==null?}  
  C -->|sí| D[(true,0)]  
  C -->|no| E[l= f(left); r= f(right)]  
  E --> F[balanced = l.isBal && r.isBal && |l.h - r.h|<=1]  
  F --> G[retornar (balanced, max(l.h,r.h)+1)]  
  G --> H[Fin]
```

![Diagrama Ejercicio 8.5](diagram5.png)
```

```java
public class BalancedTree {
    static class Res { boolean isBal; int h; Res(boolean b,int h){isBal=b;this.h=h;} }
    public static Res check(TreeNode n) {
        if (n==null) return new Res(true,0);
        Res l = check(n.left), r = check(n.right);
        boolean bal = l.isBal && r.isBal && Math.abs(l.h - r.h) <=1;
        return new Res(bal, Math.max(l.h,r.h)+1);
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(6);
        root.right.left = new TreeNode(5);
        root.right.right = new TreeNode(7);
        System.out.println(check(root).isBal);
    }
}
```