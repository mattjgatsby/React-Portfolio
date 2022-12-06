import React from "react";
import SoundsLike from "../../assets/images/Sounds-like-Project.jpg";
import WorkDay from "../../assets/images/Work Day Scheduler.gif";
import ECommerce from "../../assets/images/E-Commerce-SS.png";
import EmployeeTracker from "../../assets/images/Employee-Tracker.png";

function Projects() {
  return (
    <div className="custom_project_div">
      <div className="card card_size border border-dark">
        <h1>Sounds Like All Over the World!</h1>
        <a
          href="https://mattjgatsby.github.io/artist-event-and-rec/"
          target="blank"
        >
          <img
            src={SoundsLike}
            className="card-img-top image"
            alt="Sounds Like Project ScreenShot"
          />
        </a>
      </div>
      <div className="card card_size border border-dark">
        <h1>Work Day Scheduler</h1>
        <a
          href="https://mattjgatsby.github.io/work-day-scheduler/"
          target="blank"
        >
          <img
            src={WorkDay}
            className="card-img-top image"
            alt="Work Day Scheduler Gif"
          />
        </a>
      </div>
      <div className="card card_size border border-dark">
        <h1>E-Commerce Backend</h1>
        <a
          href="https://github.com/mattjgatsby/E-commerce-back-end"
          target="blank"
        >
          <img
            src={ECommerce}
            className="card-img-top image"
            alt="E-Commerce backend ScreenShot"
          />
        </a>
      </div>

      <div className="card card_size border border-dark">
        <h1>Employee Tracker</h1>
        <a
          href="https://github.com/mattjgatsby/employee-tracker"
          target="blank"
        >
          <img
            src={EmployeeTracker}
            className="card-img-top image"
            alt="Employee Tracker Backend screenshot"
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
