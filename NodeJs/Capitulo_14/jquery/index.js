//$(selector).accion
//$("li").hide()

//$(document).ready(())=>{}
$(()=>{
    //Selectores por id o por clases
    //$('#el-1').hide()
    $(".hide-btn").click(()=>{
        console.log("Ocultando")
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        console.log("Mostranding")
        $("h1").fadeIn()

    })
    $("li").click(()=>{
        console.log("Mostranding")
        $("h1").css({color:"red"})

    })
    $(".add-btn").click(()=>{
        console.log("Mostranding")
        $("ul").prepend("<li>New Element</li>")

    })
    $("li").mouseenter((elem)=>{
        console.log("Mostranding")
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem)=>{
        console.log("Mostranding")
        elem.target.style.color = "black"
    })
})