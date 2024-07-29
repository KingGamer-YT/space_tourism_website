// Select all elements with the class 'dot' that are children of the element with class 'dots' and store them in the 'dots' variable
const dots = document.querySelectorAll(".dots .dot");

// Select the element with the class 'role' and store it in the 'role' variable
let role = document.querySelector(".role");

// Select the element with the class 'name' and store it in the 'name' variable
let name = document.querySelector(".name");

// Select the element with the class 'bio' and store it in the 'bio' variable
let bio = document.querySelector(".bio");

// Select the element with the class 'image' and store it in the 'image' variable
let image = document.querySelector(".image");

// Initialize an empty array 'elements' which will be used to store the crew data from the JSON file
let elements = [];

// Fetch the JSON file from the specified URL and handle the response
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  // Convert the response to JSON format
  .then((res) => res.json())
  // Once the data is in JSON format, process it
  .then((data) => {
    // Loop through the 'crew' array in the JSON data
    for (let i = 0; i < data.crew.length; i++) {
      // Push each crew member object into the 'elements' array
      elements.push(data.crew[i]);
    }
  });

// Loop through each 'dot' element within the 'dots' element
dots.forEach((dot) => {
  // Add a click event listener to each 'dot' element
  dot.addEventListener("click", (e) => {
    // Loop through each 'dot' element again
    dots.forEach((dot) => {
      // Remove the 'active' class from each 'dot' element to reset the state
      dot.classList.remove("active");
    });
    // Add the 'active' class to the clicked 'dot' element to highlight it
    dot.classList.add("active");
    
    // Retrieve the dataset attribute 'num' from the clicked 'dot' element
    // 'dot.dataset.num' contains the number of the crew member (e.g., '1', '2', etc.)
    // Subtract 1 because the 'elements' array is zero-indexed
    let index = dot.dataset.num - 1;
    
    // Update the 'role' element's text with the role of the crew member corresponding to the clicked dot
    role.innerText = elements[index].role;
    // Update the 'name' element's text with the name of the crew member corresponding to the clicked dot
    name.innerText = elements[index].name;
    // Update the 'bio' element's text with the biography of the crew member corresponding to the clicked dot
    bio.innerText = elements[index].bio;
    // Update the 'image' element's source to the webp image URL for the crew member corresponding to the clicked dot
    image.src = elements[index].images.webp;
  });
});
