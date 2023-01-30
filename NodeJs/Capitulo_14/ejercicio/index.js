const boton= document.getElementById("btn")
console.log(boton)

boton.addEventListener("click",()=>{
    alert("Has hecho click")
})

    //Selectores por id o por clases
    //$('#el-1').hide()
$("btn").click(function(){
    console.log("boton con jquery")
})