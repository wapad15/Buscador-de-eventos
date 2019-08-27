//instaciamos las clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//event lisenert al buscador
document.getElementById("buscarBtn").addEventListener("click", e => {
  e.preventDefault();

  //leer el texto del imput buscar
  const textoBuscador = document.getElementById("evento").value;
  //leemos la oppcion del selec
  const categorias = document.getElementById("listado-categorias");
  const categoriasSeleccionada =
    categorias.options[categorias.selectedIndex].value;

  //revisar que no se tenga el campo del  buscador vacio
  if (textoBuscador !== "") {
    //cuando tpdp esta correcto
    eventbrite
      .obtenerEventos(textoBuscador, categoriasSeleccionada)
      .then(eventos => {
        if (eventos.eventos.events.length > 0) {
          //si hay eentos mostrar el reultado
          ui.mostrarEventos(eventos.eventos);
        } else {
          //enviamos una alerta de que no existen eventos
          ui.mostrarMensaje(
            "no existen eventos con estas especificaciones",
            "alert alert-danger mt-4",
          );
        }
      });
  } else {
    // mostrar mensaje para que imprima el error
    ui.mostrarMensaje("escribe algo en el buscador", "alert alert-danger mt-4");
  }
});
