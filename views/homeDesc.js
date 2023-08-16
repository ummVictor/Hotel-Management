// Module name: Welcome
// Date: 07-20
// Programmer: Liliana Rivas

// Brief description: This module defines the Welcome class, which is used to display the welcome page for a hotel website.
//The displayWelcomePage() method first gets the document object and the container element. Then, it adds the welcome text and buttons to the container element.
//The welcome page is a simple HTML page that displays the name of the hotel, a few sentences about the hotel, and some buttons that allow the user to view occupied rooms, check in, check out, or get support.

class Welcome {
    // Constructor
    constructor() {
    }
  
    // Display the welcome page
    displayWelcomePage() {
      // Get the document object
      const document = window.document;
  
      // Get the container element
      const container = document.querySelector(".container");
  
      // Add the welcome text to the container
      container.innerHTML = "<h1>Welcome to Our Hotel</h1>" +
        "<p>We offer comfortable rooms and excellent service. Experience a memorable stay with us!</p>" +
        "<ul>" +
          "<li>Spacious and modern rooms</li>" +
          "<li>Breathtaking views of the city</li>" +
          "<li>24/7 room service</li>" +
          "<li>Complimentary breakfast</li>" +
          "<li>Convenient location near attractions</li>" +
        "</ul>";
  
      // Add the buttons to the container
      container.innerHTML += "<a class=\"btn\" href=\"/\">View Occupied Rooms</a>" +
        "<a class=\"btn\" href=\"/checkin\">Check In</a>" +
        "<a class=\"btn\" href=\"/checkout\">Check Out</a>" +
        "<a class=\"btn\" href=\"/support\">Support</a>";
    }
  }
  
  // Export the Welcome class
  module.exports = Welcome;