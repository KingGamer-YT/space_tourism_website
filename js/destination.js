// Select all list items within the element with class 'navigation' and store them in the 'links' variable
const links = document.querySelectorAll(".navigation li");

// Select the element with class 'image' and store it in the 'image' variable
let image = document.querySelector(".image");

// Select the element with class 'name' and store it in the 'name' variable
let name = document.querySelector(".name");

// Select the element with class 'description' and store it in the 'description' variable
let description = document.querySelector(".description");

// Select the element with class 'distance' and store it in the 'distance' variable
let distance = document.querySelector(".distance");

// Select the element with class 'travel' and store it in the 'travel' variable
let travel = document.querySelector(".travel");

// Initialize an empty array 'elements' which will be used to store the data from the JSON file
let elements = [];

// Fetch the JSON file from the specified URL and handle the response
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  // Convert the response to JSON format
  .then((res) => res.json())
  // Once the data is in JSON format, process it
  .then((data) => {
    // Loop through the 'destinations' array in the JSON data
    for (let i = 0; i < data.destinations.length; i++) {
      // Push each destination object into the 'elements' array
      elements.push(data.destinations[i]);
    }
  });

// Loop through each 'link' element (list items in the navigation)
links.forEach((link) => {
  // Add a click event listener to each 'link' element
  link.addEventListener("click", (e) => {
    // Prevent the default action of the click event (e.g., following a link)
    e.preventDefault();
    // Loop through each 'link' element again
    links.forEach((link) => {
      // Remove the 'active' class from each 'link' element to reset the state
      link.classList.remove("active");
    });
    // Add the 'active' class to the clicked 'link' element to highlight it
    link.classList.add("active");
    // Use a switch statement to handle the content change based on the clicked link's text
    switch (e.target.innerText) {
      // If the clicked link's text is 'Moon'
      case "Moon":
        // Update the 'image' element's source to the webp image URL for the Moon
        image.src = elements[0].images.webp;
        // Update the 'name' element's text to the name of the Moon
        name.innerText = elements[0].name;
        // Update the 'description' element's text to the description of the Moon
        description.innerText = elements[0].description;
        // Update the 'distance' element's text to the distance to the Moon
        distance.innerText = elements[0].distance;
        // Update the 'travel' element's text to the travel time to the Moon
        travel.innerText = elements[0].travel;
        // Exit the switch statement
        break;
      // If the clicked link's text is 'Mars'
      case "Mars":
        // Update the 'image' element's source to the webp image URL for Mars
        image.src = elements[1].images.webp;
        // Update the 'name' element's text to the name of Mars
        name.innerText = elements[1].name;
        // Update the 'description' element's text to the description of Mars
        description.innerText = elements[1].description;
        // Update the 'distance' element's text to the distance to Mars
        distance.innerText = elements[1].distance;
        // Update the 'travel' element's text to the travel time to Mars
        travel.innerText = elements[1].travel;
        // Exit the switch statement
        break;
      // If the clicked link's text is 'Europa'
      case "Europa":
        // Update the 'image' element's source to the webp image URL for Europa
        image.src = elements[2].images.webp;
        // Update the 'name' element's text to the name of Europa
        name.innerText = elements[2].name;
        // Update the 'description' element's text to the description of Europa
        description.innerText = elements[2].description;
        // Update the 'distance' element's text to the distance to Europa
        distance.innerText = elements[2].distance;
        // Update the 'travel' element's text to the travel time to Europa
        travel.innerText = elements[2].travel;
        // Exit the switch statement
        break;
      // If the clicked link's text is 'Titan'
      case "Titan":
        // Update the 'image' element's source to the webp image URL for Titan
        image.src = elements[3].images.webp;
        // Update the 'name' element's text to the name of Titan
        name.innerText = elements[3].name;
        // Update the 'description' element's text to the description of Titan
        description.innerText = elements[3].description;
        // Update the 'distance' element's text to the distance to Titan
        distance.innerText = elements[3].distance;
        // Update the 'travel' element's text to the travel time to Titan
        travel.innerText = elements[3].travel;
        // Exit the switch statement
        break;
      // Default case if the clicked link's text does not match any case
      default:
        // Do nothing
        break;
    }
  });
});
