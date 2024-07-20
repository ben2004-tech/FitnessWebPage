//Form validation
document.addEventListener('DOMContentLoaded', function() {
    const programs = document.getElementById('programs');
    const dropdownContent = document.getElementById('dropdown-content');

    programs.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!programs.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});