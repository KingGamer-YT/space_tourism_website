// Select all elements with the class 'num' that are children of the element with class 'enumirate' and store them in the 'btns' variable
const btns = document.querySelectorAll(".enumirate .num");

// Select the element with class 'name' and store it in the 'name' variable
let name = document.querySelector(".name");

// Select the element with class 'description' and store it in the 'description' variable
let description = document.querySelector(".description");

// Select the element with class 'image' and store it in the 'image' variable
let image = document.querySelector(".image");

// Initialize an empty array 'allData' to store technology data fetched from the JSON file
let allData = [];

// Initialize a variable 'num' to keep track of the current technology index
let num = 0;

// Initialize a variable 'img' to store the image orientation ('portrait' or 'landscape')
let img = "";

// Fetch the JSON file from the specified URL and handle the response
fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  // Convert the response to JSON format
  .then((res) => res.json())
  // Once the data is in JSON format, process it
  .then((data) => {
    // Loop through the 'technology' array in the JSON data
    for (let i = 0; i < data.technology.length; i++) {
      // Push each technology object into the 'allData' array
      allData.push(data.technology[i]);
    }
  });

// Immediately-invoked function expression (IIFE) to handle window resizing and initial load
(function () {
  // Set event listeners for window resize and load events
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  // Function to handle displaying the correct image based on window size
  function displayWindowSize() {
    // Get the current width of the window
    let myWidth = window.innerWidth;

    // Check if the window width is greater than or equal to 1100 pixels
    if (myWidth >= 1100) {
      // Set the image orientation to 'portrait' for larger screens
      img = "portrait";
    } else {
      // Set the image orientation to 'landscape' for smaller screens
      img = "landscape";
    }
    // Update the 'image' element's source based on the current technology data and image orientation
    image.src = allData[num].images[img];
  }
})();

// Loop through each 'btn' element within the 'btns' NodeList
btns.forEach((btn) => {
  // Add a click event listener to each 'btn' element
  btn.addEventListener("click", () => {
    // Loop through each 'btn' element again
    btns.forEach((btn) => {
      // Remove the 'active' class from each 'btn' element to reset the state
      btn.classList.remove("active");
    });
    // Add the 'active' class to the clicked 'btn' element to highlight it
    btn.classList.add("active");

    // Update the 'num' variable to the index of the clicked button
    // The 'innerText' of the button is assumed to be a 1-based index (e.g., '1', '2', etc.)
    num = btn.innerText - 1;

    // Update the 'name' element's text with the name of the selected technology
    name.innerText = allData[num].name;
    // Update the 'description' element's text with the description of the selected technology
    description.innerText = allData[num].description;
    // Update the 'image' element's source to the correct image URL based on the current technology data and image orientation
    image.src = allData[num].images[img];
  });
});
