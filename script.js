const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Form is valid, you can submit it or perform further actions
  form.submit();
}); 