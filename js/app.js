/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const buildNav = () => {
  const fragment = document.createDocumentFragment();

  sections.forEach(section => {
    const dataValue = section.dataset.nav;
    const idValue = section.id;
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = dataValue;

    navLink.setAttribute('href', `#${idValue}`);
    navLink.setAttribute('class', 'menu__link');
    navLink.setAttribute('data-sectionId', `${idValue}`);

    navItem.appendChild(navLink);

    fragment.appendChild(navItem);
  });

  navList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
const setSectionsAsActive = () => {
  const minBorderPosition = 250;
  const maxBorderPosition = 1020;

  sections.forEach(section => {
    // getBoundingClientRect() returns the size of an element and its position relative to the viewport
    const sectionBottomPosition = section.getBoundingClientRect().bottom;

    if (
      sectionBottomPosition > minBorderPosition &&
      sectionBottomPosition < maxBorderPosition
    ) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Scroll to anchor ID using scrollTO event
const scrollToSection = (e) => {
  e.preventDefault();

  if (e.target.nodeName === 'A') {
    const targetSection = document.getElementById(e.target.dataset.sectionid);

    const sectionTopPosition =
      targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo(0, sectionTopPosition);
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navList.addEventListener('click', scrollToSection);

// Set sections as active
document.addEventListener('scroll', setSectionsAsActive);