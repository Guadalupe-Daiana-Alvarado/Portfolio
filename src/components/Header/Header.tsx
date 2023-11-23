"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 md:mx-20 text-2xl md:text-4xl text-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-200 text-transparent bg-clip-text md:text-lef">
                            Alvarado_Guadalupe
                        </h1>

                    </Link>
                    <div className="flex items-center justify-center gap-0 lg:gap-4 ">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-fuchsia-600">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
