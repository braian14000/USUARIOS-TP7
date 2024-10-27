class CrearUsuario {
  constructor(nombre, apellido, gmail, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.gmail = gmail;
      this.telefono = telefono;
  }
  getNombre() {
    return this.nombre;
}

getApellido() {
    return this.apellido;
}
getTelefono() {
  return this.telefono;
}

getGmail() {
  return this.gmail;
}

}

let lista = [];
let i = 0;

function guardarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const gmail = document.getElementById("gmail").value;
  const telefono = document.getElementById("telefono").value;

  const nuevoUsuario = new CrearUsuario(nombre, apellido, gmail, telefono);
  lista.push(nuevoUsuario);

  alert("Usuario guardado exitosamente");

    // Reseteo de todos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("gmail").value = "";
    document.getElementById("telefono").value = "";

  OcultarForm();
  i = lista.length - 1; 
  mostrarPersona();
}



function mostrarPersona() {
  if (lista.length > 0) {
    document.getElementById("info").innerHTML =
    "<p><strong>Nombre:</strong> " + lista[i].getNombre() + "</p>" +
    "<p><strong>Apellido:</strong> " +lista[i].getApellido() + "<br>" +
    "<p><strong>Teléfono:</strong> "+ lista[i].getTelefono() + "<br>" +
    "<p><strong>Gmail:</strong>  " +  lista[i].getGmail();
  } else {
    alert("No hay personas para mostrar");
  }
}





function mostrarFormulario() {
  const formulario = document.getElementById("formularioUsuario");
  formulario.style.display = "block"; 
}

function OcultarForm() {
  const formulario = document.getElementById("formularioUsuario");
  formulario.style.display = "none"; 
}


function mostrarPersonaAnterior() {
  if (i > 0) {í
    i--; 
    mostrarPersona(); 

  }
}

function mostrarPersonaSiguiente() {
  if (i < lista.length - 1) {
    i++; 
    mostrarPersona(); 
  }
}