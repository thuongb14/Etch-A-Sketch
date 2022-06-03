let click = true;
let color = "black"
const board = document.querySelector('.board');
const box = document.querySelectorAll('.box')
const submitBtn = document.querySelector('.submit')
const colorChoice = document.querySelector('.color')
const drawMode = document.querySelector('.mode')

function createDivs(size) {

    for (let i = 0; i < (size * size); i++) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let newDiv = document.createElement('div');

    newDiv.style.backgroundColor = 'white';
    newDiv.className = 'box'
    board.insertAdjacentElement('beforeend', newDiv)

    box.forEach((div) => div.remove())

    newDiv.addEventListener('mouseover', drawColor) 
    }
}

createDivs(16)

//Change canva size
function changeSize(input) {
    if(input >=0 && input <= 64) {
        createDivs(input)
    } else {
        alert('Please enter a number from 1-64')
    }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
})


//Auto color function
function drawColor() {
    if (click) {
        this.style.backgroundColor = color;
        colorChoice.addEventListener('change', function(e) {
            color = e.target.value
        })
        if (color == 'random') {
        this.style.backgroundColor = 
            `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`

        } else {
        this.style.backgroundColor = color;
        }
    }
}


//change color button
function buttonColor(choice) {
        color = choice;
    }  

//reset
function reset() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

document.querySelector('body').addEventListener('click', function() {
    click = !click;
    if(click == true) {
        drawMode.textContent = 'Mode: Drawing Mode';
    } else if (click == false) {
        drawMode.textContent = 'Mode: Non-Drawing Mode'
    }

})
