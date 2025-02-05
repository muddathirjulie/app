// Initialize particles.js for main section
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff6f61" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: "#1D92F0", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      onmousemove: { enable: true, mode: "grab" } // Add this line to make particles react to mouse move
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      grab: { distance: 200, line_linked: { opacity: 1 } } // Add mode for "grab" interaction
    }
  },
  retina_detect: true
});

// Initialize particles.js for contact section
particlesJS("particles-contact-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff6f61" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: "#1D92F0", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      onmousemove: { enable: true, mode: "grab" } // Add this line for mouse move effect
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      grab: { distance: 200, line_linked: { opacity: 1 } } // Add mode for "grab" interaction
    }
  },
  retina_detect: true
});


// Toggle navigation menu
document.getElementById("hamburger-button").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  // Optional: Add custom behavior for the contact form here
});

document.getElementById("current-year").textContent = new Date().getFullYear();

// Skills Section function
function showDescription(skillId) {
  document.querySelectorAll('.description-content').forEach(desc => desc.classList.remove('active'));
  const activeDescription = document.getElementById(skillId);
  if (activeDescription) activeDescription.classList.add('active');
}
