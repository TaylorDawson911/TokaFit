import React from "react";

function Community() {
  return (
    <div>
         <main>
        <section id="forums">
          <h2>Forums</h2>
          <div id="file-structure">
            <div className="category">
              <h3>Weight Loss</h3>
              <ul>
                <li><a href="weight-loss/diet-discussion.html">Diet Discussion</a></li>
                <li><a href="weight-loss/exercise-tips.html">Exercise Tips</a></li>
                <li><a href="weight-loss/success-stories.html">Success Stories</a></li>
              </ul>
            </div>
            <div className="category">
              <h3>Muscle Building</h3>
              <ul>
                <li><a href="muscle-building/workout-routines.html">Workout Routines</a></li>
                <li><a href="muscle-building/supplement-reviews.html">Supplement Reviews</a></li>
                <li><a href="muscle-building/nutrition-advice.html">Nutrition Advice</a></li>
              </ul>
            </div>
            <div className="category">
              <h3>Yoga and Mindfulness</h3>
              <ul>
                <li><a href="yoga-and-mindfulness/yoga-poses.html">Yoga Poses</a></li>
                <li><a href="yoga-and-mindfulness/meditation-techniques.html">Meditation Techniques</a></li>
                <li><a href="yoga-and-mindfulness/mindfulness-resources.html">Mindfulness Resources</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section id="community">
          <h2>Our Community</h2>
          <div id="chatrooms">
            <div id="stories" className="chatroom">
              <h3>Stories</h3>
              <a href="chatroom-stories.html">Join the chatroom</a>
            </div>
            <div id="diets" className="chatroom">
              <h3>Diets</h3>
              <a href="chatroom-diets.html">Join the chatroom</a>
            </div>
            <div id="motivation" className="chatroom">
              <h3>Motivation</h3>
              <a href="chatroom-motivation.html">Join the chatroom</a>
            </div>
          </div>
        </section>
        <section id="resources">
          <h2>Resources</h2>
          <div id="directory">
            <div className="category">
              <h3>Weight Loss</h3>
              <ul>
                <li><a href="weight-loss/diet-plans.html">Diet Plans</a></li>
                <li><a href="weight-loss/exercise-routines.html">Exercise Routines</a></li>
                <li><a href="weight-loss/success-stories.html">Success Stories</a></li>
              </ul>
            </div>
            <div className="category">
              <h3>Best Things to Buy</h3>
              <ul>
                <li><a href="best-things-to-buy/gym-equipment.html">Gym Equipment</a></li>
                <li><a href="best-things-to-buy/supplements.html">Supplements</a></li>
                <li><a href="best-things-to-buy/fitness-apps.html">Fitness Apps</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}

export default Community;