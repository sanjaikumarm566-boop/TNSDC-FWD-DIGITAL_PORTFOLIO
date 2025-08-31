// Add new project dynamically

document.getElementById("add-project-btn").addEventListener("click", function () {

  const projectGrid = document.getElementById("projects-grid");

  const newCard = document.createElement("div");

  newCard.classList.add("project-card");

  newCard.innerHTML = `

    <h3>New Project</h3>

    <p>This is a placeholder description for a new project. Update it with real details!</p>

  `;

  projectGrid.appendChild(newCard);

});

// Modal functionality for profile picture

const modal = document.getElementById("profile-modal");

const profileImg = document.getElementById("profile-photo");

const modalImg = document.getElementById("modal-img");

const closeModal = document.getElementById("close-modal");

profileImg.onclick = function() {

  modal.style.display = "flex";

  modalImg.src = this.querySelector("img").src;

}

closeModal.onclick = function() {

  modal.style.display = "none";

}

window.onclick = function(event) {

  if (event.target == modal) {

    modal.style.display = "none";

  }

}

// Smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    const targetId = this.getAttribute('href');

    const targetElement = document.querySelector(targetId);

    window.scrollTo({

      top: targetElement.offsetTop - 20,

      behavior: 'smooth'

    });

  });

});

// Change profile picture style

document.querySelectorAll('.profile-option').forEach(option => {

  option.addEventListener('click', function() {

    const style = this.getAttribute('data-style');

    const newSrc = `https://api.dicebear.com/7.x/${style}/svg?seed=SANJAY&radius=50&backgroundColor=f0d879`;

    document.querySelector('.profile-photo img').src = newSrc;

    const originalText = document.querySelector('.tagline').textContent;

    document.querySelector('.tagline').textContent = 'Profile picture updated!';

    setTimeout(() => {

      document.querySelector('.tagline').textContent = originalText;

    }, 2000);

  });

});