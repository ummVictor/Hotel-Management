document.getElementById('checkinForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const roomNumber = document.getElementById('roomNumber').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Check if the date is in the past.
  const currentDate = new Date();
  const selectedDate = new Date(date);
  if (selectedDate < currentDate) {
    document.getElementById('message').innerHTML = '<p>Check-in was unsuccessful. The selected date is in the past.</p>';
    return;
  }

  // Check if the room number contains only numbers.
  if (!/^\d+$/.test(roomNumber)) {
    document.getElementById('message').innerHTML = '<p>Check-in was unsuccessful. Room number should contain only numbers.</p>';
    return;
  }

  // Create a JSON object with the form data.
  const formData = {
    roomNumber,
    date,
    time,
    firstName,
    lastName,
  };

  // Send a POST request to the server to save the check-in data.
  fetch('/checkin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((message) => {
      document.getElementById('message').innerHTML = `<p>${message}</p>`;
    })
    .catch((error) => {
      console.error('Error saving check-in:', error);
      document.getElementById('message').innerHTML = '<p>Error saving check-in.</p>';
    });
});
