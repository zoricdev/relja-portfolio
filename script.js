function toggleMenu() {
  const navLinksContainer = document.querySelector(".nav-links-container");
  const img = document.querySelector(".hamburger-menu .icon"); // Select the icon inside the hamburger menu

  // Toggle the display of the navigation links
  if (navLinksContainer.style.display === "flex") {
    navLinksContainer.style.display = "none"; // Hide the menu
    img.src = "assets/Hamburger-Menu.svg"; // Change back to hamburger icon
  } else {
    navLinksContainer.style.display = "flex"; // Show the menu
    img.src = "assets/X-Icon.svg"; // Change to X icon
  }
}

const jobTitle = document.getElementById("job-title");
const titles = ["Web Developer", "Graphic Designer"];
let index = 0;

// Function to update the text with fade-in effect
function updateTitle() {
  // Remove the visible class to fade out
  jobTitle.classList.remove("fade-visible");

  // Wait for fade out to complete, then change text and fade in
  setTimeout(() => {
    index = (index + 1) % titles.length;
    jobTitle.textContent = titles[index];
    jobTitle.classList.add("fade-visible"); // Fade in
  }, 500); // Match this to the transition duration in CSS
}

// Trigger the first update immediately
updateTitle();

// Start the interval to update title every 2 seconds
setInterval(updateTitle, 2000);
