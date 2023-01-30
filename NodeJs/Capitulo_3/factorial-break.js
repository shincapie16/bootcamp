//Factorial While con bifurcación y sentencia break

let limite = 9;
var factorial = 10;

while (limite >=1){
    factorial= factorial * limite;
    limite--;
    if(limite==1){
        console.log(factorial);
        break; 
    }
}
