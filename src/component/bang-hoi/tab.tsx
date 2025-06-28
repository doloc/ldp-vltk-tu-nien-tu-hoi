'use client'

import { FC } from "react";

const TabContent:FC<{activeIdx: number, onClick: (index: number)=> void, listTab: any[]}> = ({ activeIdx, onClick, listTab }) => {
  return (
      <div className={`w-full flex justify-between items-center text-[1.5vw]`}>
        {
            listTab.map((val, idx) => (
                <div key={idx} className={`w-[30%] bg-cover bg-center bg-no-repeat aspect-[366/77] bg-[url('/images/bang-hoi/pc-tab-bg.png')] flex justify-center items-center cursor-pointer ${activeIdx != idx ? "text-[#712511]" : "text-[#9F2218]"}`} 
                    onClick={() => onClick(idx)}
                >
                    {val.name}
                </div> 
                
            ))
        }
      </div>
  )
}

export default TabContent;