class Interface {
    constructor() {
        this.listed = document.getElementById('resultado-eventos');
    }

    printCategory(select) {
        const listCategory = event.getCategory();
        listCategory
            .then(resp => resp.categories.forEach(category => {
                select.appendChild(this.createOptions(category));
            }))
            .catch(error => console.log(error));
    }

    createOptions(category) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        return option;
    }

    showMessages(message, className) {
        const divSearcher = document.getElementById('buscador');
        const div = document.createElement('div');
        div.className = className;
        div.textContent = message;
        divSearcher.appendChild(div);
        this.removeAlert();
    }

    removeAlert() {
        const alert = document.querySelector('.alert');
        if (alert)
            setTimeout(() => alert.remove(), 3000);
    }

    showResultEvents(eventInput, category) {
        event.getEvents(eventInput, category)
            .then(resp => {
                const results = document.getElementById('resultado-eventos');
                let template = '';
                resp.events.forEach(item => {
                    template += `
                    <div class='col-md-4 mb-4'>
                        <div class='card'>
                            <img class='img-fluid mb-2' src='${item.logo !== null ? item.logo.url : ''}' />
                        </div>

                        <div class='card-body'>
                            <div class='card-text'>
                                <h2 class='text-center'>${item.name.text}</h2>
                                <p class='lead text-info'>Información del evento</p>
                                <p>${item.description.text.substring(0,280)}...</p>
                                <span class='badge badge-primary'>Capacidad: ${item.capacity}</span>
                                <span class='badge badge-secondary'>Fecha y hora: ${item.start.local}</span>
                                <a href='${item.url}' target='__blank' class='btn btn-primary btn-block mt-4'>Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                `;
                    results.innerHTML = template;
                });
            })
            .catch(error => console.log(error));
    }
}