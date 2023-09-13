import React, { useEffect, useState } from 'react'
import Hero from './HeroContainer/Hero'
import { HiOutlineMenuAlt4 } from "react-icons/hi"; 
import { BiSearch } from "react-icons/bi"; 
import logo from "../assets/Images/tv.png"

const Home = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const ApiKey = "ac6dc3eb216a103157a3af1e446ce52c";
  const url = "https://api.themoviedb.org/3/search/movie";

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  useEffect( () => {
    if(searchTerm) {
        setIsSearching(true);
    } else {
        setIsSearching(false)
    }
    const getmoviesBytitle = async () =>{
        const response = await fetch(`${url}?api_key=${ApiKey}&query=${searchTerm}`);
        const movies = await response.json();
        setMovies(movies.results);
    }

    getmoviesBytitle()
  },[searchTerm])

    return (
        <>
            <main className="absolute w-full hidden md:block  lg:block">
                <section className=' flex justify-around h-[6rem] pt-[1rem]' >
                   
                   <section className="flex space-x-6">
                    <div className="logo ">
                        <img src={logo} alt="" />
                    </div>
                <div className='logoTest pt-1 font-semibold text-slate-200'>
                    <h1 className="text-[1.4rem]">MovieBox</h1>
                </div>
                    </section>  
                 <section className="inputContainer relative">
                    
                
                    <input   onChange={handleChange} type="search" name="" id=""  value={searchTerm}
                     className="  block  w-full    bg-transparent  border-slate-300 border-[2.3px]
                     rounded-md py-2 pl-2 pr-3   focus:outline-none focus:border-sky-500
                     focus:ring-sky-500 focus:ring-1 sm:text-sm lg:w-[30rem] placeholder:text-slate-300"  
                    placeholder=' what do you want to watch ?' /> 
                    <span class="absolute inset-y-0   l text-slate-300 text-[1.3rem]">
        <BiSearch />
      </span>
                 </section>

                 <section className="menu flex space-x-6">
                    <div className="pt-1">
                        <a href="#" className="text-slate-200  font-semibold">Sign in</a>
                    </div>
                    <div className="w-[2.6rem] h-[2.6rem] bg-rose-700 rounded-full text-slate-100 pl-[.7rem] pt-[10px] cursor-pointer">
                    <HiOutlineMenuAlt4 className="text-[1.3rem]" />
                    </div>
                 </section>
                </section>
            </main>


            {/* monile_responsive */}

<section>


            <main className="absolute w-full   lg:hidden md:hidden xl:hidden">
                
                <section className=' flex justify-between h-[6rem] pt-[.5rem] px-4' >
                   
                   <section className="flex space-x-6">
                    <div className="logo ">
                        <img src={logo} alt="" />
                    </div>
                <div className='logoTest pt-1 font-semibold text-slate-200'>
                    <h1 className="text-[1.2rem]">MovieBox</h1>
                </div>
                    </section>  
              

                 <section className="menu flex  space-x-10">
                    <div className="pt-1">
                        <a href="#" className="text-slate-200  font-semibold">Sign in</a>
                    </div>
                    <div className="w-[2.6rem] h-[2.6rem] bg-rose-700 rounded-full text-slate-100 pl-[.7rem] pt-[10px] cursor-pointer">
                    <HiOutlineMenuAlt4 className="text-[1.3rem]" />
                    </div>
                 </section>
                </section>
                <div className='flex justify-center'>
                <section className='absolute top-[4.5rem] '>
                <section className="inputContainer relative ">
                    
                
                    <input   onChange={handleChange} type="search" name="" id=""  value={searchTerm}
                     className="  block     text-slate-300  bg-transparent   border-slate-300 border-[2.3px]
                     rounded-md py-2 pl-2 pr-3  capitalize  focus:outline-none focus:border-sky-500
                     focus:ring-sky-500 focus:ring-1 sm:text-sm w-[19rem] placeholder:text-slate-300"  
                    placeholder=' what do you want to watch ?' /> 
                    <span class="absolute inset-y-0   l text-slate-300 text-[1.3rem]">
        <BiSearch />
      </span>
                 </section>
                </section>
                </div>

                
            </main>
            
            </section>









            {/* monile_responsive */}

            <Hero 
            isSearching={isSearching}
            searchedMovies={movies}
            />
        </>

    )
}

export default Home
