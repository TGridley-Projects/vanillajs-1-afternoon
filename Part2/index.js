console.log('The house always wins!');

let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value
    console.log(card);
}

function resetCard(){
    hearts.style.color = 'gray'
    clubs.style.color = 'grey'
    diamonds.style.color = 'gray'
    spades.style.color ='grey'
}