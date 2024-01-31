let cards = [
    {id:1,name: 'Карточка 1', surname: 'Яблоко', grade: '5+'},
    {id:2,name: 'Карточка 2', surname: 'Груша', grade: '5+'},
    {id:3,name: 'Карточка 3', surname: 'Арбуз', grade: '5+'},
    {id:4,name: 'Карточка 4', surname: 'Морковь', grade: '5+'},
    {id:5,name: 'Карточка 5', surname: 'Огурец', grade: '5+'},
    {id:6,name: 'Карточка 6', surname: 'Баклажан', grade: '5+'},
    {id:7,name: 'Карточка 7', surname: 'Тыква', grade: '5+'},
    {id:8,name: 'Карточка 8', surname: 'Редиска', grade: '5+'},
    {id:9,name: 'Карточка 9', surname: 'Помидор', grade: '5+'},
    {id:10,name: 'Карточка 10', surname: 'Горох', grade: '5+'},
]

let win = [2,4]
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = []
let timer;
let elem = document.querySelector('.list')
for (let card of cards) {
elem.insertAdjacentHTML('beforeend', `
<div class="card" id="${card.id}" onclick='hello(${card.id})'>
    <h4 class="name">${card.name}</h4>
    <p class="surname">${card.surname}</p>
    <p class="grade">${card.grade}</p>
</div>
    `
    )
}
function hello(id) {
  
    if (win.length !== 0){
        console.log(id)
        document.getElementById(id).hidden = true
        for (let i = 0; i<win.length; i++) 
            if (id == win[i]){
            win.splice(win.indexOf(id), 1)
            alert('Вы угадали карточку!');
        } if (win.length === 0) {
            alert('Вы выиграли!');
            document.getElementById(id).hidden = true;
        }
    } else{
        document.querySelector('.list').innerHTML = '<h1>Игра окончена!</h1>'
    }
    




};

