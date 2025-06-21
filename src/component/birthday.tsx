const Birthday = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  return (
    <div className="relative overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[1920/1321] mb:aspect-[640/769] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" 
    style={{'--bg-mobile-url': `url(/images/mb-birthday-bg.jpg)`, '--bg-pc-url': `url(/images/pc-birthday-bg.jpg)`} as CustomStyleProperties}>
      <img src="/images/birthday-title.png" alt="" className="w-[50%] mb:w-[95%] mb:mt-[10%]" />
      <div className="z-10 w-[35%] mb:w-[65%] flex justify-between h-[10%] mb:mt-[2%]">
        <img src="/images/icon-fb.png" alt="" className="object-contain h-full w-auto" />
        <img src="/images/icon-social.png" alt="" className="object-contain h-full w-auto" />
        <img src="/images/icon-zalo.png" alt="" className="object-contain h-full w-auto" />
      </div>

      <div className="-mt-[2%] mb:mt-[8%] w-[95%] flex justify-center ">
        <div className="w-[32.5%] -mr-[8%] mb:mr-0">
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[692/881] bg-[image:var(--bg-pc-url)]" style={{'--bg-pc-url': `url(/images/vl4-bg.png)`} as CustomStyleProperties}>
            <img src="/images/btn-thamgia.png" alt="" className="mt-[52%] -ml-[5%] object-contain w-[30%] h-auto btn-image" />
          </div>
        </div>
        <div className="w-[35%]">
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[395/523] bg-[image:var(--bg-pc-url)] z-10" style={{'--bg-pc-url': `url(/images/binhchonbanghoi-bg.png)`} as CustomStyleProperties}>
            <img src="/images/btn-thamgia.png" alt="" className="mt-[57%] -ml-[5%] object-contain w-[30%] h-auto btn-image" />
          </div>
        </div>
        <div className="w-[32.5%] -ml-[8%] mb:ml-0">
          <div className="w-full mb:scale-[1.7] flex justify-center bg-cover bg-center bg-no-repeat aspect-[660/881] bg-[image:var(--bg-pc-url)]" style={{'--bg-pc-url': `url(/images/binhchonminhchu-bg.png)`} as CustomStyleProperties}>
            <img src="/images/btn-thamgia.png" alt="" className="mt-[54%] -ml-[5%] object-contain w-[30%] h-auto btn-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;