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


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }
//         else {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

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

/*===== MIXITUP FILTER PORTFOLIO =====*/
const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio_item')

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/*===== SWIPER CAROUSEL =====*/


/*===== GSAP ANIMATION =====*/
gsap.from('.home_img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home_data', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.home_greeting, .home_name, .home_profession, .home_button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav_logo, .nav_toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav_item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home_social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })



/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })
// /*SCROLL ABOUT*/
// sr.reveal('section-title', {})
// sr.reveal('about_data', { delay: 200 })
// sr.reveal('about_img', { origin: 'left', delay: 400 })
// // sr.reveal('.about__profession', { delay: 400 })
// // sr.reveal('.about__text', { delay: 500 })
// // sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle', {})
// sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
// sr.reveal('.skills__img', { delay: 400 })