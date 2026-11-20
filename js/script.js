// ===== INICIO: cambiar contenido y estilos =====
const nombre = document.getElementById("nombre");
const cargo = document.getElementById("cargo");
const disponible = document.getElementById("disponible");
const btnCargo = document.getElementById("btnCargo");
const btnColor = document.getElementById("btnColor");

if (btnCargo) {
  btnCargo.addEventListener("click", function () {
    cargo.textContent = "Futuro Ingeniero de Sistemas | Desarrollador";   // texto plano
    disponible.innerHTML = "Disponible para <strong>pasantías</strong> y proyectos";   // con HTML
  });
}

if (btnColor) {
  let esNaranja = false;
  btnColor.addEventListener("click", function () {
    esNaranja = !esNaranja;
    nombre.style.color = esNaranja ? "#ff7a00" : "#0d3b8e";
    nombre.style.letterSpacing = esNaranja ? "3px" : "0px";
  });
}

// ===== PERFIL: agregar y quitar clases =====
const textoPerfil = document.getElementById("textoPerfil");

if (textoPerfil) {
  document.getElementById("btnResaltar").addEventListener("click", function () {
    textoPerfil.classList.add("resaltado");
  });
  document.getElementById("btnQuitar").addEventListener("click", function () {
    textoPerfil.classList.remove("resaltado");
  });
  document.getElementById("btnAlternar").addEventListener("click", function () {
    textoPerfil.classList.toggle("texto-grande");
  });
}

// ===== EXPERIENCIA: atributos =====
const imagenEmpresa = document.getElementById("imagenEmpresa");

if (imagenEmpresa) {
  const enlaceEmpresa = document.getElementById("enlaceEmpresa");
  const salida = document.getElementById("salidaAtributos");

  document.getElementById("btnVerAtributos").addEventListener("click", function () {
    salida.textContent = "src: " + imagenEmpresa.getAttribute("src") +
      " | alt: " + imagenEmpresa.getAttribute("alt") +
      " | href: " + enlaceEmpresa.getAttribute("href") +
      " | ¿tiene target?: " + enlaceEmpresa.hasAttribute("target");
  });

  document.getElementById("btnCambiarAtributos").addEventListener("click", function () {
    imagenEmpresa.setAttribute("src", "https://placehold.co/500x220/ff7a00/ffffff?text=Otra+Empresa");
    imagenEmpresa.setAttribute("alt", "Logo de otra empresa");
    enlaceEmpresa.setAttribute("href", "https://www.netlify.com");
    enlaceEmpresa.setAttribute("target", "_blank");
  });

  document.getElementById("btnQuitarAtributo").addEventListener("click", function () {
    enlaceEmpresa.removeAttribute("target");
  });
}

// ===== FORMACIÓN: 3 formas de escuchar eventos =====
// Forma 1: atributo onclick escrito en el HTML
function mostrarDetalle() {
  document.getElementById("detalleCarrera").classList.toggle("d-none");
}

const tarjetaUniv = document.getElementById("tarjetaUniv");

if (tarjetaUniv) {
  // Forma 2: propiedad del elemento
  tarjetaUniv.onmouseover = function () {
    tarjetaUniv.style.borderColor = "#ff7a00";
  };
  tarjetaUniv.onmouseout = function () {
    tarjetaUniv.style.borderColor = "#0d3b8e";
  };

  // Forma 3: addEventListener
  const campoComentario = document.getElementById("campoComentario");
  const contador = document.getElementById("contador");
  campoComentario.addEventListener("input", function () {
    contador.textContent = "Caracteres: " + campoComentario.value.length;
  });
}

// ===== PROYECTOS: crear, insertar y eliminar elementos =====
const btnAgregar = document.getElementById("btnAgregar");

if (btnAgregar) {
  const campoProyecto = document.getElementById("campoProyecto");
  const listaProyectos = document.getElementById("listaProyectos");

  btnAgregar.addEventListener("click", function () {
    const texto = campoProyecto.value.trim();
    if (texto === "") {
      alert("Escribe primero el nombre del proyecto");
      return;
    }

    const item = document.createElement("li");                 // crear
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.textContent = texto;

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "btn btn-sm btn-naranja";
    botonBorrar.textContent = "Eliminar";
    botonBorrar.addEventListener("click", function () {
      item.remove();                                           // eliminar
    });

    item.appendChild(botonBorrar);
    listaProyectos.prepend(item);                              // insertar al inicio
    campoProyecto.value = "";
  });
}