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
let timeoutID;

const header = document.getElementsByTagName('header')[0];

const main = document.getElementsByTagName('main')[0];

const navList = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const setLinksAsActive = () => {
  clearTimeout(timeoutID);

  timeoutID = setTimeout(function() {
    header.classList.add('page__header--hidden');
  }, 2000);
};

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
    if (section.id === 'section1') {
      navLink.classList.add('menu__link--active');
    }

    navItem.appendChild(navLink);

    fragment.appendChild(navItem);
  });

  navList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
const setSectionsAsActive = () => {
  header.classList.remove('page__header--hidden');

  const minBorderPosition = 250;
  const maxBorderPosition = 1020;

  sections.forEach(section => {
    const idValue = section.id;
    const navLink = document.querySelector(`[data-sectionid=${idValue}]`);

    // getBoundingClientRect() returns the size of an element and its position relative to the viewport
    const sectionBottomPosition = section.getBoundingClientRect().bottom;
    const isFirstSection = section.id === 'section1';
    const isFirstSectioninView = sectionBottomPosition > minBorderPosition;
    const isOtherSectioninView =
      minBorderPosition < sectionBottomPosition &&
      sectionBottomPosition < maxBorderPosition;

    if (
      (isFirstSection && isFirstSectioninView) ||
      (!isFirstSection && isOtherSectioninView)
    ) {
      section.classList.add('active');
      navLink.classList.add('menu__link--active');
    } else {
      section.classList.remove('active');
      navLink.classList.remove('menu__link--active');
    }
  });

  setLinksAsActive();
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = e => {
  e.preventDefault();

  if (e.target.nodeName === 'A') {
    const targetSection = document.getElementById(e.target.dataset.sectionid);

    const sectionTopPosition =
      targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo(0, sectionTopPosition);
  }
};

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

// Collapse sections
main.addEventListener('click', function(e) {
  if (e.target.nodeName === 'H2') {
    const dataH2 = e.target.dataset.h;
    const article = document.querySelector(`[data-article='${dataH2}']`);
    article.classList.toggle('article--hidden');
  }
});
