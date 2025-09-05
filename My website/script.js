// --- LANGUAGE DROPDOWN ---
const languageTab = document.querySelector('.language-tab');
const languageSelect = document.querySelector('.language-select');
const languageOptions = document.querySelectorAll('.language-dropdown li a');

// Toggle dropdown on click
languageSelect.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click from bubbling to document
  languageTab.classList.toggle('active');
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!languageTab.contains(e.target)) {
    languageTab.classList.remove('active');
  }
});

// Optional: close dropdown on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    languageTab.classList.remove('active');
  }
});

// Close dropdown when a language is selected
languageOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault(); // Optional: prevent default link behavior
    languageSelect.textContent = option.textContent; // update button text
    languageTab.classList.remove('active'); // close dropdown
    // Optional: add language change logic here
  });
});

// --- MENU DROPDOWN ---
const menuTabs = document.querySelectorAll('.menu-tab');

menuTabs.forEach((menuTab) => {
  const menuButton = menuTab.querySelector('.menu-button');

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    menuTab.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  menuTabs.forEach((menuTab) => menuTab.classList.remove('active'));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuTabs.forEach((menuTab) => menuTab.classList.remove('active'));
  }
});

// --- SCROLL-UP ANIMATION FOR GALLERY ---
const galleryItems = document.querySelectorAll('.gallery-item');

const observerOptions = {
  threshold: 0.2 // trigger when 20% of the element is visible
};

const galleryObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, observerOptions);

galleryItems.forEach(item => {
  galleryObserver.observe(item);
});

// --- FORCE ENGLISH ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    applyTranslation('en'); // always start in English
});
