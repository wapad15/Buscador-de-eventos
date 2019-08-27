class Interfaz {
  constructor() {
    // inicializa la app al instanciar
    this.init();
    //leer el resultado
    this.listado = document.getElementById("resultado-eventos");
  }

  //metodo para cuado inicialice la app
  init() {
    //llammos imprimir categorias de la rest apu
    this.imprimirCategorias();
  }

  //imprimir categorias
  imprimirCategorias() {
    const listaCategorias = eventbrite.obtenerCategorias().then(categorias => {
      const cats = categorias.categorias.categories;

      //seleccionar el select de categorias
      const selectCategoria = document.getElementById("listado-categorias");

      //recorremos el arreglo e imprimimos los <options>
      cats.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.id;
        option.appendChild(document.createTextNode(cat.name_localized));
        selectCategoria.appendChild(option);
      });
    });
  }
  //metodo para imprimir mensajes : 2 parametros , mesaje y clases
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.classList = clases;
    //agregamos texto
    div.appendChild(document.createTextNode(mensaje));
    //selecionamos un padre al cual inyectarle el div
    const buscadorDiv = document.querySelector("#buscador");
    buscadorDiv.appendChild(div);
    //quita el alert despues de 2.5 segundos
    setTimeout(() => {
      this.limpiarMensaje();
    }, 2500);
  }

  //desaarese el mensaje en caso de que exista
  limpiarMensaje() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
  //lee la respuesta de la API muestra todos los eventos encontrados en el DOM
  mostrarEventos(eventos) {
    //limpiamos los resultados previos
    this.limpiarResultados();
    //lee los eventos y agregamos a una variable
    const listaEventos = eventos.events;

    //recorre los eventos y crear su template
    listaEventos.forEach(evento => {
      this.listado.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img class="img-fluid mb-2" src="${
                  evento.logo !== null ? evento.logo.url : ""
                }">
             
               <div class="card-body">
                  <div class="card-text">
                      <h2 class="text-center">${evento.name.text}</h2>
                      <p class="lead text-info">Informacion del evento</p>
                      <p>${evento.description.text.substring(0, 200)}...</p>
                      
                      <span class="badge badge-primary">Capacidad: ${
                        evento.capacity
                      }</span>
                      <span class="badge badge-secundary">Fecha y hora: ${
                        evento.start.local
                      }</span>
                      <a href="${
                        evento.url
                      }" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                  </div>
               </div>
            </div>
        </div>
      `;
    });
  }
  //limpia los resultados previos
  limpiarResultados() {
    this.listado.innerHTML = "";
  }
}
