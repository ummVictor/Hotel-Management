// Function to handle check-in
document.getElementById("checkinForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const checkinName = document.getElementById("checkinName").value;
  if (checkinName.trim() !== "") {
    // Here you can perform any additional actions like sending data to the server
    // or storing it in a database.
    document.getElementById("checkinForm").style.display = "none";
    document.getElementById("message").innerText = `Welcome, ${checkinName}!`;
  } else {
    alert("Please enter your name for check-in.");
  }
});
