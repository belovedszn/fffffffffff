/*function openNav() {
    document.getElementById("mySidebar").style.transform = "translateX(0)";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = "1";
}

function closeNav() {
    document.getElementById("mySidebar").style.transform = "translateX(-230px)";
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 500);
} */

function openNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.classList.add("opened"); // Add 'opened' class to increase width
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.opacity = "1";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.classList.remove("opened"); // Remove 'opened' class to reset width
  document.getElementById("overlay").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("overlay").style.display = "none";
  }, 500);
}

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener('click', ()=> {
  window.location.href = "../html/wallet.html"
});

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});