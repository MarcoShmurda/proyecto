
let buscador = document.getElementById('buscador').addEventListener('click',()=>{
    let iconBuscador = document.querySelector('header nav i.fas')
    iconBuscador.classList.add('animation-icon')
    setTimeout(() => {
        iconBuscador.classList.remove('animation-icon')
    }, 300);
})


let iconUser = document.querySelector('.fas.fa-user').addEventListener('click',()=>{
    let boxSign = document.querySelector('.box-log-in')
    boxSign.classList.toggle('mover-log-in')
})