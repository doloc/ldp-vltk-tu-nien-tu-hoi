'use client'

import { useState } from "react";
import Reward from "./reward";
import { AnimatePresence } from "framer-motion";
import PopupHistoryCheckin from "./popup/popup-history-checkin";
import PopupRulesCheckin from "./popup/popup-rules-checkin";
import PopupReceiveGift from "./popup/popup-receive-gift";

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
    <div className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[640/427] mb:aspect-[640/805] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" 
    style={{'--bg-mobile-url': `url(/images/mb-checkin-bg.jpg)`, '--bg-pc-url': `url(/images/pc-checkin-bg.jpg)`} as CustomStyleProperties}>
      <img src="/images/checkin-title.png" alt="" className="w-[50%] mb:w-[95%] mb:-mt-[5%]" />
      <div className="relative w-full flex justify-center items-center mb:mt-[2%]">
        <img src="/images/icon-thele.png" alt="" className="w-[15%] mb:w-[30%] -mr-[5%] btn-image" onClick={() => setPopupRulesCheckinOpen(true)} />
        <img src="/images/icon-diemdanh.png" alt="" className="z-10 w-[11%] mb:w-[22%]" />
        <img src="/images/icon-lichsu.png" alt="" className="w-[15%] mb:w-[30%] -ml-[4%] btn-image" onClick={() => setPopupHisCheckinOpen(true)} />
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
    </div>
  );
};

export default Checkin;