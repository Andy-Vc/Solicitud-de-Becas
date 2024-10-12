//Agregar los datos Guardados 
document.addEventListener("DOMContentLoaded", function () {
    const nombre = localStorage.getItem('usuarioNombre');
    const apellido = localStorage.getItem('usuarioApellido');
    const number = localStorage.getItem('usuarioNumero');
    const codigo = localStorage.getItem('usuarioCodigo');
    const carrera = localStorage.getItem('usuarioCarrera');

    if (nombre && apellido) {
        console.log(`Usuario conectado: ${nombre} ${apellido}`);
        document.getElementById('mensaje').innerText = `Hola, ${nombre} ${apellido}!`;
        document.getElementById('li-codigo').innerText = `${codigo}@cibertec.edu.pe`;
        document.getElementById('li-numero').innerHTML = `${number}`;
        document.getElementById('li-carrera').innerHTML = `${carrera}`;
    } else {
        alert('No has iniciado sesión.');
        window.location.href = './iniciarsesion2.html';
    }
})


//Para agregar respectivo input de cada selector y agregar el required 
function mostrarInput() {
    const grupos = document.querySelectorAll('.input-group');
    grupos.forEach(grupo => {
        grupo.style.display = 'none';
        const inputs = grupo.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.required = false; 
        });
    });

    const seleccion = document.getElementById('select-becas').value;

    if (seleccion) {
        const grupoSeleccionado = document.getElementById(seleccion);
        grupoSeleccionado.style.display = 'block';
        const inputsSeleccionados = grupoSeleccionado.querySelectorAll('input, select');

        inputsSeleccionados.forEach(input => {
            input.required = true; 
        });

        
    }
}

//PAra agregar requisitos de las sub-beca de la beca excelencia e innovacion
function infoOpcion() {
    const grupos = document.querySelectorAll('.input-group-2');
    grupos.forEach(grupo => {
        grupo.style.display = 'none';
        const inputs = grupo.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.required = false; 
        });
    });

    const seleccion = document.getElementById('sub-informacion').value;

    if (seleccion) {
        const grupoSeleccionado = document.getElementById(seleccion);
        grupoSeleccionado.style.display = 'block';
        const inputsSeleccionados = grupoSeleccionado.querySelectorAll('input, select');

        inputsSeleccionados.forEach(input => {
            input.required = true; 
        });    
    }
}
//Para cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', function () {
    localStorage.clear();
    window.location.href = './iniciarsesion.html';
})

//Mostrar los Beneficiados de la beca formacion
const mostrarUsuarios = [
    { username: "I202466234", name: "Laura Sofia", lastname: "Manrique Torres", career: "Computación e Informática" },
    { username: "I202182934", name: "Mariana Liz", lastname: "Quispe Llosa", career: "Administración y Sistemas" },
    { username: "I202023456", name: "Rodrigo Marco", lastname: "Reyes Ruiz", career: "Administración de Redes y Comunicaciones" }

]
const userList = document.getElementById('ul-listado');

mostrarUsuarios.forEach(user => {
    const li = document.createElement('li');
    li.className = 'li-listado';
    li.textContent = `${user.name} ${user.lastname} (${user.username}) - ${user.career}`;
    userList.appendChild(li);
})

//Mostrar beneficiados beca inclusion
const mostrarUsuarios2 = [
    { username: "I202025634", name: "Fernando Jose", lastname: "Mendoza Tupac", career: "Arquitectura de Datos Empresariales con Mención en Big Data Developer", achievement: "IoT Insight Hub: Plataforma de análisis de datos de dispositivos IoT."},
    { username: "I201823456", name: "Franco Antoni", lastname: "Chavez Ruiz", career: "Computación e Informática", achievement:"Promedio de 20 en los últimos 2 ciclos académicos"},
    { username: "I201702456", name: "Rafael Dario", lastname: "Salas Torres", career: "Administración de Sistemas", achievement: "InvenTrack: Sistema de rastreo de inventario que asegura la trazabilidad de productos desde su entrada hasta su salida."},
    { username: "I201702567", name: "Albert Luis", lastname: "Vargas Mendez", career: "Electrónica Industrial",achievement:"Promedio de 20 en los últimos 3 ciclos académicos" },
    { username: "I202090567", name: "Sabrina Erika", lastname: "Mori Sanampe", career: "Administración de Empresas",achievement:"Promedio de 20 en los últimos 2 ciclos académicos" },
    { username: "I201965432", name: "Yackelin Abigail", lastname: "Palomino Espinoza", career: "Computación e Informática", achievement:"Promedio de 20 en los últimos 4 ciclos académicos" },
    { username: "I202365425", name: "Mario Angel", lastname: "Alvarado Durand", career: "Administración de Sistemas",achievement:"Promedio de 20 en los últimos 3 ciclos académicos" }
]

const user18 = document.getElementById('ul-listado-2')

mostrarUsuarios2.forEach(user => {
    const listado = document.createElement('li');
    listado.className = 'li-listado';
    listado.textContent = `${user.name} ${user.lastname} (${user.username}) - ${user.career} - ${user.achievement}`;
    user18.appendChild(listado);
})


//Boton enviar solicitud
const form = document.getElementById('form-beca');
const modal = document.getElementById('modal');

// Manejo del evento submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        modal.style.display = 'block';
    } else {
        form.reportValidity();
    }
});
document.getElementById('redirect-button').addEventListener('click', function () {
    window.location.href = '../index.html';
});