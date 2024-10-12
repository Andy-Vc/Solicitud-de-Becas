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
        window.location.href = './iniciarsesion.html';
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

        //Si en beca inclusion no pedir el required para dichi input"
        if (seleccion === 'beca-inclusion') {
            const otraDiscapacidadInput = document.getElementById('otra-discapacidad');
            otraDiscapacidadInput.required = false; // No requiere este campo
        }
    }
}
//Para cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', function () {
    localStorage.clear();
    window.location.href = './iniciarsesion.html';
})
//Para agregar una discapacidad por si no esta en el select
document.getElementById('discapacidad').addEventListener('change', function () {
    const otraDisc = document.getElementById('otra-discapacidad');
    const otraLabel = document.getElementById('otra-label');
    if (this.value === 'otra') {
        otraDisc.style.display = 'block';
        otraLabel.style.display = 'block';
    } else {
        otraDisc.style.display = 'none';
        otraLabel.style.display = 'none';
    }
})
//Mostrar los Beneficiados de la beca Inclusion
const mostrarUsuarios = [
    { username: "I202401234", name: "Jose Luis", lastname: "Miranda Garcia", career: "Computación e Informática" },
    { username: "I202301234", name: "Rosangela Juliana", lastname: "Fernandez Ruiz", career: "Administración y Sistemas" },
    { username: "I202423456", name: "Natalia", lastname: "Alania Pinho", career: "Administración de Empresas" }

]
const userList = document.getElementById('ul-listado');

mostrarUsuarios.forEach(user => {
    const li = document.createElement('li');
    li.className = 'li-listado';
    li.textContent = `${user.name} ${user.lastname} (${user.username}) - ${user.career}`;
    userList.appendChild(li);
})

//Mostrar beneficiados beca 18
const mostrarUsuarios2 = [
    { username: "I202434567", name: "Angel Gabriel", lastname: "Arteaga Limaco", career: "Mécanica Automotriz" },
    { username: "I202323456", name: "Jose Manuel", lastname: "Adanaque Zuasnabar", career: "Computación e Informática" },
    { username: "I202334567", name: "Alvaro Angel", lastname: "Asmat Ñaupa", career: "Electrónica Industrial" },
    { username: "I202223456", name: "Diego Luis", lastname: "Sulca Vargas", career: "Administración de Sistemas" },
    { username: "I202234567", name: "Melisa Alondra", lastname: "Torres Sanchez", career: "Administración de Empresas" }
]

const user18 = document.getElementById('ul-listado-2')

mostrarUsuarios2.forEach(user => {
    const listado = document.createElement('li');
    listado.className = 'li-listado';
    listado.textContent = `${user.name} ${user.lastname} (${user.username}) - ${user.career}`;
    user18.appendChild(listado);
})

//Mostrar beneficiado beca Socioeconómica
const mostrarUsuario3 = [
    { username: "I202402567", name: "Javier Armando", lastname: "Carrasco Ruiz", career: "Mécanica Automotriz" },
    { username: "I201912345", name: "Luana Liz", lastname: "Rodriguez Lucano", career: "Computación e Informática" },
    { username: "I202012354", name: "Elizabeth Estefani", lastname: "Quispe Mendoza", career: "Gestion de Recursos Humanos" },
    { username: "I201925364", name: "Armando Angel", lastname: "Domingueza Hernandez", career: "Mecatrónica Industrial" }
]

const becaSocio = document.getElementById('ul-listado-3')

mostrarUsuario3.forEach(user => {
    const lista = document.createElement('li')
    lista.className = 'li-listado'
    lista.textContent = `${user.name} ${user.lastname} (${user.username}) - ${user.career}`
    becaSocio.appendChild(lista)
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