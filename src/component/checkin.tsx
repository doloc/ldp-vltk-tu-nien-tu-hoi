'use client'

import { useState } from "react";
import Reward from "./reward";
import PopupHistoryCheckin from "./popup/popup-history-checkin";
import PopupRulesCheckin from "./popup/popup-rules-checkin";
import PopupReceiveGift from "./popup/popup-receive-gift";
import { AnimatePresence, motion } from "framer-motion";

const Checkin = () => {
  const [popupHisCheckinOpen, setPopupHisCheckinOpen] = useState(false);
  const [popupRulesCheckinOpen, setPopupRulesCheckinOpen] = useState(false);
  const [popupReceiveGiftOpen, setPopupReceiveGiftOpen] = useState(false);
  const [milestone, setMileStone] = useState(0);
  const numCount = 10;

  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const receiveGift = (index: number) => {
    if (numCount < (index + 1) * 5) return
    setMileStone(milestone)
    setPopupReceiveGiftOpen(true)
}

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[640/427] mb:aspect-[640/805] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-checkin-bg.jpg)`, '--bg-pc-url': `url(/images/pc-checkin-bg.jpg)`} as CustomStyleProperties}
    >
      <motion.img src="/images/checkin-title.png" alt="" className="w-[50%] mb:w-[95%] mb:-mt-[5%]" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} />
      <div className="relative w-full flex justify-center items-center mb:mt-[2%]">
        <motion.img src="/images/icon-thele.png" alt="" className="w-[15%] mb:w-[30%] -mr-[5%] btn-image" onClick={() => setPopupRulesCheckinOpen(true)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} />
        <img src="/images/icon-diemdanh.png" alt="" className="z-10 w-[11%] mb:w-[22%]" />
        <motion.img src="/images/icon-lichsu.png" alt="" className="w-[15%] mb:w-[30%] -ml-[4%] btn-image" onClick={() => setPopupHisCheckinOpen(true)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} />
      </div>
      <div className="relative w-full px-[23%] mb:px-[2%] mb:mt-[3%]">
        <div className="grid grid-cols-3 grid-rows-2 gap-y-[8%]">
          {Array.from({length: 6}).map((_, index) => (
            <Reward key={index} index={index} numCount={numCount} receiveGift={receiveGift} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {popupHisCheckinOpen && (
        <PopupHistoryCheckin
            isOpen={popupHisCheckinOpen}
            onClose={() => setPopupHisCheckinOpen(false)}
        />)}
      </AnimatePresence>
      <AnimatePresence>
        {popupRulesCheckinOpen && (
        <PopupRulesCheckin
            isOpen={popupRulesCheckinOpen}
            onClose={() => setPopupRulesCheckinOpen(false)}
        />)}
      </AnimatePresence>
      <AnimatePresence>
        {popupReceiveGiftOpen && (
        <PopupReceiveGift 
            isOpen={popupReceiveGiftOpen}
            onClose={() => setPopupReceiveGiftOpen(false)}
            milestone={milestone}
        />)}
      </AnimatePresence>
    </motion.div>
  );
};

export default Checkin;