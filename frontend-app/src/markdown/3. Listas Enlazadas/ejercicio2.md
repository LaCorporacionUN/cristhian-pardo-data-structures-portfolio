# Ejercicio 3.2: Insertar Nodo al Inicio  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Insertar un nuevo nodo al principio  
- **PARA:** Aprender operaciones de inserción  

**Entrada:**  
```
Valores: [2,3,4]  
Insertar: 1
```

**Salida:**  
```
1 -> 2 -> 3 -> 4 -> null
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer valor v]  
  B --> C[Crear nuevo nodo n(v)]  
  C --> D[n.next = head]  
  D --> E[head = n]  
  E --> F[Imprimir lista]  
  F --> G[Fin]
```

![Diagrama Ejercicio 3.2](diagram2.png)
```
```java
class Node2 { int val; Node2 next; Node2(int v){val=v;} }
public class InsertarInicio {
    public static Node2 insertHead(Node2 head, int v) {
        Node2 n = new Node2(v);
        n.next = head;
        return n;
    }
    public static void main(String[] args) {
        Node2 head = new Node2(2);
        head.next = new Node2(3);
        head.next.next = new Node2(4);
        head = insertHead(head, 1);
        Node2 cur = head;
        while(cur != null){ System.out.print(cur.val+" "); cur=cur.next; }
    }
}
```