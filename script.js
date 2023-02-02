// Get form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

// Add submit event listener to form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get entered email address
  const email = emailInput.value;

  // Validate email address
  if (!email) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send email address to server (in a real application, you would send this data to a server-side script)
  alert(`Thank you for subscribing with email: ${email}`);
});
