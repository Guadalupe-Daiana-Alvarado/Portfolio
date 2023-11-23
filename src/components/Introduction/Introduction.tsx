import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.png" priority width="600" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="hidden mb-5 text-4xl leading-tight lg:mt-20 lg:block md:mb-10">Creer y Crear, están<br />
                            <span className="text-fuchsia-500"> a una sola letra de diferencia.</span></h1>
                        <p className="max-w-sm lg:mt-0 mt-32  mb-10 text-xl md:max-w-xl md:mx-0 md:mb-16 md:text-xl">

                            💻 Durante mi formación académica, colaboré aplicando diversas tecnologías que detallare en profundidad en el apartado About.<br></br>
                            👩 Soy una profesional colaborativa y resiliente, con fuertes habilidades de comunicación. <br></br> 
                            Disfruto enfrentar desafíos y contribuir al progreso de cada proyecto. 
                            Actualmente me encuentro lista y dispuesta a colaborar.<br></br>
                            💌 Si mi perfil despierta su interés y está en búsqueda de nuevos talentos, no dude en contactarme dai.22121994@gmail.com. <br></br>
                            Saludos cordiales.</p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="../works" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ver proyectos.
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-fuchsia-600 border-fuchsia-400 rounded-xl hover:shadow-xl hover:shadow-fuchsia-400">
                                Contacta conmigo.
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
