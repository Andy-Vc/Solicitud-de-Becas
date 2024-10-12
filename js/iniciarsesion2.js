//Usuarios para ingresar
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('formulario-button');
    
    const validarUsuarios = [
        { username: "I202401234", password: "contrasena1", name: "Jose Luis", lastname: "Miranda Garcia", number: "987654221" ,career: "Computación e Informática"},
        { username: "I202301234", password: "contrasena2", name: "Rosangela Juliana", lastname: "Fernandez Ruiz", number: "985741243",career: "Administración y Sistemas"},
        { username: "I202201234", password: "contrasena3", name: "Jackeline Elizabeth", lastname: "Chipana Caira", number: "987654210",career: "Administración de Empresas"},
        { username: "I202412345", password: "contrasena4", name: "Gabriela Lucia", lastname: "Fuentes Huaman", number: "936552149",career: "Marketing"},
        { username: "I202312345", password: "contrasena5", name: "Raúl Luis", lastname: "Cardenas Vega", number: "912457896",career: "Diseño Gráfico"},
        { username: "I202212345", password: "contrasena6", name: "Patricio Miguel", lastname: "Quispe Velasquez", number: "912345678",career: "Diseño de Videojuego"}
    ];
//Para validar el inicio de sesion y guardar los daatos para mostrar luego
    button.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usernameminus = username.toLowerCase();

        const usuarioValido = validarUsuarios.find(user => 
            user.username.toLowerCase() === usernameminus && user.password === password
        );

        if (usuarioValido) {
            localStorage.setItem('usuarioNombre', usuarioValido.name);
            localStorage.setItem('usuarioApellido', usuarioValido.lastname);
            localStorage.setItem('usuarioNumero', usuarioValido.number);
            localStorage.setItem('usuarioCodigo', usuarioValido.username );
            localStorage.setItem('usuarioCarrera', usuarioValido.career);
            window.location.href = './becasuperacion.html'; 
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});