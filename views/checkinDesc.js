class CheckIn {
  constructor(roomNumber, guestName, lastName, numOfDays, roomType) {
      this.roomNumber = roomNumber;
      this.guestName = guestName;
      this.lastName = lastName;
      this.numOfDays = numOfDays;
      this.roomType = roomType;
  }

  isRoomAvailable(roomNumber) {
      const db = require("database");
      return db.checkRoomAvailability(roomNumber);
  }

  checkIn() {
      try {
          const db = require("database");

          // Validate inputs
          if (!this.guestName || !this.lastName || !this.numOfDays || !this.roomType) {
              throw new Error("Invalid input data");
          }

          // Check room availability
          const isAvailable = this.isRoomAvailable(this.roomNumber);
          if (!isAvailable) {
              throw new Error("Room not available");
          }

          // Check if the selected room type is available (optional)
          if (!db.isRoomTypeAvailable(this.roomType)) {
              throw new Error("Selected room type not available");
          }

          // Perform the actual check-in
          const success = db.checkInGuest(this.roomNumber, this.guestName, this.lastName, this.numOfDays, this.roomType);
          if (!success) {
              throw new Error("Error during check-in");
          }

          // Return true if check-in is successful
          return true;
      } catch (error) {
          // Log the error and return false
          console.error("Check-in error:", error);
          return false;
      }
  }
}

module.exports = CheckIn;
