// import React from 'react'
import logo from "../assets/naveenJakkulaLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/naveenkumarjakkula/"><FaLinkedin/> </a>
            <a href="https://github.com/naveen6828"><FaGithub/></a>
            {/* <FaLinkedin/>
            <FaGithub/> */}
            {/* <FaSquareXTwitter/>
            <FaInstagram/> */}
        </div>
    </nav>
  )
}

export default Navbar