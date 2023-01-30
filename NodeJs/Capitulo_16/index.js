const parrafos= document.querySelectorAll(".parrafo")
const secciones= document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")
parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart",event=>{
        console.log("Inicio de arrastre")
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id",parrafo.id)
    })
    parrafo.addEventListener("dragend",()=>{
        console.log("terminado")
        parrafo.classList.remove("dragging")

    })
})
secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
        console.log("Dragover")
    })
    seccion.addEventListener("drop",event=>{
        console.log("drop")
        const id_parrafo=event.dataTransfer.getData("id")
        console.log(id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})
papelera.addEventListener("drop",event=>{
    const id_parrafo=event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
    
})
