let header = document.querySelector('#header')

window.addEventListener("scroll", function(){
    header.classList.toggle('rolagem', window.scrollY > 0)
})