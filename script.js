document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });
  
  // Mobile navigation toggle - ONLY CREATE ONCE
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  
  const nav = document.querySelector('nav');
  const mobileNav = document.querySelector('nav ul');
  
  // Insert hamburger button before nav
  nav.parentNode.insertBefore(hamburger, nav);
  
  function toggleMobileNav() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
  
  hamburger.addEventListener('click', toggleMobileNav);
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileNav.classList.contains('active') && 
        !e.target.closest('nav') && 
        !e.target.closest('.hamburger')) {
      toggleMobileNav();
    }
  });
  
  // Window resize handling
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    }, 250);
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message. I will get back to you soon!');
      contactForm.reset();
    });
  }
});