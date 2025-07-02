'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import router from "next/router";

const Hero = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const appInfoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const centerButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div 
      className="relative overflow-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[60/31] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/bang-hoi/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-hero-bg.jpg)`} as CustomStyleProperties}
    >
      {/* Logo with elegant entrance */}
      <motion.img 
        src="/images/logo-vltk.png" 
        alt="" 
        className="absolute mb:hidden top-[5%] right-[3%] w-[5%]"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="pc:hidden tb:hidden relative w-full h-[17%] bg-cover bg-center bg-no-repeat bg-[image:url(/images/mb-header-bg.png)]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
      >
        <motion.img className="absolute top-[4%] left-[4%] w-[18%]" src="/images/logo-zagoo.png" alt="" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
        <motion.img className="absolute w-[25%] top-[13%] left-[24%] btn-image" src="/images/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
        <motion.img className="absolute w-[25%] top-[13%] right-[21%] btn-image" src="/images/btn-napthe.png" alt="" onClick={() =>  router.push("/")}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
        <motion.img className="absolute w-[10%] top-0 right-[2.5%]" src="/images/tag.png" alt="" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
      </motion.div>
      <motion.img src="/images/logo-18.png" alt="" className="pc:hidden tb:hidden absolute top-[13%] left-[6%] object-contain w-[15%] h-auto" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />
      
      {/* App info section with staggered animations */}
      <motion.div 
        className="absolute w-[35%] mb:w-[95%] bottom-[2%] mb:bottom-0 flex justify-center items-center gap-[2%]"
        variants={appInfoVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: "url('/images/bang-hoi/app-info-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          aspectRatio: '714/190'
        }}
      >
        {/* Left button */}
        <motion.div
          className="w-[30%] relative"
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="" className="block w-full">
            <img 
              src="/images/btn-side-bar-napthe.png" 
              alt="Nạp thẻ" 
              className="w-full h-auto btn-image"
              style={{ aspectRatio: '194/165' }}
            />
          </Link>
        </motion.div>
        
        {/* Center buttons */}
        <motion.div 
          className="w-[30%] flex flex-col justify-center items-center gap-1"
          variants={buttonVariants}
        >
          <motion.div
            variants={centerButtonVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link href="" className="block w-full">
              <img 
                src="/images/btn-sinhnhat.png" 
                alt="Sinh nhật" 
                className="w-full h-auto btn-image"
                style={{ aspectRatio: '247/76' }}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={centerButtonVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link href="" className="block w-full">
              <img 
                src="/images/btn-congdong.png" 
                alt="Cộng đồng" 
                className="w-full h-auto btn-image"
                style={{ aspectRatio: '247/76' }}
              />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right button */}
        <motion.div
          className="w-[30%] relative"
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="" className="block w-full">
            <img 
              src="/images/bang-hoi/btn-choingay-inapp.png" 
              alt="Chơi ngay" 
              className="w-full h-auto btn-image"
              style={{ aspectRatio: '194/165' }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero;