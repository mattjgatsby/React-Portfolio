import React from "react";
import SoundsLike from "../../assets/images/Sounds-like-Project.jpg";
import WorkDay from '../../assets/images/Work Day Scheduler.gif'

function Projects() {
  return (
    <div>
      <div class="card card_size">
        <img
          src={SoundsLike}
          class="card-img-top"
          alt="Sounds Like Project ScreenShot"
        />
        <div class="card-body"></div>
      </div>
      <div class="card card_size">
        <img
          src={WorkDay}
          class="card-img-top"
          alt="Work Day Scheduler Gif"
        />
        <div class="card-body"></div>
      </div>

    </div>
  );
}

export default Projects;
