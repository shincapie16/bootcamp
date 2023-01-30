function saludar (par1,par2){
    console.log("Hola");
}

//Funciones asincronas

const miPromesa = new Promise((resolve,reject)=>{
    //si todo está correcto
    if (true){
        resolve()
    }else{
        reject()
    }
})
miPromesa.then(()=> console.log("forma correcta")) 
//const miPromesa = new Promise((resolve,reject)=>{
    //     //si todo está correcto
    //     if (true){
    //         resolve()
    //     }else{
    //         reject()
    //     }
    // })
    // miPromesa.then(()=> console.log("forma correcta")) 
    //     .catch(()=>console.log("ERROR"))
    //     .finally(()=>console.log("Siempre se ejecuta"))
// // Funcion generadora

function* generaId(){
    let id = 0;
    while(true){
        id++
        if (id===10){
            return
        }
        yield id //espera hasta que se vuelva a llamar

    }
}

const gen = generaId();
console.log(gen.next())