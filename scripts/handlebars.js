const cats = {
    "cats": [
        {
            "id": 1,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 13,
            "numbers-of-paws": 4,
            "price": "15 000",
            "photo": "./images/funnycat.png",
            "discount": true,
            "like": true,
            "sold": false
        },
        {
            "id": 12,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 8,
            "numbers-of-paws": 2,
            "price": "20 000",
            "photo": "./images/lazycat.png",
            "discount": false,
            "like": false,
            "sold": true
        },
        {
            "id": 13,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 10,
            "numbers-of-paws": 3,
            "price": "30 000",
            "photo": "./images/angrycat.png",
            "discount": true,
            "like": true,
            "sold": false
        },
        {
            "id": 4,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 13,
            "numbers-of-paws": 4,
            "price": "40 000",
            "photo": "./images/funnycat.png",
            "discount": false,
            "like": false,
            "sold": true
        },
        {
            "id": 5,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 11,
            "numbers-of-paws": 2,
            "price": "15 000",
            "photo": "./images/lazycat.png",
            "discount": false,
            "like": false,
            "sold": false
        },
        {
            "id": 6,
            "name": "Кот полосатый",
            "color": "Коричневый",
            "age": 9,
            "numbers-of-paws": 5,
            "price": "25 000",
            "photo": "./images/angrycat.png",
            "discount": true,
            "like": false,
            "sold": true
        }
    ]
};
const catsTemplate = document.querySelector('#cats-template').textContent;
const render = Handlebars.compile(catsTemplate);
const catsDivs = render(cats);
const cardList = document.querySelector('.card__list');
cardList.innerHTML = catsDivs;




