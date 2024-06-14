/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
     navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAcction = () =>{
    const navMenu = document.getElementById('nav-menu');

    // when we click on each nav-link, we remove the show menu click
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAcction));
/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');


}
window.addEventListener('scroll', shadowHeader);



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_azp8hqa', 'template_gyopx8h', '#contact-form', 'a5MXm3fz4DiCAJeEr')
    .then(() =>{
        contactMessage.textContent = "Message sent successfully ✅"

        setTimeout(() => {
           contactMessage.textContent = '' 
        }, 5000);

        // clear input fields
        contactForm.reset()

    })
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
