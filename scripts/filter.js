// Функция сортировки по возарастанию:
function sortIncrease(querySelector) {
    var nodeList = document.querySelectorAll('.card__item');
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {    
        itemsArray.push(parent.removeChild(nodeList[i]));
    }
    itemsArray.sort(function(nodeA, nodeB) {
        var textA = nodeA.querySelector(`.${querySelector}`).textContent;
        var textB = nodeB.querySelector(`.${querySelector}`).textContent;
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;
        return 0;
    })
    .forEach(function(node) {
        parent.appendChild(node)
    });
}

// Функция сортировки по убыванию:
function sortWaning(reverse, querySelector) {
    var nodeList = document.querySelectorAll('.card__item');
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {    
        itemsArray.push(parent.removeChild(nodeList[i]));
    }
    itemsArray.sort(function(nodeA, nodeB) {
        var textA = nodeA.querySelector(`.${querySelector}`).textContent;
        var textB = nodeB.querySelector(`.${querySelector}`).textContent;
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) {
            return reverse ? 1 : -1;
        }
        if (numberA > numberB) { 
            return reverse ? -1 : 1;
        }
        return 0;
    })
    .forEach(function(node) {
        parent.appendChild(node)
    });
}

const filterButtonByPrice = document.querySelector('.filter-price-sort');
const filterButtonByPriceReverse = document.querySelector('.filter__button--price');

const filterButtonByAge = document.querySelector('.filter-age-sort');
const filterButtonByAgeReverse = document.querySelector('.filter__button--age');



filterButtonByPrice.addEventListener('click', (e) => {
    e.preventDefault();
    sortIncrease('price');   

    filterButtonByPrice.style.display = 'none';
    filterButtonByPriceReverse.style.display = 'block';
})

filterButtonByPriceReverse.addEventListener('click', (e) => {
    e.preventDefault();
    sortWaning(1, 'price');   

    filterButtonByPriceReverse.style.display = 'none';
    filterButtonByPrice.style.display = 'block';
})


filterButtonByAge.addEventListener('click', (e) => {
    e.preventDefault();
    sortIncrease('age');      

    filterButtonByAge.style.display = 'none';
    filterButtonByAgeReverse.style.display = 'block';
})

filterButtonByAgeReverse.addEventListener('click', (e) => {
    e.preventDefault();
    sortWaning(1, 'age');      

    filterButtonByAgeReverse.style.display = 'none';
    filterButtonByAge.style.display = 'block';
})