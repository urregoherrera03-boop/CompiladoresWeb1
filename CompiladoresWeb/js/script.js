/* ===================================================== */
/* MOSTRAR PORTAFOLIO */
/* ===================================================== */


function mostrarPortafolio(){


    const inicio = document.getElementById("inicio");

    const portafolio = document.getElementById("portafolio");



    // Ocultar portada

    inicio.style.display = "none";



    // Mostrar portafolio

    portafolio.classList.remove("oculto");

    portafolio.classList.add("mostrar");



    // Volver arriba

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


}








/* ===================================================== */
/* VOLVER AL INICIO */
/* ===================================================== */


function volverInicio(){


    const inicio = document.getElementById("inicio");

    const portafolio = document.getElementById("portafolio");



    // Ocultar portafolio

    portafolio.classList.remove("mostrar");

    portafolio.classList.add("oculto");



    // Mostrar portada

    inicio.style.display = "flex";



    // Regresar arriba

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


}








/* ===================================================== */
/* SISTEMA DE PESTAÑAS */
/* ===================================================== */


document.addEventListener("DOMContentLoaded", function(){



    const botones = document.querySelectorAll(".pestana");


    const contenidos = document.querySelectorAll(".contenido-pestana");






    botones.forEach(boton => {



        boton.addEventListener("click", function(){



            // Quitar activo de todos los botones

            botones.forEach(btn => {

                btn.classList.remove("activa");

            });






            // Activar botón seleccionado

            this.classList.add("activa");







            // Ocultar todos los contenidos

            contenidos.forEach(contenido => {

                contenido.classList.remove("activo");

            });







            // Mostrar contenido seleccionado

            const idContenido = this.dataset.tab;



            const contenidoSeleccionado = document.getElementById(idContenido);




            if(contenidoSeleccionado){


                contenidoSeleccionado.classList.add("activo");


            }



        });



    });



});