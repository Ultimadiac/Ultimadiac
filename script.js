// Select the navigation links
const links = document.querySelectorAll('nav a');

// Add an event listener to each link
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
