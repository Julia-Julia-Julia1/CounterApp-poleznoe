console.log('--JS--');

//вариант N1;
let count = 0;
// это как вариант N2;
const counterSelector = document.getElementById('counter');

function plus() {
    // counterSelector.innerText = ++count;
    document.getElementById('counter').innerText = ++count;
    // counterSelector.innerText =
    // counterSelector.innerText + 1;
    // Number(counterSelector.innerText) + 1;
    // document.getElementById('counter').innerText + 1;
    // Number(document.getElementById('counter').innerText) + 1;
}

function minus() {
    counterSelector.innerText = --count;

    // counterSelector.innerText =
    // counterSelector.innerText - 1;
    // counterSelector.innerText - 1;
    // document.getElementById('counter').innerText - 1;
    // Number(document.getElementById('counter').innerText) - 1;
}

function resert() {
    // Можно с 0, можно без. Этим действием мы экономим обращение к переменной.
    let count = 0;
    document.getElementById('counter').innerText = 0;
}


