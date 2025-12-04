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

