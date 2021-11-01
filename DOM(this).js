// получаем элементы DOM и меняем значения из input в h1 (динамика, задний фон)

let button = document.querySelector('button') //  Это ноды
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHand() {
    console.log('ckicked');
    h1.textContent = input.value;
    
}

// события мыши, метод this

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red' //элемент меняет цвет при наведении
    this.style.backgroundColor = 'transporent';
})

h1.addEventListener('mouseleave', function () {
    this.style.color = 'black' // при уведении мыши цвет меняется
    this.style.backgroundColor = 'yellow';
    
})


button.addEventListener('click',buttonHand)