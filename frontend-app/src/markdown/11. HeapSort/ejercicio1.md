# Ejercicio 11.1: HeapSort Básico  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Ordenar un array usando heapSort in-place  
- **PARA:** Practicar implementación completa  

**Entrada:**  
```
[4, 10, 3, 5, 1]
```

**Salida:**  
```
[1, 3, 4, 5, 10]
```

```mermaid
flowchart TD
  A[Inicio] --> B[buildMaxHeap(a)]  
  B --> C[for i=n-1 downto 1: swap(a[0],a[i]); heapify(a,i,0)]  
  C --> D[Fin]
```

![Diagrama Ejercicio 11.1](diagram1.png)
```

```java
public class HeapSortBasic {
    public static void heapSort(int[] a) {
        int n = a.length;
        for (int i = n/2 - 1; i >= 0; i--) heapify(a, n, i);
        for (int i = n-1; i>0; i--) {
            int tmp = a[0]; a[0] = a[i]; a[i] = tmp;
            heapify(a, i, 0);
        }
    }
    private static void heapify(int[] a, int n, int i) {
        int largest = i, l = 2*i+1, r = 2*i+2;
        if (l<n && a[l]>a[largest]) largest = l;
        if (r<n && a[r]>a[largest]) largest = r;
        if (largest!=i) {
            int t = a[i]; a[i]=a[largest]; a[largest]=t;
            heapify(a, n, largest);
        }
    }
    public static void main(String[] args) {
        int[] arr = {4,10,3,5,1};
        heapSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```