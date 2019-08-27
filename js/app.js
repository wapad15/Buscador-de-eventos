const sendBtn = document.getElementById('buscarBtn');
const listCategory = document.getElementById('listado-categorias');
const inputEvent = document.getElementById('evento');

const event = new EventBrite();
const ui = new Interface();

document.addEventListener(
    'DOMContentLoaded',
    e => ui.printCategory(listCategory)
);

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    const categorySelected = listCategory.options[listCategory.selectedIndex].value;
    validateField(inputEvent.value, categorySelected);
});

validateField = (dataInput, categorySelected) => {
    let message = 'El campo evento no puede estar vacio';
    if (dataInput !== '') {
        ui.showResultEvents(dataInput, categorySelected);
    } else
        ui.showMessages(message, 'alert alert-danger mt-4');
}