// import React from 'react'

import { CONTACT } from "../constants"
import {motion} from "framer-motion";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20"  id="contact">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
            Get in Touch
        </motion.h2>

        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{opacity:0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">{CONTACT.address}</motion.p>
            
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{opacity:0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            
            <a href="#" className="border-b">{CONTACT.email}</a>
            <div className="flex justify-center my-4">
              <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0, x: -100 }}
              transition={{ duration: 1 }}
              href="https://www.linkedin.com/in/naveenkumarjakkula/">
                <FaLinkedin className="text-5xl mx-4"/> 
               </motion.a>
               <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity:0, x: 100 }}
              transition={{ duration: 1 }} 
              href="https://github.com/naveen6828">
                <FaGithub className="text-5xl mx-4"/>
              </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Contact