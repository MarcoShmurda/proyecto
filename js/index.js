
let buscador = document.getElementById('buscador').addEventListener('click',()=>{
    let iconBuscador = document.querySelector('header i.fas')
    iconBuscador.classList.add('animation-icon')
    setTimeout(() => {
        iconBuscador.classList.remove('animation-icon')
    }, 300);
})


let iconUser = document.querySelector('.fas.fa-user').addEventListener('click',()=>{
    let boxSign = document.querySelector('.box-log-in')
    boxSign.classList.toggle('mover-log-in')
})

let step = document.getElementById('step')
let stepBack = document.getElementById('step-back')

    step.addEventListener('click', ()=>{
        step.classList.add('animate__flipOutY')
        stepBack.classList.add('animate__flipInY')
    })


var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

