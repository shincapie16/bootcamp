function suma(a,b){
    return a+b 
}
function mutiplicar(a,b){
    return a*b 
}
function potencia(a,b){
    return a**b 
}
function factorial(a){
    let factorial = 1;
    for (let i= 1;i<=a;i++)
    {
        factorial *=i
    }
    return factorial
}

module.exports ={
    suma,mutiplicar,potencia,factorial
}