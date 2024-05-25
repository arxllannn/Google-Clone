// navbar slide function
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.sticky-navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
document.querySelector('.grid-icon').addEventListener('click', function () {
    document.querySelector('.popup-container').classList.toggle('clicked');
});


  // Get the button and the popup
  var btn = document.getElementById("popupBtn");
  var popup = document.getElementById("myPopup");
  btn.addEventListener("click", function () {
      if (popup.style.display === "block") {
          popup.style.display = "none";
      } else {
          popup.style.display = "block";
      }
  });

// 
  window.addEventListener("click", function (event) {
      if (event.target != popup && event.target != btn) {
          popup.style.display = "none";
      }
  });

// navbar sliding animation
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".searchbar");
    const crossIcon = document.querySelector(".cross");

    crossIcon.addEventListener("click", function () {
        searchInput.value = "";
    });
});

// pop up 4 javascript function
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});

// pop up 3 javascript function
function popupProfile(index) {
    var popup = document.getElementsByClassName("popup3")[index];
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

// pop up 4 javascript function
 function togglePopup() {
    var popup = document.querySelector(".popup4");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}


// carousel function
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const scrollCards = document.querySelector('.scrollcards');

leftArrow.style.display = 'none';

rightArrow.addEventListener('click', () => {

  scrollCards.scrollLeft += 195;

  leftArrow.style.display = 'block';
  rightArrow.style.display = 'none';
});

leftArrow.addEventListener('click', () => {
  scrollCards.scrollLeft -= 190;
  rightArrow.style.display = 'block';
  leftArrow.style.display = 'none';
});

scrollCards.addEventListener('scroll', () => {

  if (scrollCards.scrollLeft === 0) {
    leftArrow.style.display = 'none';
  }
  if (scrollCards.scrollLeft + scrollCards.clientWidth >= scrollCards.scrollWidth) {
    rightArrow.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const toolBtn = document.querySelector('.tool-btn');
  const toolContainer = document.querySelector('.tool-btn-container');

  toolBtn.addEventListener('click', function() {
      toolContainer.style.display = toolContainer.style.display === 'none' ? 'block' : 'none';
  });
});

// clicked function of sideNav and image border
var previouslyClickedElement = null;

function openNav(clickedElement) {
  if (previouslyClickedElement !== null) {
    previouslyClickedElement.classList.remove('clicked');
  }
  clickedElement.classList.add('clicked');
  previouslyClickedElement = clickedElement;

  var imageSource = clickedElement.querySelector('img').getAttribute('src');
  var companyName = clickedElement.querySelector('div:nth-child(2) > div:nth-child(2)').innerText;

  var sideNavImage = document.querySelector('#mySidenav .gallery-image img');
  var sideNavCompanyName = document.querySelector('#mySidenav .text-1');

  sideNavImage.setAttribute('src', imageSource);
  sideNavCompanyName.innerText = companyName;

  var currentImage = clickedElement.parentNode.querySelector('.gallery-image-sidenav img');
  var galleryImages = document.querySelectorAll('.gallery-image-sidenav img');
  galleryImages = Array.from(galleryImages);
  var currentIndex = galleryImages.indexOf(currentImage);

  var leftButton = document.querySelector('#mySidenav a:nth-child(1)');
  var nextButton = document.querySelector('#mySidenav a:nth-child(2)');
  var closeButton = document.querySelector('.closebtn'); 

  leftButton.addEventListener('click', function() {
    var prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    sideNavImage.setAttribute('src', galleryImages[prevIndex].getAttribute('src'));
    sideNavCompanyName.innerText = cards[prevIndex].companyName;
    currentIndex = prevIndex;
  });

  nextButton.addEventListener('click', function() {
    var nextIndex = (currentIndex + 1) % galleryImages.length;
    sideNavImage.setAttribute('src', galleryImages[nextIndex].getAttribute('src'));
    sideNavCompanyName.innerText = cards[nextIndex].companyName;
    currentIndex = nextIndex;
  });

  closeButton.addEventListener('click', function() {
    closeNav();
  });

  document.getElementById("mySidenav").style.width = "570px";
  document.getElementById("main").style.marginRight = "570px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";

  if (previouslyClickedElement !== null) {
    previouslyClickedElement.classList.remove('clicked');
  }
}

// object in javascript
const cards = [
  {
    imageSrc: "images/gallery/galllery-image-9.jpeg",
    companyName: "Tetra Tech",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-3.jpeg",
    companyName: "Tetra Building",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-17.jpeg",
    companyName: "Tetra Building",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-5.jpeg",
    companyName: "Tetra Technologies.inc",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-9.jpeg",
    companyName: "Tetra Tech",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-12.jpeg",
    companyName: "it Industry",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-3.jpeg",
    companyName: "Tetra Building",
    category: "Linkedim"
  },
  {
    imageSrc: "images/gallery/galllery-image-7.jpeg",
    companyName: "Tetra Technologies.inc",
    category: "Linkedim"
  }
];

// sideNav position funcction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var sidenav = document.getElementById("mySidenav");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    sidenav.style.top = "80px";
  } else {
    sidenav.style.top = "32%";
  }
}



