# Ejercicio 10.3: Insertar Elemento en Max-Heap  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Insertar un valor y restaurar propiedad de heap  
- **PARA:** Practicar operaciones `add` + `sift-up`  

**Entrada:**  
```
Heap: [10,5,6,2,3], Insertar: 15
```

**Salida:**  
```
[15,10,6,2,3,5]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Agregar al final]  
  B --> C[Índice i last]  
  C --> D{padre < a[i]?}  
  D -->|sí| E[swap con padre; i=padre]  
  E --> D  
  D -->|no| F[Fin]
```

![Diagrama Ejercicio 10.3](diagram3.png)
```

```java
public class InsertHeap {
    public static int[] insert(int[] a, int n, int key) {
        a = Arrays.copyOf(a, n+1); a[n] = key;
        int i = n;
        while (i>0 && a[(i-1)/2] < a[i]) {
            int tmp = a[i]; a[i]=a[(i-1)/2]; a[(i-1)/2]=tmp;
            i = (i-1)/2;
        }
        return a;
    }
    public static void main(String[] args) {
        int[] heap={10,5,6,2,3};
        heap = insert(heap, heap.length, 15);
        System.out.println(Arrays.toString(heap));
    }
}
```