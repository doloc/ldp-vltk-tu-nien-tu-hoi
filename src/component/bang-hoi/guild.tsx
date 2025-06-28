'use client'

import { useState } from "react";
import TabContent from "./tab";
import Vote from "./guild/vote";
import Ranking from "./guild/ranking";
import Leaderboard from "./guild/leaderboard";

interface tabItem {
  idx: number,
  name: string,
}

const listTab: tabItem[] = [
  { idx: 0, name: "Bình chọn bang hội"},
  { idx: 1, name: "Bảng xếp hạng bang hội"},
  { idx: 2, name: "Hạng đua top bình chọn"},
];

const Guild = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const [activeTab, setActiveTab] = useState<tabItem>(listTab[0]);

  const itemClicked = (idx: number) => {
    setActiveTab(listTab[idx]);
  }

  return (
    <div className="relative overflow-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[120/73] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-banghoi-bg.jpg)`} as CustomStyleProperties}>

      <img src="/images/bang-hoi/title-banghoi.png" alt="" className="-mt-[2%] w-[50%]" />
      <div className="w-2/3 mt-[1%]">
        <TabContent
          activeIdx={activeTab.idx}
          onClick={(idx) => itemClicked(idx)}
          listTab={listTab}
        />
      </div>
      <div className="relative mt-[1%] w-[70%] flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[120/73] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-shape-bg.png)`} as CustomStyleProperties}>
        
        <div className="absolute top-[15%] -left-[10%] w-[12%] flex flex-col items-end">
          <img src="/images/bang-hoi/btn-thele.png" alt="" className="w-[75%] btn-image" />
          <img src="/images/bang-hoi/btn-nhanluot.png" alt="" className="w-[75%] btn-image" />
          <img src="/images/bang-hoi/btn-phanthuong.png" alt="" className="w-[85%] btn-image" />
        </div>

        {/* Bình chọn bang hội */}
        {activeTab.idx == 0 && <Vote />}

        {/* BXH bang hội */}
        {activeTab.idx == 1 && <Ranking />}

        {/* Hạng đua top bình chọn */}
        {activeTab.idx == 2 && <Leaderboard />}
      </div>
    </div>
  )
}

export default Guild;