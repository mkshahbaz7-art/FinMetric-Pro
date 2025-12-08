/* Load navbar */
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
      document.getElementById("nav-include").innerHTML = data;

      // Wait for navbar to load before attaching menu toggle
      document.querySelector('.hamburger')?.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
      });
  });

/* Load footer */
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-include").innerHTML = data;
  });
