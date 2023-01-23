

document.getElementById("button").addEventListener("click", function(){
    alert ("Click en el botón")
})

$(()=>{
    $(".button").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})