/*===== SHOW MENU =====*/
const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*SCROLL ABOUT*/
// sr.reveal('section-title', {})
sr.reveal('.section-title', {})
// sr.reveal('.about_data', {})
sr.reveal('.about_description', { origin: 'left', delay: 200 })
sr.reveal('.about_description-2', { origin: 'left', delay: 500 })
sr.reveal('.about_img', { origin: 'right', delay: 200 })
// sr.reveal('.about__profession', { delay: 400 })
// sr.reveal('.about__text', { delay: 500 })
// sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills_img', { origin: 'right', delay: 200 })


/*Change Image in Skills Section*/
document.addEventListener('DOMContentLoaded', function() {
    // Get all the elements with the class 'skills__name'
    const skillItems = document.querySelectorAll('.skills__name');
    
    // Get the image element to change
    const imgChange = document.querySelector('.imgchange');
    
    // Add event listeners to each skill item
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            // Change the image source based on the data attribute
            imgChange.src = item.getAttribute('data-img');
        });

        // Optional: Change back to the original image when the mouse leaves
        item.addEventListener('mouseout', function() {
            imgChange.src = 'assets/img/meee.png';
        });
    });
});