document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "#703d92"
  } else {
    navbar.style.backgroundColor = "none"
    navbar.style.backgroundImage = "url(../media/pi-bg.jpg)"; 
  }
});
