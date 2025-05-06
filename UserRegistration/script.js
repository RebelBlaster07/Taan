document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const list = document.getElementById("userList");
  
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
          };
          
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        message.textContent = "Registered!";
        form.reset();
      };
    }
  
    if (list) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.forEach((u) => {
        list.innerHTML += `<li>Name: ${u.name}, Email: ${u.email}</li>`;
      });
    }
  });
  