import { RxHamburgerMenu } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";

// MovieDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/Images/tv.png";
import imageFooter from "../../assets/Images/Rectangle 37.png";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const ApiKey = "ac6dc3eb216a103157a3af1e446ce52c";
  const [movieDetails, setMovieDetails] = useState(null);
  const convertToUTCDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleMenu = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails)
    return (
      <div className="loader bg-slate-200 h-[100vh] fixed top-0 bottom-0 w-[100%]">
        <section className="flex justify-center items-center space-x-6">
          <div className="h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce"></div>
          <div className="h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce"></div>
          <div className="h-[1rem] w-[1rem] rounded-full bg-rose-700 animate-bounce"></div>
        </section>
      </div>
    );

  return (
    <div className="bg-slate-100  absolute bottom-0 top-0 h-[150vh] overflow-x-hidden">
      <section className="flex">
        {/* mobile_responsive */}

        <figure className=" px-[1rem] lg:hidden md:hidden xl:hidden pt-[2rem]">
          <section className="flex justify-between px-4">
            <section className="flex space-x-4">
              <div className="logo  w-[50px]">
                <img src={logo} alt="" />
              </div>
              <div className="logoTest pt-1 font-semibold text-slate-900">
                <h1 className="text-[1.4rem]">MovieBox</h1>
              </div>
            </section>

            <div className=" text-slate-600    ">
              <span
                onClick={toggleMenu}
                className="block text-[16px] 
                     font-semibold my-[1rem]"
              >
                Menu
              </span>
            </div>
          </section>

          <div className="flex text-slate-600 space-x-2">
            <span className="block text-[18px] font-semibold my-[1rem]"></span>
            <Link to={"/"} className="text-[16px] font-semibold my-[1rem] ">
              Back{" "}
            </Link>
          </div>
          <div   data-testid="movie-card" className="movieDetailContainer2 ">
            <span className="absolute play z-50  pl-[1rem] w-[8rem] h-[8rem] rounded-full">
              <span className="text-white text-[6rem]">
                <i class="ri-play-fill"></i>
              </span>
            </span>
            <img
              data-testid="movie-banner"
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={`Backdrop of ${movieDetails.title}`}
              className="movieBackdrop2"
            />
          </div>

          <div className="pl-[0rem] flex flex-wrap">
            <h2 data-testid="movie-title" className="font-bold">
              {movieDetails.title},....
            </h2>
            <p data-testid="movie-release-date">
            {convertToUTCDate(movieDetails.release_date)}
            </p>
            <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
          </div>
          <section className="flex pt-[2.5rem] flex-wrap">
            <section className="pl-[0rem]">
              <p data-testid="movie-overview">{movieDetails.overview}</p>
              <section className="my-[2rem]">
                <h3 className="capitalize my-[1.5rem]">
                  director :{" "}
                  <span className="text-rose-600 "> joseph koser</span>
                </h3>
                <h3 className="capitalize my-[1.5rem]">
                  writers : <span className="text-rose-600 ">joseph koser</span>
                </h3>
                <h3 className="capitalize my-[1.5rem]">
                  Stars : <span className="text-rose-600 ">joseph koser</span>
                </h3>
              </section>
              <div className="flex flex-wrap border-slate-300  h-[2.5rem] w-[98%] rounded-lg">
                <button
                  className="block bg-rose-600 w-[16rem] h-[2.6rem]  mb-4 rounded-lg
                text-slate-100"
                >
                  Top rated movies #65
                </button>
                <button className=" font-bold  w-[16rem] h-[2.6rem]">
                  Award 9 normination
                </button>
              </div>
            </section>
            <section>
              <div className="pr-[3.5rem] mt-4">
                <button
                  className="block bg-rose-600 w-[18rem] h-[2.6rem]  mb-4 rounded-lg
                text-slate-100
                "
                >
                  See Showtimes
                </button>
                <button
                  className="block text-slate-600 font-bold w-[18rem] h-[2.6rem] rounded-lg mb-5 relative
                border-rose-600 border  bg-rose-100"
                >
                  {" "}
                  <RxHamburgerMenu
                    className="absolute 
                 top-3  left-12"
                  />
                  More watch options
                </button>
              </div>
              <div className="pr-[3.5rem]">
                <img src={imageFooter} alt="" />
              </div>
            </section>
          </section>
        </figure>

        {/* mobile_responsive */}

        <aside
          className={`bg-slate-100 w-[80%] h-[120vh] side pt-6 px-8 z-50 fixed 
        shadow-md lg:hidden md:hidden xl:hidden
         border-slate-400 border-2 ${isSidebarActive ? "active" : ""}`}
        >
          <div className="">
            <section className="flex space-x-4 ">
              <div className="logo  w-[50px]">
                <img src={logo} alt="" />
              </div>
              <div className="logoTest pt-1 font-semibold text-slate-900">
                <h1 className="text-[1.4rem]">MovieBox</h1>
              </div>
            </section>

            <nav className="mt-[3rem]">
              <div className="flex text-slate-600  space-x-2 ">
                <span className="block text-[25px] font-semibold my-[1.5rem]">
                  <RiHome3Line />
                </span>
                <Link
                  to={"/"}
                  className="text-[13px] font-semibold my-[1.5rem]  pt-1"
                >
                  Home{" "}
                </Link>
              </div>

              <div className="flex text-rose-600  space-x-2  ">
                <span className="linkA bg-rose-200 p-10 "></span>
                <span className="block text-[25px] font-semibold my-[1.5rem] text-slate-600  z-50 ">
                  <BiCameraMovie />
                </span>
                <Link
                  to={"/"}
                  className="text-[13px] font-semibold my-[1.5rem] pt-1 z-50"
                >
                  Movies{" "}
                </Link>
              </div>

              <div className="flex text-slate-600  space-x-2">
                <span className="block text-[25px] font-semibold my-[1.5rem]">
                  <MdLiveTv />
                </span>
                <Link
                  to={"/"}
                  className="text-[13px] font-semibold my-[1.5rem] pt-1 "
                >
                  Tv Series{" "}
                </Link>
              </div>

              <div className="flex text-slate-600 space-x-2">
                <span className="block text-[18px] font-semibold my-[1.5rem]">
                  <BsCalendar2WeekFill />
                </span>
                <Link
                  to={"/"}
                  className="text-[13px] font-semibold my-[1.5rem] pt-1"
                >
                  Upcomming{" "}
                </Link>
              </div>
            </nav>

            <section className="mt-[3rem]">
              <div className="w-[10rem] h-[11rem] border border-rose-200 shadow-md rounded-md pt-[1.5rem] pl-[1rem]">
                <h4 className="text-[12px] font-semibold text-slate-600 ">
                  {" "}
                  play movies quizs <br /> and earn <br /> free tickets
                </h4>
                <p className="text-[12px] my-3">50k people are playing now</p>
                <button className="bg-rose-200 py-1 px-4 text-[12px] font-bold rounded-[22px]">
                  start playing
                </button>
              </div>

              <section className="mt-[2rem]">
                <div className="flex text-slate-600 space-x-2">
                  <span className="block text-[18px] font-semibold my-[1.5rem]">
                    <RiLogoutBoxRLine />
                  </span>
                  <Link
                    to={"/"}
                    className="text-[13px] font-semibold my-[1.5rem] "
                  >
                    Log out{" "}
                  </Link>
                </div>
              </section>
            </section>
          </div>
        </aside>

        <aside className="bg-slate-100 w-[15%] h-[100vh] hidden lg:block md:block xl:block pt-6 px-8 z-50  fixed shadow-md border-slate-400 border-2">
          <nav className="mt-[3rem]">
            <div className="flex text-slate-600  space-x-2 ">
              <span className="block text-[25px] font-semibold my-[1.5rem]">
                <RiHome3Line />
              </span>
              <Link
                to={"/"}
                className="text-[13px] font-semibold my-[1.5rem]  pt-1"
              >
                Home{" "}
              </Link>
            </div>

            <div className="flex text-rose-600  space-x-2  ">
              <span className="linkA bg-rose-200 p-10 "></span>
              <span className="block text-[25px] font-semibold my-[1.5rem] text-slate-600  z-50 ">
                <BiCameraMovie />
              </span>
              <Link
                to={"/"}
                className="text-[13px] font-semibold my-[1.5rem] pt-1 z-50"
              >
                Movies{" "}
              </Link>
            </div>

            <div className="flex text-slate-600  space-x-2">
              <span className="block text-[25px] font-semibold my-[1.5rem]">
                <MdLiveTv />
              </span>
              <Link
                to={"/"}
                className="text-[13px] font-semibold my-[1.5rem] pt-1 "
              >
                Tv Series{" "}
              </Link>
            </div>

            <div className="flex text-slate-600 space-x-2">
              <span className="block text-[18px] font-semibold my-[1.5rem]">
                <BsCalendar2WeekFill />
              </span>
              <Link
                to={"/"}
                className="text-[13px] font-semibold my-[1.5rem] pt-1"
              >
                Upcomming{" "}
              </Link>
            </div>
          </nav>

          <section className="mt-[3rem]">
            <div className="w-[10rem] h-[11rem] border border-rose-200 shadow-md rounded-md pt-[1.5rem] pl-[1rem]">
              <h4 className="text-[12px] font-semibold text-slate-600 ">
                {" "}
                play movies quizs <br /> and earn <br /> free tickets
              </h4>
              <p className="text-[12px] my-3">50k people are playing now</p>
              <button className="bg-rose-200 py-1 px-4 text-[12px] font-bold rounded-[22px]">
                start playing
              </button>
            </div>

            <section className="mt-[2rem]">
              <div className="flex text-slate-600 space-x-2">
                <span className="block text-[18px] font-semibold my-[1.5rem]">
                  <RiLogoutBoxRLine />
                </span>
                <Link
                  to={"/"}
                  className="text-[13px] font-semibold my-[1.5rem] "
                >
                  Log out{" "}
                </Link>
              </div>
            </section>
          </section>
        </aside>

        <figure className="ml-[15rem] hidden lg:block md:block xl:block">
          <div   data-testid="movie-card" className="movieDetailContainer">
            <span className="absolute play z-50  pl-[1rem] w-[8rem] h-[8rem] rounded-full">
              <span className="text-white text-[6rem]">
                <i class="ri-play-fill"></i>
              </span>
            </span>
            <img
              data-testid="movie-banner"
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={`Backdrop of ${movieDetails.title}`}
              className="movieBackdrop"
            />
          </div>
          <div className="pl-[3rem] flex">
            <h2 data-testid="movie-title" className="font-bold">
              {movieDetails.title},
            </h2>
            <p data-testid="movie-release-date" className="px-[2rem] font-bold">
            <h3 
    data-testid="movie-release-date" 
    className="text-sm mt-1 text-slate-400 "
>
    {convertToUTCDate(movieDetails.release_date)}
</h3>
            </p>
            <p data-testid="movie-runtime" className="px-[2rem] font-bold">
              {movieDetails.runtime} minutes
            </p>
          </div>
          <section className="flex pt-[2.5rem]">
            <section className="pl-[3rem]">
              <p data-testid="movie-overview">{movieDetails.overview}</p>
              <section className="my-[2rem]">
                <h3 className="capitalize my-[1.5rem]">
                  director :{" "}
                  <span className="text-rose-600 "> joseph koser</span>
                </h3>
                <h3 className="capitalize my-[1.5rem]">
                  writers : <span className="text-rose-600 ">joseph koser</span>
                </h3>
                <h3 className="capitalize my-[1.5rem]">
                  Stars : <span className="text-rose-600 ">joseph koser</span>
                </h3>
              </section>
              <div className="flex border-slate-300 border h-[2.5rem] w-[98%] rounded-lg">
                <button
                  className="block bg-rose-600 w-[16rem] h-[2.6rem]  mb-4 rounded-lg
                text-slate-100"
                >
                  Top rated movies #65
                </button>
                <button className="pl-[2rem] font-bold">
                  Award 9 normination
                </button>
              </div>
            </section>
            <section>
              <div className="pr-[3.5rem]">
                <button
                  className="block bg-rose-600 w-[18rem] h-[2.6rem]  mb-4 rounded-lg
                text-slate-100
                "
                >
                  See Showtimes
                </button>
                <button
                  className="block text-slate-600 font-bold w-[18rem] h-[2.6rem] rounded-lg mb-5 relative
                border-rose-600 border  bg-rose-100"
                >
                  {" "}
                  <RxHamburgerMenu
                    className="absolute 
                 top-3  left-12"
                  />
                  More watch options
                </button>
              </div>
              <div className="pr-[3.5rem]">
                <img src={imageFooter} alt="" />
              </div>
            </section>
          </section>
        </figure>
      </section>
    </div>
  );
};

export default MovieDetail;
