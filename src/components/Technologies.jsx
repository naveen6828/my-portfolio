// import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTerraform } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";





import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});



const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24" id="technologies">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                {/* Java */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl" />
                    <p className="text-s text-center">Java</p>
                </motion.div>

                {/* Springboot */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-500" />
                    <p className="text-s text-center">Spring</p>
                </motion.div>

                {/* Python */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-blue-900" />
                    <p className="text-s text-center">Python</p>
                </motion.div>

                {/* JavaScript */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                    <p className="text-s text-center">JScript</p>
                </motion.div>

                {/*  React */}
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <p className="text-s text-center">ReactJS</p>
                </motion.div>

                {/* AWS */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-500" />
                    <p className="text-s text-center">AWS</p>
                </motion.div>

                {/* Azure */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMicrosoftazure className="text-7xl text-sky-500" />
                    <p className="text-s text-center">Azure</p>
                </motion.div>

                {/* Terraform */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTerraform className="text-7xl text-purple-500" />
                    <p className="text-s text-center">Terraform</p>
                </motion.div>

                {/* Kafka */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiApachekafka className="text-7xl " />
                    <p className="text-s text-center">Kafka</p>
                </motion.div>

                {/* Git */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-red-500" />
                    <p className="text-s text-center">Git</p>
                </motion.div>

                {/* Docker */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrDocker className="text-7xl text-blue-400" />
                    <p className="text-s text-center">Docker</p>
                </motion.div>

                {/* Kuber */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiKubernetes className="text-7xl text-blue-700" />
                    <p className="text-s text-center">K8s</p>
                </motion.div>

                {/* Angular */}
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAngular className="text-7xl text-red-700" />
                    <p className="text-s text-center">Angular</p>
                </motion.div>

                {/* NodeJS */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                    <p className="text-s text-center">NodeJS</p>
                </motion.div>

                {/* PostgreSQL */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                    <p className="text-s text-center">Postgres</p>
                </motion.div>

                {/* MongoDB */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                    <p className="text-s text-center">MongoDB</p>
                </motion.div>

                {/* MySql */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className="text-7xl text-blue-400" />
                    <p className="text-s text-center">MySQL</p>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies