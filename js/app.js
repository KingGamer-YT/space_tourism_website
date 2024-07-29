// Select the element with the class "open-menu" and assign it to the variable openMenu
const openMenu = document.querySelector(".open-menu");

// Select the element with the class "close-menu" and assign it to the variable closeMenu
const closeMenu = document.querySelector(".close-menu");

// Select the <nav> element within the <header> and assign it to the variable menu
const menu = document.querySelector("header nav");

// Add a click event listener to the openMenu element
// When the element is clicked, the following function is executed
openMenu.addEventListener("click", () => {
  // Add the class "active" to the menu element
  // This class is likely used to make the menu visible or change its display
  menu.classList.add("active");
});

// Add a click event listener to the closeMenu element
// When the element is clicked, the following function is executed
closeMenu.addEventListener("click", () => {
  // Remove the class "active" from the menu element
  // This class is likely used to hide the menu or change its display back to the default
  menu.classList.remove("active");
});
