// import React from 'react'
import { useState } from "react";
import logo from "../assets/naveenJakkulaLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";
import {Menu, X} from "lucide-react";

const NavLinks = () => {
  return(
    <>
    <div className="m-8 flex items-center justify-center gap-9 text-2xl">
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>
            About
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="technologies" spy={true} smooth={true} offset={-100} duration={1000}>
            Skills
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={1000}>
            Experience
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={1000}>
            Projects
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000}>
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6 container mx-auto">
      <div className="flex flex-shrink-0 items-center md:flex ">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </Link>
      </div>
      <NavLinks/>
      {/* <div>
        <button onClick={toggleNavbar}>{isOpen? <X/>:<Menue/>}</button>
      </div> */}
      {/* <div className="m-8 flex items-center justify-center gap-9 text-2xl">
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>
            About
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="technologies" spy={true} smooth={true} offset={-100} duration={1000}>
            Skills
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={1000}>
            Experience
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={1000}>
            Projects
          </Link>
        </div>
        <div class="relative text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000}>
            Contact
          </Link>
        </div>
      </div> */}
    </nav>

  )
}

export default Navbar