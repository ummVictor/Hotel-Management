// Function to handle check-out
document.getElementById("checkoutForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const checkoutName = document.getElementById("checkoutName").value;
    if (checkoutName.trim() !== "") {
      // Here you can perform any additional actions like sending data to the server
      // or storing it in a database.
      document.getElementById("checkoutForm").style.display = "none";
      document.getElementById("message").innerText = `Thank you, ${checkoutName}, for staying with us!`;
    } else {
      alert("Please enter your name for check-out.");
    }
  });
  