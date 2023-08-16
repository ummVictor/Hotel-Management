// Module name: CheckIn
// Date: 07-20
// Programmer: Victor Um

// Brief description: This module defines the CheckIn class, which is used to check in guests to a hotel.
//The checkIn() method first checks if the room number is available. If the room number is not available, the method returns false. Otherwise, the method checks in the guest and returns true.
//The database connection is used to check the room availability and check in the guest. The database module is imported into the CheckIn class to access the database.

class CheckIn {
    // Constructor
    constructor(roomNumber, guestName, lastName, numOfDays, roomType) {
      this.roomNumber = roomNumber;
      this.guestName = guestName;
      this.lastName = lastName;
      this.numOfDays = numOfDays;
      this.roomType = roomType;
    }
  
    // Check in the guest
    checkIn() {
      // Get the database connection
      const db = require("database");
  
      // Check if the room number is available
      const isAvailable = db.checkRoomAvailability(this.roomNumber);
  
      if (!isAvailable) {
        // The room is not available
        return false;
      }
  
      // Check in the guest
      const success = db.checkInGuest(this.roomNumber, this.guestName, this.lastName, this.numOfDays, this.roomType);
  
      if (!success) {
        // There was an error checking in the guest
        return false;
      }
  
      // The guest was successfully checked in
      return true;
    }
  }
  
  // Export the CheckIn class
  module.exports = CheckIn;