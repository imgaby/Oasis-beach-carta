document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.miVideo');
    
    video.addEventListener('ended', function() {
      video.play(); // Vuelve a reproducir el video cuando se detiene
    });

    const textoBuenAmbiente = document.querySelector(".textoBuenAmbiente");
    const rumbaOasis = document.querySelector(".rumbaOasis");
    const nuestrasBebidasPremiun = document.querySelector(".nuestrasBebidasPremiun");
    const textoPedido =  document.querySelector(".textoPedido");
    
    if (/Android/i.test(navigator.userAgent)) {
        // Es Android
        console.log("El sistema operativo es Android");
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Es iOS

        textoBuenAmbiente.classList.replace("textoBuenAmbiente","textoBuenAmbienteEscalar")
        rumbaOasis.classList.replace("animation","textoBuenAmbienteEscalar")
        nuestrasBebidasPremiun.classList.replace("animation","textoBuenAmbienteEscalar")
        textoPedido.classList.replace("animation","textoBuenAmbienteEscalar")



        console.log("El sistema operativo es iOS");
      } else {
        // Otro sistema operativo
        console.log("El sistema operativo no es Android ni iOS");
      }

  });
  