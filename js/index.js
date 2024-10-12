//Carrusel js
let c = 1;
let banner = document.getElementById("banner");
let bannerTexto = document.getElementById("banner-texto");

let textos = [
    "¡El futuro es tuyo! Con una beca, tus sueños educativos pueden hacerse realidad.",
    "Invierte en tu futuro sin romper el banco: ¡solicita una beca hoy mismo!",
    "Tu talento merece ser reconocido. ¡Aplica a una beca y haz que tu voz se escuche!",
    "Haz que cada centavo cuente. Las becas son la inversión más valiosa en tu educación."
];

function carrusel() {
    c++;
    if (c > 4) c = 1;

    bannerTexto.classList.remove("visible");

    setTimeout(() => {
        banner.setAttribute("src", "imagenes/banner" + c + ".jpg");
        bannerTexto.innerText = textos[c - 1];

        bannerTexto.classList.add("visible");
    }, 500); 
}

bannerTexto.classList.add("visible");

banner.setAttribute("src", "imagenes/banner" + c + ".jpg");
bannerTexto.innerText = textos[c - 1];

setInterval(carrusel, 4500);


//Hamburguesa js 
const menuBoton = document.querySelector('.menu-button');
const menus = document.querySelectorAll('.menu');

menuBoton.addEventListener('click', () => {
    menus.forEach(menu => {
        menu.classList.toggle('active'); 
    });
});

//deshabilitar el a
const enlaces = document.querySelectorAll('.mi-enlace');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault();
    });
});