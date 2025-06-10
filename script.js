document.getElementById("year").textContent = new Date().getFullYear();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contactForm").classList.toggle("hidden");
});

// Upload and display image
document.getElementById("imageUpload").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.getElementById("previewImage");
    img.src = e.target.result;
    img.style.display = "block";
  };
  reader.readAsDataURL(this.files[0]);
});

// Typing animation
const text = "B.Tech Computer Science Student";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Scroll to top
const scrollTopBtn = document.getElementById("scrollTop");
window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
