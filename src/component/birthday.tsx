'use client'

import { motion } from "framer-motion";

const Birthday = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[1920/1321] mb:aspect-[640/769] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-birthday-bg.jpg)`, '--bg-pc-url': `url(/images/pc-birthday-bg.jpg)`} as CustomStyleProperties}
    >
      <motion.img src="/images/birthday-title.png" alt="" className="w-[50%] mb:w-[95%] mb:mt-[10%]" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} />
      <div className="z-10 w-[35%] mb:w-[65%] flex justify-between h-[10%] mb:mt-[2%]">
        <motion.img src="/images/icon-fb.png" alt="" className="object-contain h-full w-auto" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} />
        <motion.img src="/images/icon-social.png" alt="" className="object-contain h-full w-auto" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} />
        <motion.img src="/images/icon-zalo.png" alt="" className="object-contain h-full w-auto" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
      </div>
      <div className="-mt-[2%] mb:mt-[8%] w-[95%] flex justify-center ">
        <div className="w-[32.5%] -mr-[8%] mb:mr-0 animate-swing" style={{ animationDelay: '0s', transformOrigin: 'top center' }}>
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[692/881] bg-[image:var(--bg-pc-url)]" style={{'--bg-pc-url': `url(/images/vl4-bg.png)`} as CustomStyleProperties}>
            <motion.img src="/images/btn-thamgia.png" alt="" className="mt-[52%] -ml-[5%] object-contain w-[30%] h-auto btn-image" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
          </div>
        </div>
        <div className="w-[35%] animate-swing" style={{ animationDelay: '0.5s', transformOrigin: 'top center' }}>
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[395/523] bg-[image:var(--bg-pc-url)] z-10" style={{'--bg-pc-url': `url(/images/binhchonbanghoi-bg.png)`} as CustomStyleProperties}>
            <motion.img src="/images/btn-thamgia.png" alt="" className="mt-[57%] -ml-[5%] object-contain w-[30%] h-auto btn-image" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
          </div>
        </div>
        <div className="w-[32.5%] -ml-[8%] mb:ml-0 animate-swing" style={{ animationDelay: '1s', transformOrigin: 'top center' }}>
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[660/881] bg-[image:var(--bg-pc-url)]" style={{'--bg-pc-url': `url(/images/binhchonminhchu-bg.png)`} as CustomStyleProperties}>
            <motion.img src="/images/btn-thamgia.png" alt="" className="mt-[54%] -ml-[5%] object-contain w-[30%] h-auto btn-image" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Birthday;