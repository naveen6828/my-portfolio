// import React from 'react'
import { useState, useEffect } from "react";
import logo from "../assets/naveenJakkulaLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <div className="md:mb-8 lg:m-2 md:flex justify-center gap-9 text-2xl">
      <div className="relative text-center mt-2 text-slate-400 md:hover:text-white md:hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>
            About
          </Link>
        </div>
        <div className="relative text-center mt-2 text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="technologies" spy={true} smooth={true} offset={-100} duration={1000}>
            Skills
          </Link>
        </div>
        <div className="relative text-center mt-2 text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={1000}>
            Experience
          </Link>
        </div>
        <div className="relative text-center mt-2 text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={1000}>
            Projects
          </Link>
        </div>
        <div className="relative text-center mt-2 text-slate-400 hover:text-white hover:scale-125 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
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
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  function handleScroll() {
    if (window.scrollY >= 80) {
      setScrolled(true);
      if (isOpen == true) {
        console.log("isOpen: "+ isOpen);
        toggleNavbar();
        
      }
    } else {
      setScrolled(false);
      if (isOpen == true) {
        console.log("isOpen: "+ isOpen);
        toggleNavbar();
       
      }
    }
  }

  function handleResize(){
    if (isOpen == true) {
      console.log("resized");
      toggleNavbar();
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(scrolled);
  }, [scrolled])


  return (
    <div className={
      `${scrolled ? " bg-gradient-to-r from-purple-950 via-violet-950 to-indigo-950 " : " bg-transperent "}`
      + " w-full"}>
      <nav className="flex px-8 py-6 md:py-6 items-center justify-between container mx-auto">



        <div className="flex flex-shrink-0 items-center md:flex ">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </Link>
        </div>
        <div class="hidden justify-between md-flex w-full md:block md:w-auto flex" id="navbar-solid-bg">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full mb-8 pb-8">
          <div className="flex-wrap">
            <NavLinks />
          </div>

        </div>
      )}
    </div>

  )
}

export default Navbar