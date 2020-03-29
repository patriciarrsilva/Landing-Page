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

const navList = document.getElementById("navbar__list");

const sections = document.querySelectorAll("section");
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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
sections.forEach(section => {
  const dataValue = section.dataset.nav;
  const idValue = section.id;
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.textContent = dataValue;

  navLink.setAttribute("href", `#${idValue}`);
  navLink.setAttribute("class", "menu__link");
  navLink.setAttribute("data-sectionId", `${idValue}`);

  navItem.appendChild(navLink);

  fragment.appendChild(navItem);
});

navList.appendChild(fragment);

// Scroll to section on link click
navList.addEventListener("click", function(e) {
  e.preventDefault();

  if (e.target.nodeName === "A") {
    const targetSection = document.getElementById(e.target.dataset.sectionid);

    const sectionTopPosition =
      targetSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo(0, sectionTopPosition);
  }
});

// Set sections as active
// TODO don't remove active from section 1 until it scrolls to another section
document.addEventListener("scroll", function() {
  const borderPosition = 250;

  sections.forEach(section => {
    // getBoundingClientRect() returns the size of an element and its position relative to the viewport
    const sectionTopPosition = section.getBoundingClientRect().top;
    const sectionBottomPosition = section.getBoundingClientRect().bottom;

    if (
      sectionTopPosition <= borderPosition &&
      sectionBottomPosition > borderPosition
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
