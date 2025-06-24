'use client'

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-x-hidden w-full bg-cover bg-center bg-no-repeat aspect-[40/21] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/pc-hero-bg.jpg)`} as CustomStyleProperties}
    >
      <motion.div
        className="mb:hidden absolute top-[5%] left-0 w-full flex justify-between px-[3%] h-[8%]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
      >
        <div className="flex gap-2">
          <motion.img src="/images/logo-18.png" alt="" className="object-contain h-2/3 w-auto" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} />
          <motion.img src="/images/logo-zagoo.png" alt="" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
          <motion.img src="/images/logo-vltk.png" alt="" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
        </div>
        <motion.img src="/images/pc-btn-home.png" alt="" className="object-contain h-3/4 w-auto btn-image" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
      </motion.div>

      <motion.div
        className="pc:hidden tb:hidden relative w-full h-[17%] bg-cover bg-center bg-no-repeat bg-[image:url(/images/mb-header-bg.png)]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
      >
        <motion.img className="absolute top-[4%] left-[4%] w-[18%]" src="/images/logo-zagoo.png" alt="" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
        <motion.img className="absolute w-[25%] top-[13%] left-[24%] btn-img" src="/images/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
        <motion.img className="absolute w-[25%] top-[13%] right-[21%] btn-image" src="/images/btn-napthe.png" alt="" onClick={() =>  router.push("/")}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
        <motion.img className="absolute w-[10%] top-0 right-[2.5%]" src="/images/tag.png" alt="" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
      </motion.div>
      <motion.img src="/images/logo-18.png" alt="" className="pc:hidden tb:hidden absolute top-[16%] left-[6%] object-contain w-[15%] h-auto" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />

      <motion.div
        className="absolute bottom-[5%] mb:bottom-[18%] left-0 w-full flex justify-center items-center h-[15%] mb:h-[6%]"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7, type: "spring" }}
      >
        <motion.img src="/images/nav-sinhnhatsukien.png" className="object-contain h-[55%] w-auto -mr-[5%]" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }} />
        <motion.img src="/images/nav-binhchonbanghoi.png" className="object-contain h-full w-auto" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} />
        <motion.img src="/images/nav-binhchonminhchu.png" className="object-contain h-[55%] w-auto -ml-[5%]" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }} />
      </motion.div>

      <motion.div
        className="absolute pc:hidden tb:hidden w-full bottom-[7%] flex justify-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <img className='pc:hidden w-[30%] ' src="/images/scrolling.png" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;