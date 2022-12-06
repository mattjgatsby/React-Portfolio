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
            classNameName="image"
            src={SoundsLike}
            className="card-img-top"
            alt="Sounds Like Project ScreenShot"
          />
        </a>
      </div>
      <div className="card card_size border border-dark">
        <h1>Work Day Scheduler</h1>
        <img
          src={WorkDay}
          className="card-img-top"
          alt="Work Day Scheduler Gif"
          onClick={() =>
            document.location.replace(
              "https://mattjgatsby.github.io/work-day-scheduler/"
            )
          }
        />
      </div>
      <div className="card card_size border border-dark">
        <h1>E-Commerce Backend</h1>
        <img
          src={ECommerce}
          className="card-img-top"
          alt="E-Commerce backend ScreenShot"
          onClick={() =>
            document.location.replace(
              "https://github.com/mattjgatsby/E-commerce-back-end"
            )
          }
        />
      </div>

      <div className="card card_size border border-dark">
        <h1>Employee Tracker</h1>
        <img
          src={EmployeeTracker}
          className="card-img-top"
          alt="Employee Tracker Backend screenshot"
          onClick={() =>
            document.location.replace(
              "https://github.com/mattjgatsby/employee-tracker"
            )
          }
        />
      </div>
    </div>
  );
}

export default Projects;
