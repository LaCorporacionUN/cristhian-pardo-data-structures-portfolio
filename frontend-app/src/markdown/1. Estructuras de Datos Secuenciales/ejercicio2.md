# Ejercicio 2: Suma de Elementos  
**Descripción:**  
- **COMO:** Analista de datos  
- **QUIERO:** Calcular la suma de todos los elementos de un arreglo  
- **PARA:** Practicar recorridos secuenciales y acumuladores  

**Entrada:**  
```
4  
10 20 30 40
```

**Salida:**  
```
100
```

```mermaid
flowchart TD
  A[Inicio] --> B[Leer N y arreglo]  
  B --> C[Inicializar suma = 0]  
  C --> D[Recorrer cada elemento y sumar]  
  D --> E[Mostrar suma]  
  E --> F[Fin]
```

![Diagrama Ejercicio 2](diagram2.png)
```

```java
public class SumaElementos {
    public static int sumar(int[] arr) {
        int s = 0;
        for (int v : arr) s += v;
        return s;
    }
    public static void main(String[] args) {
        int[] arr = {10,20,30,40};
        System.out.println(sumar(arr));
    }
}
```