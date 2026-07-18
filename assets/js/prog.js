const carousel = document.querySelector(".carousel");
const menuMobile = document.querySelector(".menuMobile");
const nav = document.querySelector("nav");

document.querySelector('.next').addEventListener('click',() =>{
    carousel.scrollLeft += 280;
})
    
document.querySelector('.prev').addEventListener('click', () => {
    carousel.scrollLeft -= 280;
});

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.toggle("ativo");
    nav.classList.toggle("ativo");
});
