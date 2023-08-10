document.addEventListener("DOMContentLoaded", function() {
  const checkinForm = document.getElementById("checkinForm");
  const messageDiv = document.getElementById("message");

  checkinForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const roomNumber = document.getElementById("roomNumber").value;
    const date = document.getElementById("date").value;
    const militaryTime = document.getElementById("time").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const currentTime = new Date();
    const selectedTime = new Date(`${date}T${militaryTime}`);
    const selectedDate = selectedTime.toDateString(); // Get the selected date as a string

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = selectedTime.toLocaleTimeString('en-US', options);

    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    if (currentTime.toDateString() !== selectedDate) {
      messageDiv.innerHTML = `Welcome, ${capitalizedFirstName} ${capitalizedLastName}! Your reservation is not today. Please make sure to come on your reservation date.`;
    } else if (currentTime >= selectedTime) {
      messageDiv.innerHTML = `Welcome, ${capitalizedFirstName} ${capitalizedLastName}! Your room, ${roomNumber}, is not available. Your room will be ready after ${formattedTime}.`;
    } else {
      messageDiv.innerHTML = `Welcome, ${capitalizedFirstName} ${capitalizedLastName}! Your room, ${roomNumber}, has been available since ${formattedTime}. Feel free to walk into your room. Any further questions, you can ask the hotel front desk.`;
    }
  });
});