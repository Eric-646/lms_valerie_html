function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.menu-burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('open-nav');
        
    })
}  
toggleMenu(); 