document.getElementById('fitness-quiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check question 2
    let frequency = document.querySelector('input[name="frequency"]:checked');
    
    // Check question 4
    let workouts = document.querySelectorAll('input[name="workouts"]:checked');
    let cardioOrYogaSelected = false; // Flag to check if Cardio or Yoga is selected
    let hitOrStrengthSelected = false; // Flag to check if HIIT or Strength training is selected

    workouts.forEach(workout => {
        if (workout.value === 'Strength training' || workout.value === 'HIIT') {
            hitOrStrengthSelected = true;
        }
        if (workout.value === 'Cardio' || workout.value === 'Yoga') {
            cardioOrYogaSelected = true;
        }
    });

    // Determine the action based on the conditions
    if (frequency) {
        if (frequency.value === 'Daily' && cardioOrYogaSelected) {
            // Go to fat loss page
            console.log('GMMMMMM');
        } else if ((frequency.value === 'Rarely' || frequency.value === 'Once a week') && hitOrStrengthSelected) {
            // Go to muscle gain page
            console.log('Hellooooooo cheese');
        } else if (frequency.value === 'Several times a week' && (hitOrStrengthSelected || cardioOrYogaSelected)) {
            // Go to strength mobility page
            console.log('Steak and eggs');
        } else {
            // Go to default page (assuming strength mobility page as default)
            console.log('wcjbhcehjhj');
        }
    } else {
        // Handle the case where no frequency is selected (if necessary)
        console.log('Please select your exercise frequency.');
    }

    // Uncomment the following line if you want to actually submit the form after performing the tasks
    // this.submit();
});



