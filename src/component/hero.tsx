'use client'

import { useRouter } from "next/navigation";
import router from "next/router";

const Hero = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  const router = useRouter();

  return (
    <div className="relative overflow-x-hidden w-full bg-cover bg-center bg-no-repeat aspect-[40/21] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/pc-hero-bg.jpg)`} as CustomStyleProperties}>
      <div className="mb:hidden absolute top-[5%] left-0 w-full flex justify-between px-[3%] h-[8%]">
        <div className="flex gap-2">
          <img src="/images/logo-18.png" alt="" className="object-contain h-2/3 w-auto" />
          <img src="/images/logo-zagoo.png" alt="" />
          <img src="/images/logo-vltk.png" alt="" />
        </div>
        <img src="/images/pc-btn-home.png" alt="" className="object-contain h-3/4 w-auto btn-image" />
      </div>

      
      <div className="pc:hidden tb:hidden relative w-full h-[17%] bg-cover bg-center bg-no-repeat bg-[image:url(/images/mb-header-bg.png)]">
        <img className="absolute top-[4%] left-[4%] w-[18%]" src="/images/logo-zagoo.png" alt="" />
        <img className="absolute w-[25%] top-[13%] left-[24%] btn-img" src="/images/btn-choingay.png" alt="" onClick={() =>  router.push("https://zalo.vltkh5.zing.vn/play-game")} />
        <img className="absolute w-[25%] top-[13%] right-[21%] btn-image" src="/images/btn-napthe.png" alt="" onClick={() =>  router.push("/")} />
        <img className="absolute w-[10%] top-0 right-[2.5%]" src="/images/tag.png" alt="" />
      </div>
      <img src="/images/logo-18.png" alt="" className="pc:hidden tb:hidden absolute top-[16%] left-[6%] object-contain w-[15%] h-auto" />

      <div className="absolute bottom-[5%] mb:bottom-[18%] left-0 w-full flex justify-center items-center h-[15%] mb:h-[6%]">
        <img src="/images/nav-sinhnhatsukien.png" className="object-contain h-[55%] w-auto -mr-[5%]" />
        <img src="/images/nav-binhchonbanghoi.png" className="object-contain h-full w-auto" />
        <img src="/images/nav-binhchonminhchu.png" className="object-contain h-[55%] w-auto -ml-[5%]" />
      </div>

      <div className="absolute pc:hidden tb:hidden w-full bottom-[7%] flex justify-center animate-bounce">
        <img className='pc:hidden w-[30%] ' src="/images/scrolling.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;