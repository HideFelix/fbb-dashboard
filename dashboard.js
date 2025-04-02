// JavaScript for interactivity (currently does nothing)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default action
        // Placeholder action
        alert('This button does nothing yet.');
    });
});