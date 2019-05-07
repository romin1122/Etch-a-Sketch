let container = document.createElement('div');
container.setAttribute('id', "container");
document.body.appendChild(container);


let column = 'repeat(' + '' + ', 1fr)';
function columnFunction(value) {
    column = 'repeat(' + value + ', 1fr)';
}

let row = 'repeat(' + '' + ', 1fr)';
function rowFunction(value) {
    row = 'repeat(' + value + ', 1fr)';
}


let items = '';

//grid item creator function.
let rAmount = '';
function itemCreator(amount) {
    rAmount = amount;
    amount *= amount;
    amount += 1;
    for (let i = 1; i < amount; i++) {
        items = document.createElement('div');
        items.setAttribute('class', 'items')
        container.appendChild(items);
    }

    //height = width
    columnFunction(rAmount);
    rowFunction(rAmount);
    container.style.gridTemplateColumns = column;
    container.style.gridTemplateRows = row;
    items = document.querySelectorAll('.items');
    let itemHeight = (960 / rAmount) + 'px';
    for (i = 0; i < items.length; i++) {
        items[i].style.height = itemHeight;
        items[i].style.width = itemHeight;
    }

    //mouseover
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseover', () => {
            items[i].style.background = 'black';
        });
    }
}

itemCreator(16);

//clear squares
items = document.querySelectorAll('.items');
const screenClear = document.querySelector('#clear');
screenClear.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
        container.removeChild(items[i]);
    }
    let squares = prompt('How many squares do you want per side?', 16);
    itemCreator(squares);
})