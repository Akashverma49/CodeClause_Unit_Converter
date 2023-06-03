// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Submit form validation
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Perform form validation
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
    } else {
      alert('Form submitted successfully');
      // Clear form fields
      document.querySelector('#name').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#message').value = '';
    }
  });
  