"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
            <Avatar />

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
            >
                <h1 className="mt-32 md:text-4xl text-violet-400 ">Desarrolladora Full Stack MERN y Python<br /> </h1>
                <p>Durante mi formación académica, trabajé con la metodología Agile (SCRUM), colaborando con herramientas como GitHub y Trello. <br />
                    Aplicando tecnologías como JavaScript,  React, Vite, Express, Node.js, MongoDB, HTML, Css, Boostrap, Tailwind, Postan, Python, Admin SQL, entre otras. <br /> 
                    Para la creación de servidores,  APIs y single-page application
                    funcionales como <br /> un e-commerce y una plataforma de lectura y escritura de mangas.
                </p>

{/*                 <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
                    {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                                    + <CountUp end={endCounter} start={0} duration={5} />
                                </p>
                                <p className="text-xs uppercase max-w-[100px]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
 */}
                <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-5 md:mb-5">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div key={id}
                                className={`${index === id ? 'text-violet-300 duration-300 transition-all border-violet-500' : 'border-white'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-4 text-md md:text-lg">{text}</p>
                                {index === id ? (
                                    <BiDownArrow />
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="max-w-4xl p-4 mx-auto bg-indigo-300/30 rounded-xl">
                    {dataAboutSkills[index].skills.map((items, index) => (
                        <div key={index} className="flex justify-start max-w h-12 gap-4 mx-auto">
                            <li>
                                <span>{items.title}  </span> {/* <span>{items.date}</span> */}
                            </li> 
 
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
