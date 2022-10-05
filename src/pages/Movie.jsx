import React from "react";
import MoviesContainer from "../components/MovieContainer";
import bgHero from '../Images/la-casa-de-papel-logo.png'
import { Link } from "react-router-dom";

const Movie = () => {
  const title = "Movie List";
  document.title = "Dumbflix | " + title;

  return (
    <>
      <div>
        <div className="background-hero-movie container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
          <h1 className='text-size text-start'>GoodFellas</h1>
            <p className="">
            A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top.
            </p>
            <div className="mb-4">
              <span>2019</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                Movie
              </button>
            </div>
            <div>
              <Link to={`/video/11`} className="text-decoration-none">
                <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                  WATCH NOW!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MoviesContainer />
    </>
  );
};

export default Movie;
