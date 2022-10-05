import React from "react";
import SeriesContainer from "../components/SeriesContainer";
import bgHero from '../Images/la-casa-de-papel-logo.png'
import { Link } from "react-router-dom";

const TvShows = () => {
  const title = "Series List";
  document.title = "Dumbflix | " + title;

  return (
    <>
      <div>
        <div className="background-hero-tv container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
            <img className="object-fit" src={bgHero}/>
            <p className="">
            This original Netflix series, originally titled La Casa de Papel, follows the Professor (Álvaro Morte), a criminal mastermind who brings eight thieves together to take hostages.
            </p>
            <div className="mb-4">
              <span>2017</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                TV Series
              </button>
            </div>
            <div>
              <Link to={`/video/8`} className="text-decoration-none">
                <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                  WATCH NOW!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SeriesContainer />
    </>
  );
};

export default TvShows;
