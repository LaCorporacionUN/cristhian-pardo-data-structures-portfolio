# Ejercicio 10.1: Construir Max-Heap  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Transformar un array en un max-heap in-place  
- **PARA:** Practicar algoritmo de construcción de heap  

**Entrada:**  
```
[3, 1, 6, 5, 2, 4]
```

**Salida (array representando heap):**  
```
[6, 5, 4, 3, 2, 1]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer array]  
  B --> C[Para i = n/2-1 downTo 0: heapify(i)]  
  C --> D[Función heapify: i,left,right],  
  D --> E[Swap con mayor hijo si needed y heapify recursivo]  
  E --> F[Fin]
```

![Diagrama Ejercicio 10.1](diagram1.png)
```

```java
public class BuildMaxHeap {
    public static void buildMaxHeap(int[] a) {
        int n = a.length;
        for (int i = n/2 - 1; i >= 0; i--) heapify(a, n, i);
    }
    private static void heapify(int[] a, int n, int i) {
        int largest = i;
        int l = 2*i+1, r = 2*i+2;
        if (l<n && a[l]>a[largest]) largest = l;
        if (r<n && a[r]>a[largest]) largest = r;
        if (largest != i) {
            int tmp = a[i]; a[i]=a[largest]; a[largest]=tmp;
            heapify(a, n, largest);
        }
    }
    public static void main(String[] args) {
        int[] a = {3,1,6,5,2,4};
        buildMaxHeap(a);
        System.out.println(Arrays.toString(a));
    }
}
```