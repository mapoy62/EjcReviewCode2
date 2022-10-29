var formulario = document.querySelector(".formulario")

//Agregamos la funcionalidad del botónsubmit
onsubmit = (edad) => {

  edad.preventDefault();
  
  //Modificamos los nombres de los inputs para que sean más descriptivos
  var nombre = formulario.name.value;
  var edad = formulario.age.value;
  var nacionalidad = document.getElementById("nationality");
  //Reasignamos valores en lugar de crear una nueva variable
  nacionalidad = nacionalidad.options[nacionalidad.selectedIndex].text;

  console.log(nombre, edad)
  console.log(nacionalidad)

  //Si no se ingresa un nombre o una edad correcta, se envía un mensaje de error a consola
  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

  //Si se ingresan los datos correctamente, se agregan a la lista de invitados
if ((nombre.length > 0) && (edad > 18 && edad < 120) ) {
  //Llamamos a la función para agregar invitados
      agregarInvitado(nombre, edad, nacionalidad);
  }
}

//Agregar invitadou na vez creada la lista, se crea un botón para eliminar el invitado
var botonBorrar = document.createElement("button")
    botonBorrar.textContent = "Eliminar invitado"
    botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad){

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

    var lista = document.getElementById("lista-de-invitados")

    var elementoLista = document.createElement("div")
      elementoLista.classList.add("elemento-lista")
      lista.appendChild(elementoLista)

    function crearElemento(descripcion, valor) {
        var spanNombre = document.createElement("span")
        var inputNombre = document.createElement("input")
        var espacio = document.createElement("br")
        spanNombre.textContent = descripcion + ": "
        inputNombre.value = valor 
        elementoLista.appendChild(spanNombre)
        elementoLista.appendChild(inputNombre)
        elementoLista.appendChild(espacio)
    }

    crearElemento("Nombre", nombre)
    crearElemento("Edad", edad)
    crearElemento("Nacionalidad", nacionalidad)


    var botonBorrar = document.createElement("button")
    botonBorrar.textContent = "Eliminar invitado"
    botonBorrar.id = "boton-borrar"
    var corteLinea = document.createElement("br")
    elementoLista.appendChild(corteLinea)
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
    }
}
