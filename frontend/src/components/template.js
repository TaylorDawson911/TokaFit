import React, { useState } from 'react';


function Template() {

  function handleClick() {
    // get the data score of the checked radio button
    const goalScore = document.querySelector('input[name="goal"]:checked').dataset.score;
    const frequencyScore = document.querySelector('input[name="frequency"]:checked').dataset.score;
    const durationScore = document.querySelector('input[name="duration"]:checked').dataset.score;

    // add all of the data scores together
    const totalScore = parseInt(goalScore) + parseInt(frequencyScore) + parseInt(durationScore);

    // if the data score is 3 or under, log that they should do cardio
    if (totalScore <= 3) {
      console.log("You should do cardio");
    } else if (totalScore <= 6) {
      console.log("You should do strength training");
    } else if (totalScore <= 9) {
      console.log("You should do HIIT");
    }

  }
  return (
    <div>
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
  );
}


export default Template;