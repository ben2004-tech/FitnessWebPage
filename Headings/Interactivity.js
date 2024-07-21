//Form validation
document.getElementById('fitness-quiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check question 2
    let frequency = document.querySelector('input[name="frequency"]:checked');
    if (frequency) {
        switch (frequency.value) {
            case 'Daily':
                // Perform a certain task if "Daily" is selected
                console.log('User exercises daily.');
                alert('Great! You exercise daily. Keep it up!');
                break;
            case 'Several times a week':
                // Perform a certain task if "Several times a week" is selected
                console.log('User exercises several times a week.');
                alert('');
                break;
            case 'Once a week':
                // Perform a certain task if "Once a week" is selected
                console.log('User exercises once a week.');
                alert('Good start! Try to increase your frequency.');
                break;
            case 'Rarely':
                // Perform a certain task if "Rarely" is selected
                console.log('User rarely exercises.');
                alert('');
                break;
            default:
                console.log('No valid frequency selected.');
        }
    }

    // Check question 4
    let workouts = document.querySelectorAll('input[name="workouts"]:checked');
    workouts.forEach(workout => {
        if (workout.value === 'Strength training') {
            // Perform a certain task if "Strength training" is selected
            console.log('User is interested in strength training.');
            alert('Strength training is essential for building muscle!');
        }
        if (workout.value === 'Cardio') {
            // Perform a certain task if "Cardio" is selected
            console.log('User is interested in cardio.');
            alert('Cardio is great for cardiovascular health!');
        }
        // You can add more conditions for other workout types
    });

    // Continue with form submission if needed
    // this.submit(); // Uncomment this line if you want to actually submit the form after performing tasks
});

