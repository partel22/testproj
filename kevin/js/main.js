// Show and Hide menu
const navMenu = document.getElementById('navMenu'),
  navToggle = document.getElementById('navToggle'),
  navClose = document.getElementById('navClose')

// Show menu
// Validate if constant exixts
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('showMenu')
  })
}

// Hide Menu
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('showMenu')
  })
}

// Remove menu
const navLink = document.querySelectorAll('.navLink')
function linkAction() {
  const navMenu = document.getElementById('navMenu')
  // When we click on each navLink, we remove the menu
  navMenu.classList.remove('showMenu')
}
navLink.forEach((eachLink) => eachLink.addEventListener('click', linkAction))

// Skills
const skillsContent = document.getElementsByClassName('skillsContent'),
  skillsHeader = document.querySelectorAll('.skillsHeader')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skillsContent skillsClose'
  }
  if (itemClass === 'skillsContent skillsClose') {
    this.parentNode.className = 'skillsContent skillsOpen'
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener('click', toggleSkills)
})

// Qualification
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualificationActive')
    })
    target.classList.add('qualificationActive')

    tabs.forEach((tab) => {
      tab.classList.remove('qualificationActive')
    })
    tab.classList.add('qualificationActive')
  })
})

// Services
// Modal
const modalViews = document.querySelectorAll('.servicesModal'),
  modalButtons = document.querySelectorAll('.servicesButton'),
  modalCloses = document.querySelectorAll('.servicesModalClose')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('activeModal')
}

modalButtons.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('activeModal')
    })
  })
})

// Portfolio
// Swiper
let swiper = new Swiper('.portfolioContainer', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navMenu a[href*=' + sectionId + ']')
        .classList.add('activeLink')
    } else {
      document
        .querySelector('.navMenu a[href*=' + sectionId + ']')
        .classList.remove('activeLink')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// Change Background Header
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scrollHeader class to header tag
  if (this.scrollY >= 80) {
    nav.classList.add('scrollHeader')
  } else {
    nav.classList.remove('scrollHeader')
  }
}

window.addEventListener('scroll', scrollHeader)

// Show Scroll
function scrollUp() {
  const scrollUp = document.getElementById('scrollUp')
  // When the scroll is higher than 500
  if (this.scrollY >= 500) {
    scrollUp.classList.add('showScroll')
  } else {
    scrollUp.classList.remove('showScroll')
  }
}

window.addEventListener('scroll', scrollUp)

// Dark Light Theme
const themeButton = document.getElementById('themeButton'),
  darkTheme = 'dark-theme',
  iconTheme = 'uil-sun'

// Previously selected
const selectedTheme = localStorage.getItem('selectedTheme'),
  selectedIcon = localStorage.getItem('selectedIcon')

// Current Theme
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light',
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Validate previously chosen
if (selectedTheme) {
  // if validation fulfilled
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

// Activate / Deactivate theme
themeButton.addEventListener('click', () => {
  // Add or remove dark icon / theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save thme and current icon
  localStorage.setItem('selectedTheme', getCurrentTheme())
  localStorage.setItem('selectedIcon', getCurrentIcon())
})
