import { AiFillYoutube } from "react-icons/ai"; 
import { AiFillTwitterSquare } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai"; 
import React from 'react'

const Footer = () => {
    return (
        <>

 <main className="flex justify-center mb-[2.5rem] mt-[4rem]">
    <section>
    <section className="footericons flex space-x-10  justify-center text-[1.5rem] ">
        <div><AiFillFacebook /></div>
        <div><AiOutlineInstagram /></div>
        <div><AiFillTwitterSquare /></div>
        <div><AiFillYoutube /></div>
    </section>
    <nav className="footerLinks flex space-x-14 font-bold my-6">
        <a href="#">Condition of use</a>
        <a href="#">privacy & policy</a>
        <a href="#">press room</a>
    </nav>
    <p className="text-center font-semibold text-slate-400 text-[14px]">&copy; 2021, Moviebox by AdrianaEka Prayudha.</p>
    </section>
 </main>


        </>
    )
}

export default Footer
