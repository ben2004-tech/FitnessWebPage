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
                alert('Keep up the good work!');
                break;
            case 'Once a week':
                // Perform a certain task if "Once a week" is selected
                console.log('User exercises once a week.');
                alert('Good start! Try to increase your frequency.');
                break;
            case 'Rarely':
                // Perform a certain task if "Rarely" is selected
                console.log('User rarely exercises.');
                alert('Try to exercise more frequently!');
                break;
            default:
                console.log('No valid frequency selected.');
        }
    }

    // Check question 4
    let workouts = document.querySelectorAll('input[name="workouts"]:checked');
    let cardioOrYogaSelected = false; // Flag to check if Cardio or Yoga is selected
    let hitOrStrengthSelected = false;

    workouts.forEach(workout => {
        if (workout.value === 'Strength training') {
            // Perform a certain task if "Strength training" is selected
            console.log('User is interested in strength training.');
            alert('Strength training is essential for building muscle!');
            hitOrStrengthSelected = true;
        }
        if (workout.value === 'Cardio') {
            // Perform a certain task if "Cardio" is selected
            console.log('User is interested in cardio.');
            alert('Cardio is great for cardiovascular health!');
            cardioOrYogaSelected = true; // Set flag to true if Cardio is selected
        }
        if (workout.value === 'Yoga') {
            // Perform a certain task if "Yoga" is selected
            console.log('User is interested in yoga.');
            alert('Yoga is great for flexibility and mental health!');
            cardioOrYogaSelected = true; // Set flag to true if Yoga is selected
        }
        if(workout.value ==='HIIT'){
            console.log('HIIT selected');
            hitOrStrengthSelected = true;
        }
    });

    // Continue with form submission if needed
    if (frequency && frequency.value === 'Daily' && cardioOrYogaSelected) {
        console.log('GMMMMMM');
    }
    if(frequency && (frequency.value === 'Rarely' || frequency.value ==='Once a week') && hitOrStrengthSelected){
        console.log('Hellooooooo cheese');
    }
    if(frequency && frequency.value === 'Several times a week' && (hitOrStrengthSelected || cardioOrYogaSelected)){
console.log('Steak and eggs');
    }

    //this.submit(); // Uncomment this line if you want to actually submit the form after performing task
});


