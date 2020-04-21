let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function (close) {
  close.addEventListener("click", function (ev) {
    // ev.preventDefault(); con este evento prevenimos que se ejecute
    ev.preventDefault();

    let content = document.querySelector(".content");

    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //Agregar clases para animar su saludo fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    //setTimeout
    // setInterval(() => {

    // }, interval);
    setTimeout(function () {
      location.href = "/";
    }, 2000);

    return false;
  });
});
