function sendEmail() {
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Do something with the values (e.g. send an email)
  // ...

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Show an alert message
  alert("Mail Sended");
}
