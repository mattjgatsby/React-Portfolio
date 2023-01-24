import React from "react";
import PokedexTracker from "../ProjectImages/pokedexTracker.png";
import ECommerce from "../ProjectImages/E-Commerce-SS.png";
import EmployeeTracker from "../ProjectImages/Employee-Tracker.png";
import SoundsLike from "../ProjectImages/Sounds-like-Project.jpg";

const Projects = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Projects</h1>
      <hr></hr>
      <br></br>
      <div className="container w-75">
        <p className="text-center">
          Here are some of the work I've done recently. Feel free to click on
          the images to go to either the deployed application or a GitHub repository for backend
          work! Thank you!
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <br></br>
          <div className="card-deck">
            <div className="card">
              <img src={PokedexTracker} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img src={ECommerce} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img src={EmployeeTracker} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>

            <div className="card">
              <img src={SoundsLike} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
