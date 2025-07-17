# Ejercicio 10.2: Heapify de Subárbol  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Aplicar heapify en el índice dado  
- **PARA:** Practicar corrección de un nodo en heap  

**Entrada:**  
```
Array: [1,3,6,5,2,4], Índice: 1
```

**Salida:**  
```
[1,5,6,3,2,4]
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer array e índice i]  
  B --> C[LLamar heapify(a,n,i)]  
  C --> D[Verificar hijos y swap si necesario recursivo]  
  D --> E[Fin]
```

![Diagrama Ejercicio 10.2](diagram2.png)
```

```java
public class HeapifySubtree {
    public static void heapify(int[] a, int n, int i) {
        int largest = i, l=2*i+1, r=2*i+2;
        if (l<n && a[l]>a[largest]) largest=l;
        if (r<n && a[r]>a[largest]) largest=r;
        if (largest!=i) {
            int tmp=a[i]; a[i]=a[largest]; a[largest]=tmp;
            heapify(a,n,largest);
        }
    }
    public static void main(String[] args) {
        int[] a={1,3,6,5,2,4};
        heapify(a, a.length, 1);
        System.out.println(Arrays.toString(a));
    }
}
```