const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmar = document.getElementById('confirmar');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');

function validar() {
  let valido = true;

  // Nombre
  if (nombre.value.length < 3) {
    document.getElementById('error-nombre').textContent = "Mínimo 3 caracteres.";
    valido = false;
  } else {
    document.getElementById('error-nombre').textContent = "";
  }

  // Email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    document.getElementById('error-email').textContent = "Correo no válido.";
    valido = false;
  } else {
    document.getElementById('error-email').textContent = "";
  }

  // Contraseña
  const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length < 8 || !regexPassword.test(password.value)) {
    document.getElementById('error-password').textContent = "Mínimo 8 caracteres, un número y un carácter especial.";
    valido = false;
  } else {
    document.getElementById('error-password').textContent = "";
  }

  // Confirmación
  if (confirmar.value !== password.value) {
    document.getElementById('error-confirmar').textContent = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById('error-confirmar').textContent = "";
  }

  // Edad
  if (parseInt(edad.value) < 18) {
    document.getElementById('error-edad').textContent = "Debes ser mayor de 18 años.";
    valido = false;
  } else {
    document.getElementById('error-edad').textContent = "";
  }

  // Habilitar botón
  enviar.disabled = !valido;
}

// Escuchar cambios
[nombre, email, password, confirmar, edad].forEach(campo => {
  campo.addEventListener('input', validar);
});

// Enviar formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Formulario enviado correctamente.');
});