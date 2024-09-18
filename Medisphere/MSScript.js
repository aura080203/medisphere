//Modal section starts here -- sign-up and log-in pop-up functions
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginSubmitBtn = document.querySelector('.login-btn');
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.createElement('div');
    const userName = document.createElement('span');
    const logoutBtn = document.createElement('button');

    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const signupForm = document.querySelector('.modal-body form');

    const becomeMemberBtn = document.getElementById('becomeMemberBtn'); // New button

    // User info elements
    userInfo.classList.add('user-info');
    userInfo.style.display = 'none';
    userName.id = 'userName';
    logoutBtn.classList.add('logout-button');
    logoutBtn.textContent = 'Log Out';
    userInfo.appendChild(userName);
    userInfo.appendChild(logoutBtn);
    document.querySelector('nav').appendChild(userInfo);

    // Open login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Simulate login
    loginSubmitBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        userName.textContent = 'Welcome, John Doe!'; // Example user name
    });

    // Simulate logout
    logoutBtn.addEventListener('click', () => {
        authButtons.style.display = 'flex';
        userInfo.style.display = 'none';
    });

    // Open sign-up modal
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Open sign-up modal from "Become a Member" button
    becomeMemberBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Close sign-up modal
    closeSignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    // Handle sign-up form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        userName.textContent = 'Welcome, ' + signupForm.elements[0].value + '!';
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Open login modal from sign-up modal
    document.getElementById('openLoginModal').addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    });

    // Open sign-up modal from login modal
    document.getElementById('openSignupModal').addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });
});
//Modal section ends here

// Our services section starts here
let slideIndex = 0;
let slideInterval;

function startSlides() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 10000);
}

function stopSlides() {
    clearInterval(slideInterval);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("service-slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
}

// Start the slideshow
startSlides();

// Add event listeners to pause the slideshow on click
document.querySelector('.slideshow-container').addEventListener('click', stopSlides);

// Our services section ends here

// Hoverable review section starts here 
// const reviewBoxes = document.querySelectorAll('.review-box');

// reviewBoxes.forEach(box => {
//   let isScrolling = false; // To avoid multiple scroll triggers

//   box.addEventListener('mouseover', () => {
//     if (!isScrolling) {
//       isScrolling = true;
      
//       // Get the box's position relative to the viewport
//       const boxRect = box.getBoundingClientRect();
      
//       // Check if the box is near the edge of the screen
//       const buffer = 50; // Add a buffer to prevent being too close to the edge
//       const windowWidth = window.innerWidth;

//       // Only scroll if the box is near the edges of the viewport
//       if (boxRect.left < buffer || boxRect.right > windowWidth - buffer) {
//         // Calculate the scroll position to center the box
//         const scrollX = boxRect.left + window.scrollX - (windowWidth / 2 - boxRect.width / 2);
        
//         // Perform smooth scroll
//         window.scrollTo({
//           left: scrollX,
//           behavior: 'smooth'
//         });
//       }

//       // Reset the scrolling flag after 500ms
//       setTimeout(() => {
//         isScrolling = false;
//       }, 500); // Adjust based on the smooth scrolling duration
//     }
//   });
// })

// Footer subscribe button functionality starts here
function subscribe() {
    var email = document.getElementById('email').value.trim(); // Correct input ID
    
    // Basic email validation
    if (email && validateEmail(email)) {
      alert('Thank you for subscribing to our newsletter.');
      document.getElementById('email').value = ''; // Clear the input after subscription
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Email validation function
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
// Footer subscribe button functionality ends here

//Review section automatic scrolling
// Select necessary elements
const reviewWrapper = document.querySelector('.review-wrapper');
const reviewCards = document.querySelectorAll('.review-card');
const progressDots = document.querySelectorAll('.progress-dot'); // Assume these dots are already in your HTML
const arrowButtons = document.querySelectorAll('.arrow-button'); // Add arrow buttons selector

let autoScrollInterval;
let scrollDirection = 1; // 1 for forward, -1 for backward
const scrollDuration = 4000; // 4 seconds for auto-scroll
const cardsPerSlide = 4; // Show 4 cards at a time

// Function to start automatic scrolling
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const currentScroll = reviewWrapper.scrollLeft;
        const cardWidth = reviewCards[0].offsetWidth + parseInt(window.getComputedStyle(reviewCards[0]).marginRight);
        const slideWidth = cardWidth * cardsPerSlide; // Scroll by 4 cards
        const nextScroll = currentScroll + (slideWidth * scrollDirection);

        // Check boundaries to reverse scroll direction or loop
        if (nextScroll >= reviewWrapper.scrollWidth - reviewWrapper.clientWidth) {
            scrollDirection = -1; // Change direction to backward
        } else if (nextScroll <= 0) {
            scrollDirection = 1; // Change direction to forward
        }

        // Perform the scroll
        reviewWrapper.scrollBy({ left: slideWidth * scrollDirection, behavior: 'smooth' });

        // Update dot color
        updateDotColors();
    }, scrollDuration); // Auto-scroll every 4 seconds
}

// Function to stop automatic scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Buttons and functional arrows
function moveSlide(direction) {
    const cardWidth = reviewCards[0].offsetWidth + parseInt(window.getComputedStyle(reviewCards[0]).marginRight);
    const slideWidth = cardWidth * cardsPerSlide;
    const maxScrollLeft = reviewWrapper.scrollWidth - reviewWrapper.clientWidth;
    
    let newScrollPosition = reviewWrapper.scrollLeft + (direction * slideWidth);

    if (newScrollPosition > maxScrollLeft) {
        newScrollPosition = 0; // Loop to the start
    } else if (newScrollPosition < 0) {
        newScrollPosition = maxScrollLeft; // Loop to the end
    }

    reviewWrapper.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

function updateDotColors() {
    const cardWidth = reviewCards[0].offsetWidth + parseInt(window.getComputedStyle(reviewCards[0]).marginRight);
    const slideWidth = cardWidth * cardsPerSlide;
    const totalScrollWidth = reviewWrapper.scrollWidth - reviewWrapper.clientWidth;
    const scrollPosition = reviewWrapper.scrollLeft;

    const activeIndex = Math.round(scrollPosition / slideWidth);

    progressDots.forEach((dot) => {
        dot.style.backgroundColor = '#bbb'; // Default color for inactive dots
    });

    if (progressDots[activeIndex]) {
        progressDots[activeIndex].style.backgroundColor = '#717171'; // Active dot color
    }

    if (scrollPosition >= totalScrollWidth) {
        progressDots[0].style.backgroundColor = '#717171'; // Loop back to first dot
    } else if (scrollPosition <= 0) {
        progressDots[progressDots.length - 1].style.backgroundColor = '#717171'; // Loop to last dot
    }
}

reviewWrapper.addEventListener('scroll', updateDotColors);

// Initialize dot colors on page load
updateDotColors();

// Start the auto-scroll on page load
startAutoScroll();

// Pause auto-scroll on mouse hover on reviewWrapper
reviewWrapper.addEventListener('mouseover', stopAutoScroll);
reviewWrapper.addEventListener('mouseleave', startAutoScroll);

// Add event listeners for arrow buttons to stop/start auto-scroll
arrowButtons.forEach(button => {
    button.addEventListener('mouseover', stopAutoScroll);
    button.addEventListener('mouseleave', startAutoScroll);
});

// Review automatic scrolling ends here

