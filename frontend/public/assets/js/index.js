function determineWorkout() {
    let goal = document.querySelector('input[name="goal"]:checked').dataset.score;
    let frequency = document.querySelector('input[name="frequency"]:checked').dataset.score;
    let duration = document.querySelector('input[name="duration"]:checked').dataset.score;
  
    // Array to store the scores
    let scores = [goal, frequency, duration];
    // Determine the highest score
    let highestScore = Math.max(...scores);
  
    // Determine the workout based on the highest score
    let workout = "";
    if (highestScore === goal) {
      workout = "Get fit";
    } else if (highestScore === frequency) {
      workout = "3-4 times a week";
    } else if (highestScore === duration) {
      workout = "30-60 minutes";
    }
  
    console.log(`The highest score is ${highestScore} and the best workout for you is ${workout}`);
  }