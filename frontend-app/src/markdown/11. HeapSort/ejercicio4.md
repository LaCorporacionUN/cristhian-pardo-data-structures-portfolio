# Ejercicio 11.4: K-ésimo Máximo con HeapSort  
**Descripción:**  
- **COMO:** Científico de datos  
- **QUIERO:** Encontrar el k-ésimo mayor usando heapSort parcial  
- **PARA:** Practicar selección con heap  

**Entrada:**  
```
[7,10,4,3,20,15], k=3
```

**Salida:**  
```
7
```

```mermaid
flowchart TD
  A[Inicio] --> B[buildMaxHeap(a)]  
  B --> C[for i=1..k-1: swap(0,n-i); heapify(a,n-i,0)]  
  C --> D[return a[0]]  
  D --> E[Fin]
```

![Diagrama Ejercicio 11.4](diagram4.png)
```

```java
public class KthMaxHeap {
    public static int kthMax(int[] a, int k) {
        int n=a.length;
        for(int i=n/2-1;i>=0;i--) heapify(a,n,i);
        for(int i=1;i<k;i++){
            int tmp=a[0];a[0]=a[n-i];a[n-i]=tmp;
            heapify(a,n-i,0);
        }
        return a[0];
    }
    private static void heapify(int[] a,int n,int i){int l=2*i+1,r=2*i+2,largest=i;if(l<n&&a[l]>a[largest]) largest=l; if(r<n&&a[r]>a[largest]) largest=r; if(largest!=i){int t=a[i];a[i]=a[largest];a[largest]=t;heapify(a,n,largest);} }
    public static void main(String[] args){int[] arr={7,10,4,3,20,15};System.out.println(kthMax(arr,3));}
}
```