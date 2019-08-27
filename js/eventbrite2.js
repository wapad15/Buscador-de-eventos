class EventBrite {
  constructor() {
    this.token_outh = "EAUNUFWIOGUIM3LKANYQ";
    this.ordenar = "date";
  }
  //mostrar resultados de la busqueda
  async obtenerEventos(evento, categoria) {
    const respuestaEvento = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_outh}`,
    );
    //esperar la respuesta del evento y devolver;lo como JSON
    const eventos = await respuestaEvento.json();

    //retornamos los eventos
    return {
      eventos,
    };
  }
  //mobtiene las categorias en init()
  async obtenerCategorias() {
    //consultar las categorias a la rest API de event brite
    const respuestaCategorias = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_outh}`,
    );

    // esperar la respuesa de las categorias y devorver un JSOn
    const categorias = await respuestaCategorias.json();

    //devolvemos el resultado
    return {
      categorias,
    };
  }
}
