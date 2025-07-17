# Ejercicio 11.3: Orden Descendente con Min-Heap  
**Descripción:**  
- **COMO:** Desarrollador  
- **QUIERO:** Obtener arreglo ordenado descendente  
- **PARA:** Practicar variante con min-heap  

**Entrada:**  
```
[8, 4, 10, 1, 3]
```

**Salida:**  
```
[10, 8, 4, 3, 1]
```

```mermaid
flowchart TD
  A[Inicio] --> B[buildMinHeap(a)]  
  B --> C[for i=n-1..0: result[n-1-i]=min; replace root; heapify]  
  C --> D[Fin]
```

![Diagrama Ejercicio 11.3](diagram3.png)
```

```java
public class HeapSortDesc {
    public static int[] heapSortDesc(int[] a) {
        int n=a.length;
        for(int i=n/2-1;i>=0;i--) minHeapify(a,n,i);
        int[] res=new int[n];
        for(int i=n-1;i>=0;i--) {
            res[n-1-i]=a[0];
            a[0]=a[i];
            minHeapify(a,i,0);
        }
        return res;
    }
    private static void minHeapify(int[] a,int n,int i){
        int smallest=i,l=2*i+1,r=2*i+2;
        if(l<n&&a[l]<a[smallest]) smallest=l;
        if(r<n&&a[r]<a[smallest]) smallest=r;
        if(smallest!=i){int t=a[i];a[i]=a[smallest];a[smallest]=t;minHeapify(a,n,smallest);}    }
    public static void main(String[] args){int[] arr={8,4,10,1,3};System.out.println(Arrays.toString(heapSortDesc(arr)));}
}
```