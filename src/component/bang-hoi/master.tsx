'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabContent from "./tab";
import Vote from "./master/vote";
import Ranking from "./master/ranking";
import Leaderboard from "./master/leaderboard";

interface tabItem {
  idx: number,
  name: string,
}

const listTab: tabItem[] = [
  { idx: 0, name: "Bình chọn minh chủ" },
  { idx: 1, name: "Bảng xếp hạng minh chủ"},
  { idx: 2, name: "Hạng đua top bình chọn"},
];

const Master = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const [activeTab, setActiveTab] = useState<tabItem>(listTab[0]);

  const itemClicked = (idx: number) => {
    setActiveTab(listTab[idx]);
  }

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const sideButtonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <div 
      className="relative overflow-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[960/589] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-minhchu-bg.jpg)`} as CustomStyleProperties}
    >
      {/* Title with elegant entrance */}
      <motion.img 
        src="/images/bang-hoi/title-minhchu.png" 
        alt="" 
        className="-mt-[2%] w-[50%]"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Tab navigation with smooth slide-in */}
      <motion.div 
        className="w-2/3 mt-[1%]"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <TabContent
          activeIdx={activeTab.idx}
          onClick={(idx) => itemClicked(idx)}
          listTab={listTab}
        />
      </motion.div>
      
      {/* Main content container */}
      <motion.div 
        className="relative mt-[1%] w-[70%] flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[120/73] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
        style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-shape-bg.png)`} as CustomStyleProperties}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Right side buttons with staggered animation */}
        <motion.div 
          className="absolute top-[15%] -right-[9%] w-[12%] flex flex-col items-start gap-2"
          initial="hidden"
          animate="visible"
        >
          {[
            { src: "/images/bang-hoi/btn-thele.png", width: "w-[75%]" },
            { src: "/images/bang-hoi/btn-nhanluot.png", width: "w-[75%]" },
            { src: "/images/bang-hoi/btn-phanthuong.png", width: "w-[85%]" }
          ].map((button, index) => (
            <motion.img
              key={index}
              src={button.src}
              alt=""
              className={`${button.width} btn-image cursor-pointer`}
              variants={sideButtonVariants}
              custom={index}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            />
          ))}
        </motion.div>

        {/* Content area with smooth transitions */}
        <AnimatePresence mode="wait">
          {/* Bình chọn minh chủ */}
          {activeTab.idx === 0 && (
            <motion.div
              key="vote"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full"
            >
              <Vote />
            </motion.div>
          )}

          {/* BXH minh chủ */}
          {activeTab.idx === 1 && (
            <motion.div
              key="ranking"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full"
            >
              <Ranking />
            </motion.div>
          )}

          {/* Hạng đua top bình chọn */}
          {activeTab.idx === 2 && (
            <motion.div
              key="leaderboard"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full"
            >
              <Leaderboard />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Master;