// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (name && email && message) {
      formMsg.textContent = "✅ Thanks! I'll get back to you soon.";
      formMsg.style.color = "green";
      form.reset();
    } else {
      formMsg.textContent = "⚠️ Please fill in all fields.";
      formMsg.style.color = "red";
    }
  });
}

