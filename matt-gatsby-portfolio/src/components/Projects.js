import React from "react";
import PokedexTracker from "../assets/images/pokedexTracker.png";
import ECommerce from "../assets/images/E-Commerce-SS.png";
import EmployeeTracker from "../assets/images/Employee-Tracker.png";
import SoundsLike from "../assets/images/Sounds-like-Project.jpg";

const Projects = () => {
  return (
    <section class="dark">
      <div class="container py-4">
        <h1 class="h1 text-center" id="pageHeaderTitle">
        Projects
        </h1>
        {/* PokeDexTracker */}
        <article class="postcard dark blue">
          <a class="postcard__img_link">
            <img
              class="postcard__img"
              src={PokedexTracker}
              alt="Pokedex Tracker App"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title blue">
              <a>Pokedex Tracker</a>
            </h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
            This application serve as a tracker for Pokemon fans to keep track of all of the Pokemon that they've caught across all nine generations! Once the user has signed up or logged in with valid credentials, they can choose an avatar for their account from over 1000 "sprite" images. After that, they can begin logging Pokemon as "caught" within any of the nine pages representing each generation. As they catch more and more Pokemon, the badges on the dashboard will upgrade next to each box of data, containing their stats for each generation. If the user catches all 1008 Pokemon, they will have the Master Ball badge next to all nine generations! Gotta catch 'em all!
            </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>Full Stack App
              </li>
              <li class="tag__item play blue">
                <a href="https://pokemon-app.herokuapp.com/">
                  <i class="fas fa-play mr-2"></i>Visit Site!
                </a>
              </li>
              <li class="tag__item play red">
                <a href="https://github.com/AJManzione/Pokemon-Trading-Center">
                  <i class="fas fa-play mr-2"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* ECommerce */}
        <article class="postcard dark red">
          <a class="postcard__img_link">
            <img
              class="postcard__img"
              src={ECommerce}
              alt="E-Commerce Backend App"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title red">
              <a>E-Commerce Back End</a>
            </h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
            This E-commerce back end is made using Express.js API and Sequelize to access a MySQL database.
            </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>Back End App
              </li>
              <li class="tag__item play red">
                <a href="https://github.com/mattjgatsby/E-commerce-back-end">
                  <i class="fas fa-play mr-2"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* Employee Tracker */}
        <article class="postcard dark green">
          <a class="postcard__img_link">
            <img
              class="postcard__img"
              src={EmployeeTracker}
              alt="Employee Tracker Back End App"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title green">
              <a>Employee Tracker</a>
            </h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
            This node based application is used to track employees, roles, and departments in a company database. I built this to work with node.js and MySQL databases.
            </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>Back End App
              </li>
              <li class="tag__item play green">
                <a href="https://github.com/mattjgatsby/employee-tracker">
                  <i class="fas fa-play mr-2"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* Sounds Like */}
        <article class="postcard dark yellow">
          <a class="postcard__img_link">
            <img
              class="postcard__img"
              src={SoundsLike}
              alt="Sounds Like App"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title yellow">
              <a >Sounds Like All Over the World</a>
            </h1>
            <div class="postcard__subtitle small">
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">
            This application is designed for a user who wants to find concert events by an artist of their choice, or by any similar artists that are listed on the webpage. The application keeps a list of the user's previous searches, allowing them to branch off from any of those jumping-off points. The data provided comes from the Ticket Master API and from the Last FM API.
            </div>
            <ul class="postcard__tagbox">
              <li class="tag__item">
                <i class="fas fa-tag mr-2"></i>Full Stack App
              </li>
              <li class="tag__item play yellow">
                <a href="https://mattjgatsby.github.io/artist-event-and-rec/">
                  <i class="fas fa-play mr-2"></i>Visit Site!
                </a>
              </li>
              <li class="tag__item play yellow">
                <a href="https://github.com/mattjgatsby/artist-event-and-rec">
                  <i class="fas fa-play mr-2"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
