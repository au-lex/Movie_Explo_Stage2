import { BiChevronRight } from "react-icons/bi"; 
import { BsFillPlayCircleFill } from "react-icons/bs"; 

import icon1 from "../../assets/Images/imbd.png";
import icon2 from "../../assets/Images/PngItem_1381056 1.png";




import React, { useEffect, useState } from 'react';
import { getName } from 'country-list';
const Hero = () => {
    const ApiKey = "ac6dc3eb216a103157a3af1e446ce52c";
    const FeaturedMovies = "https://api.themoviedb.org/3/movie/top_rated";
    // const FeaturedMovies = "https://api.themoviedb.org/3/trending/movie/week";
  


    const [Movies, Setmovies] = useState([]);
    const [Countries, SetCountries] = useState({});
    const [Genres, SetGenres] = useState({});

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch(`${FeaturedMovies}?api_key=${ApiKey}`);
                const data = await response.json();
                Setmovies(data.results.slice(0, 12));

                for (let movie of data.results.slice(0, 12)) {
                    const movieDetailResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}`);
                    const movieDetailData = await movieDetailResponse.json();
                    SetCountries(prevCountries => ({
                        ...prevCountries,
                        [movie.id]: movieDetailData.production_countries[0]?.iso_3166_1
                    }));
                    SetGenres(prevGenres => ({
                        ...prevGenres,
                        [movie.id]: movieDetailData.genres.map(g => g.name)
                    }));
                }
            } catch (error) {
                console.log("Error Fetching Movies:", error);
            }
        };
        getMovies();
    }, []);

    return (
        <>
            <main>
                <section className="banner">
                    <div className="bannerContainer">
                        <section className='pl-[8rem] pt-[10rem]'>
                        <section className="herotitle w-[40%] ">
                            <h1 className='font-sans text-slate-300 font-bold text-[3rem]
                             capitalize'>john wick 3: <br /> parabellum</h1>

                            <div className="icons flex my-[.6rem] space-x-12 ">
                              <div className="icon1 flex space-x-3">
                                <div>
                                <img src={icon1} alt="" />
                                </div>
                                <span className="text-slate-300 block">86.0/100</span>
                              </div>
                              <div className="icon2 flex space-x-3">
                              <div>
                                <img src={icon2} alt="" />
                                </div>
                                <span className="text-slate-300 block">97%</span>
                              </div>
                           
                            </div>
                            <p className='text-slate-300 text-[15px]'> john wick is on the run after killing a memeber<br /> 
                            of the international
                                assassin's guild, and with <br />
                                 $14 million price tag on his head, he is the <br />
                                 target
                                of hit men and women everywhere
                            </p>
                            <div className="bg-rose-700  capitalize font-bold py-2  w-[30%] flex rounded-[8px] my-4">
                            <span className="text-slate-200 block px-3 pt-1"><BsFillPlayCircleFill /></span>
                              <a href="#"  className="text-slate-300">Watch trailer</a>
                            </div>
                        </section>
                        </section>
                    </div>
                </section>

                <section className="cardDisplay">
                    <section className='px-[7.2rem] flex justify-between'>
                        <h2 className='text-[1.8rem] font-semibold my-[3rem]'>Featured movie</h2>
                        <div className="flex text-rose-600">
                        <h4 className="text-[15px] font-semibold my-[3rem] ">See More </h4>
                        <span className="block text-[25px] font-semibold my-[3rem]"><BiChevronRight /></span>
                        </div>
                    </section>
                    <figure className="cardContainer flex flex-wrap justify-center">
                        {Movies.map(movie => (
                            <section key={movie.id} className='p-4 mx-[2rem] mb-[2rem]'>
                                <div className=" h-[500px] relative w-[250px]">
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-full'
                                    />
                                    <figcaption className='p-2'>
                                        <div className="flex space-x-1">

                                        <h3 className="text-sm mt-1 text-slate-400 ">{Countries[movie.id]},</h3>
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
                                        <div className="mt-2 flex flex-wrap space-x-1">
                                            {Genres[movie.id]?.map(genre => (
                                                <span key={genre} className=" text-slate-400  ">
                                                    {genre},
                                                </span>
                                            ))}
                                        </div>
                                    </figcaption>
                                </div>
                            </section>
                        ))}
                    </figure>
                </section>
            </main>
        </>
    )
}

export default Hero;























// import React, { useEffect, useState } from 'react'
// // import banner from "../../assets/Images/Poster5.png"

// const Hero = () => {

//     const ApiKey = "ac6dc3eb216a103157a3af1e446ce52c";
//     const FeaturedMovies = "https://api.themoviedb.org/3/trending/movie/week";


//     const [Movies, Setmovies] = useState([]);
//     const [Countries, SetCountries] = useState({});  // A dictionary with movie id as key and country as value
    

//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await fetch(`${FeaturedMovies}?api_key=${ApiKey}`);
//                 const data = await response.json();
//                 Setmovies(data.results.slice(0, 10));  // Limit results to 10 movies
    
//                 for (let movie of data.results.slice(0, 10)) {
//                     const movieDetailResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}`);
//                     const movieDetailData = await movieDetailResponse.json();
//                     SetCountries(prevCountries => ({
//                         ...prevCountries,
//                         [movie.id]: movieDetailData.production_countries[0]?.iso_3166_1  // Set the country for the movie
//                     }));
//                 }
//             } catch (error) {
//                 console.log("Error Fetching Movies:", error);
//             }
//         };
//         getMovies();
//     }, []);
    
    

//     return (

//         <>
//       <main>
//         <section className="banner">
//             <div className="bannerContainer">
               
//             </div>
//         </section>
       

//         <section className="cardDisplay"> 
//         <section className='pl-[7.2rem]'>

//         <h2 className='text-[1.8rem] font-semibold my-[3rem]'>Featured movie</h2>
//         </section>
//         <figure className="cardContainer flex flex-wrap justify-center">
//     {Movies.map(movie => (
//         <section key={movie.id} className='p-4 mx-[2rem]'> 
//             <div className="border shadow-lg h-[500px] relative w-[250px]"> 
//                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
//                     alt={movie.title} 
//                     className='w-full '
//                 />
//                 <figcaption className='p-2'>
//                     <h1 className=" text-lg font-bold">{movie.title}</h1> 
//                     <h3 className="text-sm font-medium mt-1">{movie.vote_average}</h3>
//                     <h3 className="text-sm mt-1">{new Date(movie.release_date).toUTCString()}</h3>
//                     <h3 className="text-sm mt-1">Country: {Countries[movie.id]}</h3>

//                     <h3 className="text-xs mt-1">{movie.genre_ids.join(", ")}</h3>
//                 </figcaption>
//             </div>
//         </section>
//     ))}
// </figure>

//         </section>
//       </main>
//         </>
//     )
// }

// export default Hero



