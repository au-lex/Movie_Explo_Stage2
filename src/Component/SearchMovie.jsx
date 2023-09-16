import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHeartFill } from "react-icons/bs"; 

import icon1 from "../assets/Images/imbd.png";
import icon2 from "../assets/Images/PngItem_1381056 1.png";

const SearchMovie = ({ searchedMovies }) => {
    return (
        <div style={{ minHeight: "100vh"} }  className="bg-blue-600 z-50 pt-[10rem]">
  <figure className="cardContainer flex flex-wrap justify-center">
              {Movies.map((movie) => (
                <section
                  data-testid="movie-card"
                  key={movie.id}
                  className="p-4 mx-[2rem] mb-[2rem] relative"
                >
                  <div className="likedContainer  absolute h-[50px]  w-[200px] z-50">
                    <span
                      className="bg-red-500 ab w-[2.5rem] h-[2.5rem] z-50 pl-[.7rem] pt-[.8rem] rounded-full liked"
                      onClick={() => toggleLike(movie.id)}
                    >
                      {likedMovies.has(movie.id) ? (
                        <BsFillHeartFill className="text-slate-300 cursor-pointer" />
                      ) : (
                        <BsHeart className="text-slate-300 cursor-pointer" />
                      )}
                    </span>
                  </div>
                  <Link to={`/movies/${movie.id}`}>
                    <div className=" h-[500px] relative w-[250px]">
                      <img
                        data-testid="movie-poster"
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full"
                      />
                      <figcaption className="p-2">
                        <div className="flex space-x-1">
                          <h3 className="text-sm mt-1 text-slate-400 ">
                            {Countries[movie.id]},
                          </h3>
                          <h3
                            data-testid="movie-release-date"
                            className="text-sm mt-1 text-slate-400 "
                          >
                            {new Date(movie.release_date).toLocaleDateString()}
                          </h3>
                        </div>
                        <h1
                          data-testid="movie-title"
                          className="text-lg font-bold"
                        >
                          {movie.title}
                        </h1>
                        <div className="icons flex my-[.6rem]  justify-between ">
                          <div className="icon1 flex space-x-3">
                            <div>
                              <img src={icon1} alt="" />
                            </div>
                            <span className="text-slate-400 block font-semibold">
                              86.0/100
                            </span>
                          </div>
                          <div className="icon2 flex space-x-3">
                            <div>
                              <img src={icon2} alt="" />
                            </div>
                            <span className="text-slate-400 block font-semibold">
                              97%
                            </span>
                          </div>
                        </div>
                        {/* <h3 className="text-sm font-medium mt-1">{movie.vote_average}</h3> */}
                        <div className="mt-2 flex flex-wrap space-x-1">
                          {Genres[movie.id] && (
                            <span className=" text-slate-400  ">
                              {Genres[movie.id].join(", ")}
                            </span>
                          )}
                        </div>
                      </figcaption>
                    </div>
                  </Link>
                </section>
              ))}
            </figure>


            </div>
    )
}

export default SearchMovie
