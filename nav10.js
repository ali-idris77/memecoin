let control = document.querySelector('.coslider');
let navBar = document.querySelector('.slide');
let liks = document.querySelector('.evert')

control.addEventListener('click', ()=>{
    control.classList.toggle('active')
    navBar.classList.toggle('active')
})

    
liks.addEventListener('click', ()=>{
    control.classList.remove('active')
    navBar.classList.remove('active')
})
    
