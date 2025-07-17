# Ejercicio 11.2: Contar Comparaciones  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Contar cuántas comparaciones se hacen en heapify  
- **PARA:** Analizar complejidad práctica  

**Entrada:**  
```
[2, 9, 5, 1, 7]
```

**Salida:**  
```
Comparaciones = 7
```

```mermaid
flowchart TD
  A[Inicio] --> B[Augmentar contador en cada if(l<n) y if(r<n)]  
  B --> C[Realizar heapSort]  
  C --> D[Imprimir contador]  
  D --> E[Fin]
```

![Diagrama Ejercicio 11.2](diagram2.png)
```

```java
public class HeapSortCount {
    static int comps = 0;
    public static void heapSort(int[] a) {
        int n=a.length;
        for(int i=n/2-1;i>=0;i--) heapify(a,n,i);
        for(int i=n-1;i>0;i--) {
            int t=a[0];a[0]=a[i];a[i]=t;
            heapify(a,i,0);
        }
    }
    private static void heapify(int[] a,int n,int i){
        int largest=i,l=2*i+1,r=2*i+2;
        comps += (l<n?1:1) + (r<n?1:1);
        if(l<n && a[l]>a[largest]) largest=l;
        if(r<n && a[r]>a[largest]) largest=r;
        if(largest!=i){int t=a[i];a[i]=a[largest];a[largest]=t;heapify(a,n,largest);}    }
    public static void main(String[] args){int[] arr={2,9,5,1,7};heapSort(arr);System.out.println("Comparaciones = "+comps);}    
}
```