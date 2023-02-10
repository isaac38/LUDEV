
//stea el hash de la url para, al recargar se regrese a la primera parte
window.location.hash = '#portada'


//nloke que controla el modificador active del link menu
const links = document.querySelectorAll('.header__link')
links.forEach((items, i) => {
    items.addEventListener('click', function () {


        links.forEach(elementos => elementos.classList.remove('header__link--active'))

        items.classList.add('header__link--active')
    })
})

const headerBtnMenu = document.getElementById('headerBtnMenu')
const sidebarBtnMenu = document.getElementById('sidebarBtnMenu')
const sidebar = document.querySelector('.sidebar')

headerBtnMenu.addEventListener('click', function () { 
    sidebar.classList.remove('sidebar--close')
    sidebar.classList.add('sidebar--open')
})

sidebar.addEventListener('click', function () { 
    sidebar.classList.remove('sidebar--open')
    sidebar.classList.add('sidebar--close')
})




//***** */


const linksSkills = document.querySelectorAll('.skills__li')
linksSkills.forEach((items, i) => {
    items.addEventListener('click', function () {
        linksSkills.forEach(elementos => elementos.classList.remove('skills__li--active'))

        items.classList.add('skills__li--active')
    })
})


