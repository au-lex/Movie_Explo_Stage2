import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { BiChevronRight } from "react-icons/bi"; 
import { BsFillPlayCircleFill } from "react-icons/bs"; 
import { Link } from 'react-router-dom';


import icon1 from "../../assets/Images/imbd.png";
import icon2 from "../../assets/Images/PngItem_1381056 1.png";



import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useEffect, useState } from 'react';
import { getName } from 'country-list';
import SearchMovie from "../SearchMovie";
;

const Hero = ({ isSearching, searchedMovies }) => {
    const ApiKey = "ac6dc3eb216a103157a3af1e446ce52c";
    const FeaturedMovies = "https://api.themoviedb.org/3/movie/top_rated";
    // const FeaturedMovies = "https://api.themoviedb.org/3/trending/movie/week";
  

    const [likedMovies, setLikedMovies] = useState(new Set())
    const toggleLike = (movieId) => {
        const updatedLikes = new Set(likedMovies);
    
        if (likedMovies.has(movieId)) {
            updatedLikes.delete(movieId);
        } else {
            updatedLikes.add(movieId);
        }
    
        setLikedMovies(updatedLikes);
    };
    

    const [Movies, Setmovies] = useState([]);
    const [Countries, SetCountries] = useState({});
    const [Genres, SetGenres] = useState({});

    useEffect(() => {



        const getMovies = async () => {
            try {
                const response = await fetch(`${FeaturedMovies}?api_key=${ApiKey}`);
                const data = await response.json();
                Setmovies(data.results.slice(0, 10));

                for (let movie of data.results.slice(0, 10)) {
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
            { isSearching ? 
            (<SearchMovie searchedMovies={searchedMovies}/>) :
                (<main  >
                <section className="banner hidden lg:block md:block xl:block">
                    <div className="bannerContainer">
                        <section className='pl-[8rem] pt-[10rem]'>
                        <section className="herotitle w-[40%] ">
                            <h1  className='font-sans text-slate-300 font-bold text-[3rem]
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
   {/* mobil_responsive */}



   <section className="bannerContainer2 lg:hidden md:hidden xl:hidden  ">
                    <div className="banner2">
                        <div className='b'></div>
                        <section className='pl-[1.3rem] pt-[2rem]'>
                        <section className="herotitle w-[100%] ">
                            <section className="flex justify-between">

                            <h1 className='font-sans text-slate-300 font-bold
                            mt-[6rem] text-[1rem]
                             capitalize z-50'>john wick 3: <br /> parabellum</h1>
                               <div className="icons flex my-[.6rem] space-x-12 ">
                              <div className="icon1 flex space-x-3 mt-[6rem]">
                                <div>
                                <img src={icon1} alt="" />
                                </div>
                                <span className="text-slate-300 block z-50">86.0/100</span>
                              </div>
                              <div className="icon2 flex space-x-3">
                              <div>
                                {/* <img src={icon2} alt="" /> */}
                                </div>
                                {/* <span className="text-slate-300 block">97%</span> */}
                              </div>
                           
                            </div>
                            </section>

                          
                            <p className='text-slate-300 text-[12px] z-50'> john wick is on the run after killing a memeber<br /> 
                            of the international
                                assassin's guild, and with <br />
                                 $14 million price tag on his head, he is the <br />
                                 target
                                of hit men and women everywhere
                            </p>
                            <div className="bg-rose-700 z-50  capitalize font-bold py-2  w-[50%] flex rounded-[8px] my-4">
                            <span className="text-slate-200 block px-3 pt-1 z-50 "><BsFillPlayCircleFill /></span>
                              <a href="#"  className="text-slate-300 z-50'">Watch trailer</a>
                            </div>
                        </section>
                        </section>
                    </div>
                </section>

                <section className="cardDisplay lg:hidden md:hidden xl:hidden ">
                    <section   className='px-[1.2rem] flex justify-between'>
                     
                        <h2 className='text-[1.8rem] font-semibold my-[3rem]'>Featured movie</h2>
                        <div className="flex text-rose-600">
                        <h4 className="text-[15px] font-semibold my-[3.5rem] ">See More </h4>
                        <span className="block text-[25px] font-semibold my-[3.5rem]"><BiChevronRight /></span>
                        </div>
                    </section>
                    <figure className="cardContainer flex flex-wrap justify-center">
                        {Movies.map(movie => (
                            <section   data-testid= "movie-card"  key={movie.id} className='p-4 mx-[2rem] mb-[2rem] relative'>

                            <div className='likedContainer  absolute h-[50px]  w-[200px] z-50'>


<span  
className="bg-red-500 ab w-[2.5rem] h-[2.5rem] z-50 pl-[.7rem] pt-[.8rem] rounded-full liked" 
onClick={() => toggleLike(movie.id)}
>
{likedMovies.has(movie.id) ? 
<BsFillHeartFill className="text-slate-300 cursor-pointer" /> : 
<BsHeart className="text-slate-300 cursor-pointer" />
}
</span>

</div>
                                <Link to={`/movies/${movie.id}`}>
                                    
    
                                <div className=" h-[500px] relative w-[250px]">
                                    
                                    <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-full'
                                    />
                                    <figcaption className='p-2'>
                                        <div className="flex space-x-1">

                                        <h3 className="text-sm mt-1 text-slate-400 ">{Countries[movie.id]},</h3>
                                        <h3 data-testid ="movie-release-date" className="text-sm mt-1 text-slate-400 ">
                                        {new Date(movie.release_date).toLocaleDateString()}</h3>
                                        </div>
                                        <h1 data-testid ="movie-title" className="text-lg font-bold">{movie.title}</h1>
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
                                            {Genres[movie.id] &&(
                                                <span className=" text-slate-400  ">
                                                    {Genres[movie.id].join(', ')}
                                                </span>
                                            )}
                                        </div>
                                    </figcaption>
                                </div>
                                </Link>
                            </section>
                        ))}
                    </figure>
                </section>


   {/* mobil_responsive */}



                <section className="cardDisplay hidden lg:block md:block xl:block">
                    <section className='px-[7.2rem] flex justify-between'>
                     
                        <h2 className='text-[1.8rem] font-semibold my-[3rem]'>Featured movie</h2>
                        <div className="flex text-rose-600">
                        <h4 className="text-[15px] font-semibold my-[3rem] ">See More </h4>
                        <span className="block text-[25px] font-semibold my-[3rem]"><BiChevronRight /></span>
                        </div>
                    </section>
                    
                    <figure className="cardContainer flex flex-wrap justify-center">
                        {Movies.map(movie => (
                            <section data-testid="movie-card"  key={movie.id} className='p-4 mx-[2rem] mb-[2rem] relative'>
                                <div className='likedContainer  absolute h-[50px]  w-[200px] z-50'>


                                <span  
    className="bg-red-500 ab w-[2rem] h-[2rem] z-50 pl-[.5rem] pt-[.6rem] rounded-full liked" 
    onClick={() => toggleLike(movie.id)}
>
    {likedMovies.has(movie.id) ? 
        <BsFillHeartFill className="text-slate-300 cursor-pointer" /> : 
        <BsHeart className="text-slate-300 cursor-pointer" />
    }
</span>

                                </div>
                                <Link to={`/movies/${movie.id}`}>


  
                                <div className=" h-[500px] relative w-[200px]">
                                    
                                    <img data-testid= "movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className='w-full'
                                    />
                                    <figcaption className='p-2'>
                                        <div className="flex space-x-1">

                                        <h3 className="text-sm mt-1 text-slate-400 ">{Countries[movie.id]},</h3>
                                        <h3 data-testid ="movie-release-date" className="text-sm mt-1 text-slate-400 ">
                                        {new Date(movie.release_date).toLocaleDateString()}</h3>
                                        </div>
                                        <h1 data-testid = "movie-title" className="text-lg font-bold">{movie.title}</h1>
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
                                            {Genres[movie.id] &&(
                                                <span className=" text-slate-400  ">
                                                    {Genres[movie.id].join(', ')}
                                                </span>
                                            )}
                                        </div>
                                    </figcaption>
                                </div>
                                </Link>
                            </section>
                        ))}
                    </figure>
                </section>
            </main>)
            }
        </>
    )
}

export default Hero;

























