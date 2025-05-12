const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); 
    button.classList.add('active'); 

    const targetId = button.id + 'Content'; 
    contents.forEach(content => {
      if (content.id === targetId) {
        content.style.display = 'block'; 
      } else {
        content.style.display = 'none'; 
      }
    });
  });
});


function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenuDropdown");
  mobileMenu.classList.toggle("hidden");
}

const burgerIcon = document.getElementById('burgerIcon');
  const mobileMenu = document.getElementById('mobileMenuDropdown');

  // Add click event listener to toggle the dropdown menu
  burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a"); // adjust selector as needed
  const path = window.location.pathname.toLowerCase();

  links.forEach((link) => {
    if (link.getAttribute("href").toLowerCase() === path) {
      link.classList.add("text-[#248ADE]");
    } else {
      link.classList.add("text-[#18181880]");
    }
  });
});

function toggleDropdown(dropdownId) {
 
  const dropdowns = document.querySelectorAll('.absolute');
 
 
  dropdowns.forEach(dropdown => {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.add('hidden');
    }
  });

  
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('hidden');
}

window.onclick = function(event) {
  if (!event.target.matches('.cursor-pointer')) {
    const dropdowns = document.querySelectorAll('.absolute');
    dropdowns.forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }
}

// languages switch dropdown
const toggle = document.getElementById("langDropdownToggle");
const dropdown = document.getElementById("langDropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Optional: Click outside to close
document.addEventListener("click", function (event) {
  if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});