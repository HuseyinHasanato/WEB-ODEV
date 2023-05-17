document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var data = {
      name: name,
      lastName: lastName,
      email: email,
      message: message
    };
  
    fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        alert(data.message);
      })
      .catch(function(error) {
        console.error(error);
      });
  });
