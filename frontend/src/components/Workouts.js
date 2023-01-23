import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Workouts() {
    const [value, onChange] = useState(new Date());

    function handleClick() {
        // get the data score of the checked radio button
        const goalScore = document.querySelector('input[name="goal"]:checked').dataset.score;
        const frequencyScore = document.querySelector('input[name="frequency"]:checked').dataset.score;
        const durationScore = document.querySelector('input[name="duration"]:checked').dataset.score;
    
        // add all of the data scores together
        const totalScore = parseInt(goalScore) + parseInt(frequencyScore) + parseInt(durationScore);
    
        // if the data score is 3 or under, log that they should do cardio
        if (totalScore <= 3) {
          alert("You should do cardio")
        } else if (totalScore <= 6) {
          alert("You should do strength training")
        } else if (totalScore <= 9) {
          alert("You should do HIIT")
        }
    
      }
    
  return (
    <div>
    <div className="banner">
      <img src="assets/img/hero-image.png" alt="Hero image" />
      <div className="cta">
        <h1>Personalized Workouts</h1>
        <p>Get customized workout plans tailored to your fitness level and goals</p>
        <a href="/start-workout" className="button">Start Your Workout</a>
      </div>
    </div>
    {/* Overview of personalized workouts feature */}
    <div className="overview">
      <h2>Personalized Workouts</h2>
      <p>Our personalized workout feature creates custom workout plans based on your fitness level, goals, and preferences. Each workout is designed to help you reach your goals in a safe and effective way. Some benefits of using our personalized workouts include:</p>
      <ul>
        <li>Effective and efficient workouts tailored to your specific needs</li>
        <li>Minimizes risk of injury by taking into account your current fitness level</li>
        <li>Helps you stay motivated by providing a sense of progress and accomplishment</li>
      </ul>
    </div>
    {/* List of workout types */}
    <div className="workout-types">
      <h2>Workout Types</h2>
      <p>We offer a wide variety of workouts to choose from. Here is a list of some of the types of workouts we offer:</p>
      <ul>
        <li>
          <h3><a href="/demos/strength-training">Strength Training</a></h3>
          <p>Improve your strength, power, and muscle mass with our strength training workouts.</p>
        </li>
        <li>
          <h3><a href="/demos/cardio">Cardio</a></h3>
          <p>Get your heart pumping and burn calories with our cardio workouts.</p>
        </li>
        <li>
          <h3><a href="/demos/hiit">HIIT</a></h3>
          <p>High-intensity interval training (HIIT) is a type of workout that alternates between intense bursts of activity and short recovery periods.</p>
        </li>
        {/* Add additional workout types here */}
      </ul>
    </div>
    {/* Form for personalized workout customization */}
    <div className="customization-form">
      <h2>Customize Your Workouts</h2>
      <p>To get the most out of our personalized workouts, we recommend completing the form below. This will help us tailor your workouts to your specific fitness level and goals:</p>
      <form id="workout-quiz">
        <h3>What is your fitness goal?</h3>
        <label>
            <input type="radio" name="goal" defaultValue="get fit" data-score={1} defaultChecked /> Get Fit
        </label>
        <br />
        <label>
            <input type="radio" name="goal" defaultValue="build muscle" data-score={2} /> Build Muscle
        </label>
        <br />
        <label>
            <input type="radio" name="goal" defaultValue="improve myself" data-score={3} /> Improve Myself
        </label>
        <h3>How often do you want to exercise?</h3>
        <label>
            <input type="radio" name="frequency" defaultValue="daily" data-score={1} defaultChecked /> Daily
        </label>
        <br />
        <label>
            <input type="radio" name="frequency" defaultValue="3-4 times a week" data-score={2} /> 3-4 times a week
        </label>
        <br />
        <label>
            <input type="radio" name="frequency" defaultValue="1-2 times a week" data-score={3} /> 1-2 times a week
        </label>
        <h3>How long do you want to exercise for?</h3>
        <label>
            <input type="radio" name="duration" defaultValue="less than 30 minutes" data-score={1} defaultChecked /> Less than 30 minutes
        </label>
        <br />
        <label>
            <input type="radio" name="duration" defaultValue="30-60 minutes" data-score={2} /> 30-60 minutes
        </label>
        <br />
        <label>
            <input type="radio" name="duration" defaultValue="more than 60 minutes" data-score={3} /> More than 60 minutes
        </label>
        <br /><br />
        <button type="button" onClick={handleClick}>Determine My Workout</button>
        </form>
    </div>
    {/* Calendar or schedule tool */}
    <div className="schedule-tool">
      <h2>Schedule and Track Your Workouts</h2>
      <p>Use our calendar and schedule tool to plan and track your workouts:</p>
      {/* Add calendar or schedule tool here */}
    </div>
    {/* Progress tracker */}
    <div className="progress-tracker">
      <h2>Track Your Progress</h2>
      <div className="row">
        {/* Add progress tracker charts here */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Weight Loss
            </div>
            <div className="card-body">
              {/* Add chart for weight loss here */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Strength Training
            </div>
            <div className="card-body">
              {/* Add chart for strength training here */}
            </div>
          </div>
        </div>
        {/* Add additional charts here */}
      </div>
    </div>
    {/* Calendar or schedule tool */}
    <div className="schedule-tool">
      <h2>Schedule and Track Your Workouts</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Add calendar here */}
          <div className="card">
            <div className="card-header">
              Calendar
            </div>
            <div className="card-body">
            <Calendar onChange={onChange} value={value} />
              <div className="progress">
                    
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Add schedule and progress tracking tool here */}
          
          <div className="card">
            <div className="card-header">
              Schedule and Progress
            </div>
            <div className="card-body">
              {/* Add schedule and progress tracking widget here */}

                <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Workouts;