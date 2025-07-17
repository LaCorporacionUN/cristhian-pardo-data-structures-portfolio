# Ejercicio 10.5: Heap Sort  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Ordenar un array usando heap sort  
- **PARA:** Practicar algoritmo de ordenamiento basado en heap  

**Entrada:**  
```
[3,1,6,5,2,4]
```

**Salida:**  
```
[1,2,3,4,5,6]
```

```mermaid
flowchart TD
  A[Inicio] --> B[buildMaxHeap(a)]  
  B --> C[for i=n-1 downTo 1: swap(a[0],a[i]); heapify(a,i,0)]
  C --> D[Fin]
```

![Diagrama Ejercicio 10.5](diagram5.png)
```

```java
public class HeapSort {
    public static void heapSort(int[] a) {
        int n=a.length;
        BuildMaxHeap.buildMaxHeap(a);
        for(int i=n-1;i>0;i--){ int t=a[0];a[0]=a[i];a[i]=t; heapify(a,i,0);}    }
    private static void heapify(int[] a,int n,int i){int l=2*i+1,r=2*i+2,large=i; if(l<n&&a[l]>a[large]) large=l; if(r<n&&a[r]>a[large]) large=r; if(large!=i){int t=a[i];a[i]=a[large];a[large]=t;heapify(a,n,large);} }
    public static void main(String[] args) {
        int[] a={3,1,6,5,2,4};
        heapSort(a);
        System.out.println(Arrays.toString(a));
    }
}
```