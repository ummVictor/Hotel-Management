// created on 7/20 
// Cain Coyco

// Get all the links on the page
const links = document.querySelectorAll("a");

// Add a click event listener to each link
for (let link of links) {
  link.addEventListener("click", function(e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Get the href of the link
    const href = link.href;

    // Open the link in a new tab
    window.open(href, "_blank");
  });
}
