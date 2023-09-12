import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHeartFill } from "react-icons/bs"; 

import icon1 from "../assets/Images/imbd.png";
import icon2 from "../assets/Images/PngItem_1381056 1.png";

const SearchMovie = ({ searchedMovies }) => {
    return (
        <div style={{ minHeight: "100vh"} }  className="bg-blue-600 z-50 pt-[10rem]">
 <figure className="cardContainer flex flex-wrap justify-center">
                        {searchedMovies.map(movie => (
                            <section key={movie.id} className='p-4 mx-[2rem] mb-[2rem] relative'>
                                <Link to={`/movie/${movie.id}`}>
                                     <span className="bg-red-500 ab w-[2rem] h-[2rem]
                                     pl-[.5rem] pt-[.6rem]
                                     rounded-full"><BsFillHeartFill className="text-slate-300" /></span>
                                <div className=" h-[500px] relative w-[250px]">
                                    
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-full'
                                    />
                                    <figcaption className='p-2'>
                                        <div className="flex space-x-1">

                                        <h3 className="text-sm mt-1 text-slate-400 ">{movie.original_language},</h3>
                                        <h3 className="text-sm mt-1 text-slate-400 ">{new Date(movie.release_date).getFullYear()}</h3>
                                        </div>
                                        <h1 className="text-lg font-bold">{movie.title}</h1>
                                        <div className="icons flex my-[.6rem]  justify-between ">
                              <div className="icon1 flex space-x-3">
                                <div>
                                <img src={icon1} alt="" />
                                </div>
                                <span className="text-slate-400 block font-semibold">86.0/100</span>
                              </div>
                              <div className="icon2 flex space-x-3">
                              <div>
                                <img src={icon2} alt="" />
                                </div>
                                <span className="text-slate-400 block font-semibold">97%</span>
                              </div>
                           
                            </div>
                                        {/* <h3 className="text-sm font-medium mt-1">{movie.vote_average}</h3> */}
                                        {/* <div className="mt-2 flex flex-wrap space-x-1">
                                            {Genres[movie.id]?.map(genre => (
                                                <span key={genre} className=" text-slate-400  ">
                                                    {genre},
                                                </span>
                                            ))}
                                        </div> */}
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
