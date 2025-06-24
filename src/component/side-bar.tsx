'use client'

import { motion } from "framer-motion";
import Link from "next/link";

const SideBar = () => {
    return (
        <motion.div 
        initial={{ x: 100, scale: 0.8 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15
        }}
            className="mb:hidden z-50 fixed w-[12%] top-[12.5%] right-[1%] bg-cover bg-center bg-no-repeat aspect-[249/650] bg-[url('/images/side-bar-bg.png')]">
            <div className="absolute w-[61%] top-[30%] right-[7%] flex flex-col items-center gap-[0.3vw]">
                <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/btn-side-bar-napthe.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-side-bar-choingay.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-sinhnhat.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-congdong.png')] hover:cursor-pointer hover:brightness-110"></Link>
            </div>
        </motion.div>
    )
}

export default SideBar;