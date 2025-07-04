import { cn } from "@/lib/utils";
import { FC } from "react";
import { motion } from "framer-motion";

const Reward:FC<{
  index: number;
  numCount: number;
  receiveGift: (index: number) => void;
}> = ({index, numCount, receiveGift}) => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  return (
    <div className={cn("relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[131/136] bg-[image:var(--bg-pc-url)]")} style={{'--bg-pc-url': `url(/images/reward-bg.png)`} as CustomStyleProperties}>
      <p className="ml-[5%] text-white text-center text-[1.5vw] font-semibold">Điểm danh {(index + 1) * 5} ngày</p>
      <motion.img
        src="/images/btn-receive-reward.png"
        alt=""
        className={`absolute left-[25%] bottom-[12%] w-[55%] ${(index + 1) * 5 <= numCount ? 'btn-image' : 'grayscale'}`}
        onClick={() => receiveGift(index)}
        whileHover={(index + 1) * 5 <= numCount ? { scale: 1.08 } : {}}
        whileTap={(index + 1) * 5 <= numCount ? { scale: 0.95 } : {}}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Reward;