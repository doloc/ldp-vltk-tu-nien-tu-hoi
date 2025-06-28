'use client'

import { FC } from "react";
import { motion } from "framer-motion";

const TabContent:FC<{activeIdx: number, onClick: (index: number)=> void, listTab: any[]}> = ({ activeIdx, onClick, listTab }) => {
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const activeTabVariants = {
    active: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    inactive: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="w-full flex justify-between items-center text-[1.5vw]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {listTab.map((val, idx) => (
        <motion.div 
          key={idx} 
          className={`w-[30%] bg-cover bg-center bg-no-repeat aspect-[366/77] bg-[url('/images/bang-hoi/pc-tab-bg.png')] flex justify-center items-center cursor-pointer select-none ${activeIdx !== idx ? "text-[#712511]" : "text-[#9F2218]"}`}
          variants={tabVariants}
          animate={activeIdx === idx ? "active" : "inactive"}
          custom={activeIdx === idx}
          whileHover={{
            scale: activeIdx === idx ? 1.02 : 1.05,
            y: activeIdx === idx ? -2 : -3,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1, ease: "easeOut" }
          }}
          onClick={() => onClick(idx)}
          style={{
            filter: activeIdx === idx ? 'brightness(1.1) drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'brightness(1)',
            fontWeight: activeIdx === idx ? '600' : '500'
          }}
        >
          <motion.span
            animate={{
              scale: activeIdx === idx ? 1.05 : 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {val.name}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TabContent;