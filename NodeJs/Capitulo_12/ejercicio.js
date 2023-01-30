function fib(n) {

    const arreglo = [1, 1];
    for (var i = 2; i < n; i++) {
      arreglo.push(arreglo[i-2] + arreglo[i-1]);
    }
    return arreglo; // m
  
  }
array=fib(6);
console.log(array);