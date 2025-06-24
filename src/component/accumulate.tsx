'use client'

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Accumulate = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const milestones = [
    { value: "10.000", active: true },
    { value: "20.000", active: false },
    { value: "40.000", active: false },
    { value: "60.000", active: false },
    { value: "100.000", active: false },
  ];
  const progressPercentage = 10;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[1920/1067] mb:aspect-[640/650] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-accumulate-bg.jpg)`, '--bg-pc-url': `url(/images/pc-accumulate-bg.jpg)`} as CustomStyleProperties}
    >
      <motion.img src="/images/accumulate-title.png" alt="" className="-mt-[4%] w-[50%] mb:w-full" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} />
      <div className="-mt-[2.5%] mb:-mt-[4%] w-[60%] mb:w-[95%] flex justify-center items-center bg-[url('/images/accumulate-sub-title.png')] aspect-[517/71] bg-no-repeat bg-cover bg-center">
        <p className="mt-[3%] text-[1.5vw] text-[#FFFBBB]">Đã có xxx Phiếu Bình Chọn được tích lũy từ huynh tỷ Võ Lâm</p>
      </div>
      <div className="mt-[16%] relative w-full px-[26%] mb:mt-[35%] mb:px-[2.5%]">
        {/* Milestone Values */}
        <div className="relative flex justify-between items-end px-[6%] mb-1">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <p className="mb:hidden font-bold text-white" style={{ fontSize: index*0.2 + 1.7 + 'vw' }}>
                {milestone.value}
              </p>
              <p className="pc:hidden tb:hidden font-bold text-white" style={{ fontSize: index*0.5 + 3.7 + 'vw' }}>
              {milestone.value}
            </p>
            </div>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="relative h-[1.5vw] mb:h-[3vw] rounded-full mx-[4%] bg-black/70 border-y-2 border-stone-600">
          <div className="h-full bg-[#FFF7CD] rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          {/* Milestone Icons */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="absolute top-1/2 w-[3.5vw] h-[3.5vw] bg-contain bg-no-repeat"
              style={{
                left: `${(100 / (milestones.length - 1)) * index}%`,
                transform: 'translate(-50%, -50%)',
                backgroundImage: `url(${milestone.active ? '/images/milestone-active.png' : '/images/milestone-inactive.png'})`,
                ...(milestone.active && { filter: 'drop-shadow(0 0 0.5vw #facc15)' })
              }}
            ></div>
          ))}
        </div>
        {/* Rewards */}
        <div className="relative flex justify-between items-start">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center w-[18%]">
              <div className="relative mt-[0.5vw] flex flex-col items-center">
                <motion.img
                  src={milestone.active ? '/images/reward-chest-open.png' : '/images/reward-chest-closed.png'}
                  alt="reward"
                  className="w-3/4 h-auto object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                />
                <motion.img
                  src={'/images/btn-nhanqua.png'}
                  alt="claim button"
                  className={cn("w-full mt-[1vw]", milestone.active ? "btn-image" : "grayscale")}
                  whileHover={milestone.active ? { scale: 1.08 } : {}}
                  whileTap={milestone.active ? { scale: 0.95 } : {}}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Accumulate;