const resDiv = document.getElementById("resultados")
        new URLSearchParams(window.location.search).forEach((val,name)=>{
            resDiv.append(`${name}: ${val}`)
            resDiv.append(document.createElement('br'))
        })