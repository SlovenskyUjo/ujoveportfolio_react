import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1, DiLaravel,
    DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";
import {FaVuejs} from "react-icons/fa";
import {Link} from "react-scroll";


const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Fullstack Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Traveller",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br/>
                        <span className="text-purple-500 uppercase">Adrian Ondik</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I am a passionate fullstack developer with over 4 years of experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.button  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                                       className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
                        >
                            <Link to="skills" smooth={true} offset={50} duration={500}>See More</Link>
                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/SlovenskyUjo" target="_blank">
                                <AiOutlineGithub/>
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/slovenskyujo" target="_blank">
                                <AiOutlineInstagram/>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.img
                    src="/storage/profilepicture.png"
                    className="w-[300px] md:w-[450px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <DiReact className="text-blue-500 mx-2" />
                <FaVuejs className="text-green-600 mx-2" />
                <DiLaravel className="text-red-600 mx-2" />

            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1200} />
            </div>

        </div>
    )
}

export default Hero
