function logout() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("studentDetails").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
  
  document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simulating login - Replace this with actual authentication logic
    if (username === "student" && password === "password") {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("studentDetails").style.display = "block";
      document.getElementById("studentName").innerText = username;
      // Simulated student ID
      document.getElementById("studentID").innerText = Math.floor(Math.random() * 1000000);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  