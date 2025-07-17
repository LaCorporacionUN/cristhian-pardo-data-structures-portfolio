# Ejercicio 10.4: Extract-Max  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Extraer el elemento máximo y restaurar heap  
- **PARA:** Practicar `pop` + `heapify`  

**Entrada:**  
```
Heap: [15,10,6,2,3,5]
```

**Salida:**  
```
Max=15, Heap resultante: [10,5,6,2,3]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Guardar root en max]  
  B --> C[Reemplazar root con último]  
  C --> D[Reducir tamaño]  
  D --> E[heapify(root)]  
  E --> F[Imprimir max y heap]  
  F --> G[Fin]
```

![Diagrama Ejercicio 10.4](diagram4.png)
```

```java
public class ExtractMax {
    public static int extractMax(int[] a, int n) {
        int max = a[0];
        a[0] = a[n-1];
        heapify(a, n-1,0);
        System.out.println("Max="+max+", Heap="+Arrays.toString(Arrays.copyOf(a,n-1)));
        return max;
    }
    // heapify from Ejercicio10_1
    private static void heapify(int[] a,int n,int i){int l=2*i+1,r=2*i+2,large=i; if(l<n&&a[l]>a[large]) large=l; if(r<n&&a[r]>a[large]) large=r; if(large!=i){int t=a[i];a[i]=a[large];a[large]=t;heapify(a,n,large);} }
    public static void main(String[] args) {
        int[] heap={15,10,6,2,3,5};
        extractMax(heap, heap.length);
    }
}
```