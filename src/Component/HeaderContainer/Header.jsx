import { HiOutlineMenuAlt4 } from "react-icons/hi"; 
import { BiSearch } from "react-icons/bi"; 
import React from 'react'
import logo from "../../assets/Images/tv.png"
const Header = () => {
    return (
        <>
            <main className="absolute w-full">
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
                    
                
                    <input type="search" name="" id=""  
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
        </>
    )
}

export default Header
