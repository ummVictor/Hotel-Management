// Module name: Checkout
// Date: 07-21
// Programmer: Victor Um

// Brief description: This module defines the Checkout class, which is used to check out guests from a hotel.
//The checkOut() method first checks if the room is occupied. If the room is not occupied, the method returns false. Otherwise, the method checks out the guest and returns true.
//The database connection is used to check the room occupancy and check out the guest. The database module is imported into the Checkout class to access the database.

class Checkout {
    // Constructor
    constructor(roomNumber) {
      this.roomNumber = roomNumber;
    }
  
    // Check out the guest
    checkOut() {
      // Get the database connection
      const db = require("database");
  
      // Check if the room is occupied
      const isOccupied = db.checkRoomOccupancy(this.roomNumber);
  
      if (!isOccupied) {
        // The room is not occupied
        return false;
      }
  
      // Check out the guest
      const success = db.checkOutGuest(this.roomNumber);
  
      if (!success) {
        // There was an error checking out the guest
        return false;
      }
  
      // The guest was successfully checked out
      return true;
    }
  }
  
  // Export the Checkout class
  module.exports = Checkout;