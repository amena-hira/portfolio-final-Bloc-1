// -----------------Responsive Toggle Menu---------------------
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburgerBtn");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  hamburger.textContent = sidebar.classList.contains("active") ? "✖" : "☰";
}

// ----------------Sub-Tittle Animation: Type Writing-------------------------
const sentences = ["Web Developper", "Full Stack Developper"];

const el = document.getElementById("typewriter");
let sentenceIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  const current = sentences[sentenceIndex];

  if (typing) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      typing = false;
      setTimeout(type, 1500); // pause before deleting
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      typing = true;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  setTimeout(type, typing ? 100 : 50); // slower typing, faster deleting
}

type();

// ---------------------Active Section----------------------
function showSection(id) {
  document.querySelectorAll("main section").forEach((section) => {
    section.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }

  // Auto-close on mobile
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active");
    hamburger.textContent = "☰";
  }
}

// ------------------modal for project-------------------
const modal = document.getElementById("portfolioModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalLink = document.getElementById("modalLink");
const closeBtn = document.querySelector(".close-btn");

// Open Modal on image click
document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    modalTitle.textContent = img.title || "Project Title";

    const urlSafe = img.title?.toLowerCase().replace(/\s+/g, "") || "project";
    modalLink.href = `https://www.${urlSafe}.com`;
    modalLink.textContent = `www.${urlSafe}.com`;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});

// Filter functionality
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");

    const filter = button.dataset.filter;
    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// --------------------filter skills-----------------
const skillTags = document.querySelectorAll('.skills-tags .tag');
  const skillIcons = document.querySelectorAll('.skills-icons img');

  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Update active class
      document.querySelector('.tag.active')?.classList.remove('active');
      tag.classList.add('active');

      const filter = tag.dataset.filter;

      skillIcons.forEach(icon => {
        const category = icon.dataset.category;
        if (filter === 'all' || category === filter) {
          icon.style.display = 'inline-block';
        } else {
          icon.style.display = 'none';
        }
      });
    });
  });
