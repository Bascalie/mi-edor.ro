var clicked_nav_button = false;

document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', function() {
    clicked_nav_button = true;
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    setTimeout(() => { 
        clicked_nav_button = false;
    }, 1000);
  });
});

document.querySelectorAll('.cumpara').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('panou-cumpara').style.visibility = 'visible';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Obține pozițiile de top și bottom ale secțiunilor
  const offsetBottom = 500;

  const sections = {
    "despre-noi": {
      top: document.getElementById("despre-noi").offsetTop,
      bottom: document.getElementById("despre-noi").offsetTop + document.getElementById("despre-noi").offsetHeight + offsetBottom
    },
    "produsele-noastre": {
      top: document.getElementById("produsele-noastre").offsetTop + offsetBottom,
      bottom: document.getElementById("produsele-noastre").offsetTop + document.getElementById("produsele-noastre").offsetHeight + offsetBottom
    }
  };

  // Funcție pentru a actualiza butonul activ pe baza scroll-ului
  function updateActiveButton() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Centrul ecranului

    if (clicked_nav_button == true) return;

    document.querySelectorAll('.nav-button').forEach(btn => {
      btn.classList.remove('active');
    });

    // Verifică care secțiune este în centru
    for (const [sectionId, section] of Object.entries(sections)) {
      if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
        const activeButton = document.querySelector(`.nav-button[href="#${sectionId}"]`);
        if (activeButton) {
          activeButton.classList.add('active');
        }
      }
    }
  }

  // Rulează la început și la fiecare scroll
  window.addEventListener('scroll', updateActiveButton);
  updateActiveButton(); // Inițial

  // Intersection Observer pentru animații (doar pentru imagini și produse)
  const elements = document.querySelectorAll(".imagine, .produs");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
});
