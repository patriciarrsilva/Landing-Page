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
const fragment = document.createDocumentFragment();

const sections = document.querySelectorAll("section");
// console.log(sections);

const navList = document.getElementById("navbar__list");
// console.log(navList);
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
sections.forEach(section => {
  const dataValue = section.dataset.nav;
  const idValue = section.id;
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.textContent = dataValue;

  navLink.setAttribute("href", `#${idValue}`);
  navLink.setAttribute("class", "menu__link");

  navItem.appendChild(navLink);

  fragment.appendChild(navItem);
});
// console.log(fragment);

navList.appendChild(fragment);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
