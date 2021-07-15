const burger = document.querySelector('#burger');
const Menu = document.querySelector('.link')
console.log(Menu);

burger.addEventListener('click', function(e){
    Menu.classList.toggle('link-active')
})


const Links = document.querySelectorAll('.link li')
console.log(Links)

Array.from(Links).forEach(function(Li){
    Li.addEventListener('click', function(e){
        Menu.classList.toggle('link-active')
    })
})