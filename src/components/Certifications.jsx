
import { motion } from "framer-motion";

import awsSAA from "../assets/badges/AWSSolutionsArchitect.png"
import awsCP from "../assets/badges/AWSCloudPractitioner.png"
import azFund from "../assets/badges/AzureFundamentals.png"
import mtaDB from "../assets/badges/MTA-DB-Fundamentals.png"
import terra from "../assets/badges/TerraformAssociate.png"
import ibmBC from "../assets/badges/IBM_Blockchain_Essentials.png"
import ibmCE from "../assets/badges/IBM_Cloud_Essentials.png"
import forage from "../assets/badges/J.P.Morgan Software Engineer.png"


const Certifications = () => {
    return (
        <>
            <div className="border-b border-neutral-800 pb-24" id="technologies">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">
                    Certifications
                </motion.h1>

                <div className="flex flex-wrap">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={awsSAA} alt="about-me" />
                            <p className="text-center">AWS Solutions Architect</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={awsCP} alt="about-me" />
                            <p className="text-center">AWS Cloud Practitioner</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={azFund} alt="about-me" />
                            <p className="text-center">Microsoft Azure Fundamentals</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={mtaDB} alt="about-me" />
                            <p className="text-center">Microsoft Database Fundamentals</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={ibmBC} alt="about-me" />
                            <p className="text-center">IBM BlockChain Essentials</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10">
                        <div className="items-center justify-center">
                            <img src={ibmCE} alt="about-me" />
                            <p className="text-center">IBM Cloud Essentials</p>
                        </div>
                    </motion.div>
                </div>


                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/6"></div>
                    <div className="w-full lg:w-1/6"></div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10 sm:py-12">
                        <div className="items-center justify-center">
                            <img src={terra} alt="Terraform-Associate" />
                            <p className="text-center">Terraform-Associate</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/6 lg:p-12 md:w-1/2 md:p-10 sm:py-12">
                        <div className="items-center justify-center">
                            <img src={forage} alt="J.P.Morgan Software Engineer" />
                            <p className="text-center">J.P.Morgan SDE Job Simulation</p>
                        </div>
                    </motion.div>
                    <div className="w-full lg:w-1/6"></div>
                    <div className="w-full lg:w-1/6"></div>
                </div>
            </div>
        </>
    )
}


export default Certifications