// Navbar

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
// End Navbar

// animation


ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.info-h1', { origin: 'top' });
// ScrollReveal().reveal('.contact form, .home-img, .motivation-container', { origin: 'bottom' });
