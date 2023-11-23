"use client";
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'

export function Contact() {
    const phoneNumber = "+5491134707893";
    const emailAddress = "dai.22121994@gmail.com";
    const gitHub = "https://github.com/Guadalupe-Daiana-Alvarado";
    const linkedin = "https://www.linkedin.com/in/guadalupe-daiana-alvarado-fullstack/"

    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const emailLink = `mailto:${emailAddress}`;

    return (
        <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
        <div className="h-screen w-full flex flex-col justify-center items-center ">
            <div className="max-w-4xl p-4 mx-auto bg-indigo-300/30 rounded-xl">
                <h1 className="text-2xl">Contacto:</h1>
                <div className="flex flex-col justify-center items-center">
                    <a className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" target="_blank" href={whatsappLink}>
                        WhatsApp: {phoneNumber}
                    </a>
                    <br />
                    <a className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" target="_blank" href={emailLink}>
                        Email: {emailAddress}
                    </a>
                    <a className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" target="_blank" href={gitHub}>
                        GitHub: {gitHub}
                    </a>                    
                    <a className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" target="_blank" href={linkedin}>
                        Linkedin: {linkedin}
                    </a>  
                </div>
            </div>
        </div>
    </motion.div>
    );
}
