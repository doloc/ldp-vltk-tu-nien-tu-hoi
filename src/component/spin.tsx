'use client'

import { useState } from "react";
import Popup from "./popup";

const Spin = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };
  const positions = [
    { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 },
    { row: 2, col: 4 },
    { row: 3, col: 4 },
    { row: 4, col: 4 }, { row: 4, col: 3 }, { row: 4, col: 2 }, { row: 4, col: 1 },
    { row: 3, col: 1 },
    { row: 2, col: 1 },
  ];

  const [boxes, setBoxes] = useState<string[]>(Array(12).fill('/images/bg-box-shape.png'));
  const [isRolling, setIsRolling] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<string[]>([]);

  const LIGHT_DURATION = 800; // Duration của box-light.gif
  const OPEN_DURATION = 1100; // Duration của box-open.gif

  const rewards = [
    "100 Xu",
    "Vũ khí hiếm",
    "Skin đặc biệt",
    "500 Kim cương",
    "Hộp quà bí ẩn"
  ];

  const rewardImages: { [key: string]: string } = {
    "100 Xu": "/images/reward-1.png",
    "Vũ khí hiếm": "/images/reward-2.png",
    "Skin đặc biệt": "/images/reward-2.png",
    "500 Kim cương": "/images/reward-1.png",
    "Hộp quà bí ẩn": "/images/reward-1.png",
  };

  const rollOne = () => {
    if (isRolling) return;
    setIsRolling(true);
    
    const randomIndex = Math.floor(Math.random() * 12);
    const newBoxes = [...boxes];
        
    // Reset boxes
    newBoxes.fill('/images/bg-box-shape.png');
    setBoxes([...newBoxes]);
    
    // Hiệu ứng sáng
    newBoxes[randomIndex] = '/images/box-light.gif';
    setBoxes([...newBoxes]);
    
    setTimeout(() => {
      // Hiệu ứng mở hộp
      newBoxes[randomIndex] = '/images/box-open.gif';
      setBoxes([...newBoxes]);
      
      // Đợi thêm thời gian để hiệu ứng mở hộp hoàn tất
      setTimeout(() => {
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        setPopupContent([reward]);
        setPopupOpen(true);
        
        // Reset box sau khi popup hiển thị
        newBoxes[randomIndex] = '/images/bg-box-shape.png';
        setBoxes([...newBoxes]);
        setIsRolling(false);
      }, OPEN_DURATION); // Tăng thời gian chờ để khớp với duration của box-open.gif
    }, LIGHT_DURATION);
  };

  const rollTen = () => {
    if (isRolling) return;
    setIsRolling(true);

    const randomIndexes: number[] = [];
    while(randomIndexes.length < 10) {
      const random = Math.floor(Math.random() * 12);
      if(!randomIndexes.includes(random)) randomIndexes.push(random);
    }
    
    const newBoxes = [...boxes];
    newBoxes.fill('/images/bg-box-shape.png');
    setBoxes([...newBoxes]);
    
    let delay = 0;
    const rewardsReceived: string[] = [];
    
    randomIndexes.forEach((index, i) => {
      setTimeout(() => {
        // Hiệu ứng sáng
        newBoxes[index] = '/images/box-light.gif';
        setBoxes([...newBoxes]);
        
        setTimeout(() => {
          // Hiệu ứng mở hộp
          newBoxes[index] = '/images/box-open.gif';
          setBoxes([...newBoxes]);
          
          const reward = rewards[Math.floor(Math.random() * rewards.length)];
          rewardsReceived.push(reward);
          
          // Chỉ hiển thị popup sau khi tất cả hiệu ứng mở hoàn tất
          if(i === 9) {
            setTimeout(() => {
              setPopupContent(rewardsReceived);
              setPopupOpen(true);
              
              randomIndexes.forEach(idx => {
                newBoxes[idx] = '/images/bg-box-shape.png';
              });
              setBoxes([...newBoxes]);
              setIsRolling(false);
            }, OPEN_DURATION); // Đợi hiệu ứng cuối cùng hoàn tất
          }
        }, LIGHT_DURATION);
      }, delay);
      delay += 300;
    });
  };

  return (
    <div className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[480/283] mb:aspect-[640/840] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" 
    style={{'--bg-mobile-url': `url(/images/mb-spin-bg.jpg)`, '--bg-pc-url': `url(/images/pc-spin-bg.jpg)`} as CustomStyleProperties}>
      <img src="/images/spin-title.png" alt="" className="-mt-[3%] mb:-mt-[5%] w-[43%] mb:w-[95%]" />
      <div className="-mt-[0.5%] relative w-full flex justify-center items-center">
        <img src="/images/icon-thele.png" alt="" className="w-[15%] mb:w-[30%] -mr-[5%] btn-image" />
        <img src="/images/icon-nhanluot.png" alt="" className="z-10 w-[10%] mb:w-[22%]" />
        <img src="/images/icon-lichsu.png" alt="" className="w-[15%] mb:w-[30%] -ml-[4%] btn-image" />
      </div>

      <div className="z-50 -mt-[0.5%] relative w-[40%] mb:w-[85%] aspect-[1/1] overflow-hidden flex justify-center items-center">
        <div className="w-full grid grid-cols-4 grid-rows-4 gap-[1%] aspect-square inset-0 bg-gray-100/15 p-[2%]">
          {boxes.map((box, index) => (
            <div key={index} style={{ gridRow: positions[index].row, gridColumn: positions[index].col }} className="w-full h-full">
              <img src={box} alt={`box-${index}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="absolute w-[50%] h-[50%] flex flex-col justify-center items-center gap-[2%]">
          <button className="w-3/4 group disabled:opacity-50 disabled:cursor-not-allowed" onClick={rollOne} disabled={isRolling}>
            <img src="/images/btn-draw-1.png" alt="Draw 1" className="w-full h-auto transition-transform duration-200 group-hover:scale-110" />
          </button>
          <button className="w-3/4 group disabled:opacity-50 disabled:cursor-not-allowed" onClick={rollTen} disabled={isRolling}>
            <img src="/images/btn-draw-10.png" alt="Draw 10" className="w-full h-auto transition-transform duration-200 group-hover:scale-110" />
          </button>
        
          <p className="text-white text-center text-[1.2vw] font-semibold">*Quyết định của BTC là quyết định cuối cùng</p>
        </div>       
      </div>

      <Popup
        title="Chúc mừng nhận thưởng"
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        content={popupContent}
      >
        <div className="w-full flex justify-center items-center">
          {popupContent.length === 1 && (
            <img
              src={rewardImages[popupContent[0]]}
              alt={popupContent[0]}
              className="w-1/2"
            />
          )}
          {popupContent.length > 1 && (
            <div className="w-full">
              <div className="grid grid-cols-4 gap-2">
                {popupContent.slice(0, 4).map((reward, index) => (
                  <img
                    key={index}
                    src={rewardImages[reward]}
                    alt={reward}
                    className="w-full"
                  />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {popupContent.slice(4, 8).map((reward, index) => (
                  <img
                    key={index}
                    src={rewardImages[reward]}
                    alt={reward}
                    className="w-full"
                  />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div></div>
                {popupContent.slice(8, 10).map((reward, index) => (
                  <img
                    key={index}
                    src={rewardImages[reward]}
                    alt={reward}
                    className="w-full"
                  />
                ))}
                {popupContent.length === 9 && <div></div>}
              </div>
            </div>
          )}
        </div>
      </Popup>
      
    </div>
  );
};

export default Spin;