# Ejercicio 6.2: Implementar Cola Circular  
**Descripción:**  
- **COMO:** Ingeniero  
- **QUIERO:** Modelar una cola circular con tamaño fijo  
- **PARA:** Practicar índices modulares  

**Entrada:**  
```
Operaciones: 
offer(10), offer(20), offer(30), poll(), offer(40), offer(50), offer(60)
Tamaño = 5
```

**Salida:**  
```
[20,30,40,50,60]
```
```

```mermaid
flowchart TD
  A[Inicio] --> B[Inicializar array de tamaño N]  
  B --> C[front=0; rear=0; count=0]  
  C --> D[offer(x): if count<N, arr[rear]=x; rear=(rear+1)%N; count++]  
  D --> E[poll(): if count>0, val=arr[front]; front=(front+1)%N; count--]  
  E --> F[Imprimir contenido desde front count elementos]  
  F --> G[Fin]
```

![Diagrama Ejercicio 6.2](diagram2.png)
```

```java
public class ColaCircular {
    private int[] data;
    private int front, rear, count;
    public ColaCircular(int n) { data = new int[n]; front=0; rear=0; count=0; }
    public boolean offer(int x) {
        if (count == data.length) return false;
        data[rear] = x;
        rear = (rear+1) % data.length;
        count++;
        return true;
    }
    public Integer poll() {
        if (count == 0) return null;
        int val = data[front];
        front = (front+1) % data.length;
        count--;
        return val;
    }
    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        for (int i=0; i<count; i++) {
            sb.append(data[(front+i)%data.length]);
            if (i < count-1) sb.append(",");
        }
        return sb.append("]").toString();
    }
    public static void main(String[] args) {
        ColaCircular q = new ColaCircular(5);
        q.offer(10); q.offer(20); q.offer(30);
        q.poll(); q.offer(40); q.offer(50); q.offer(60);
        System.out.println(q);
    }
}
```