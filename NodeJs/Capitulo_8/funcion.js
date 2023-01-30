// A
function siempreTrue(){
    return true;
}
console.log(siempreTrue())
//B
setTimeout(() => {
    console.log("Hola me ejecuto")
}, 5000);
//C
function* generaId(){
    let id = 0;
    while(true){
        id+=2
        if (id===10){
            return
        }
        yield id //espera hasta que se vuelva a llamar

    }
}

const gen = generaId();
console.log(gen.next())