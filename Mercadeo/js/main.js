// console.log("asd");
// DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
})*/

let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function(close){
    close.addEventListener('click',function(ev){
        // ev.preventDefault(); con este evento prevenimos que se ejecute
        ev.preventDefault();

        return false;
    });
});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    //icono.classList.remove("fas fa-star");
    icono.classList.add("fas fa-star")
})