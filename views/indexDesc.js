// Module name: occupiedRooms
// Date: 2023-07-20
// Programmer: Brian Rojas
// Description: This module provides functions for displaying a list of occupied rooms.

// Important functions:
//   getOccupiedRooms(): This function returns an array of objects, each of which represents an occupied room.
//   displayOccupiedRooms(): This function displays a list of occupied rooms in the HTML page.

// Data structures:
//   occupiedRooms: This is an array of objects, each of which represents an occupied room.

// Algorithm:
//   The getOccupiedRooms() function first queries the database for a list of all occupied rooms.
//   The displayOccupiedRooms() function then loops through the occupiedRooms array and displays the room number and guest name for each room.

var occupiedRooms = [];

function getOccupiedRooms() {
  // Query the database for a list of all occupied rooms.
  var db = new Database();
  var rooms = db.query("SELECT room_number, guest_name FROM rooms WHERE occupied = 1");

  // Add the rooms to the occupiedRooms array.
  for (var i = 0; i < rooms.length; i++) {
    occupiedRooms.push({
      room_number: rooms[i].room_number,
      guest_name: rooms[i].guest_name
    });
  }
}

function displayOccupiedRooms() {
  // Loop through the occupiedRooms array and display the room number and guest name for each room.
  for (var i = 0; i < occupiedRooms.length; i++) {
    var room = occupiedRooms[i];
    document.getElementById("occupiedRooms").innerHTML += "<li>Room " + room.room_number + " - " + room.guest_name + "</li>";
  }
}

getOccupiedRooms();
displayOccupiedRooms();