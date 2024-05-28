// assets/js/scripts.js

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header nav ul li a");

  function setActiveLink() {
    const currentPath = window.location.pathname;
    console.log("Current Path:", currentPath);
    
    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkPath = new URL(link.href).pathname; // Get pathname from href
      console.log("Checking link:", linkPath);
      
      if (currentPath === linkPath) {
        console.log("Match found:", linkPath);
        link.classList.add("active");
      }
    });
  }

  setActiveLink();
});
