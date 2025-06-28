import Link from "next/link";

const Hero = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  return (
    <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[60/31] mb:aspect-[640/1060] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
      style={{'--bg-mobile-url': `url(/images/mb-hero-bg.jpg)`, '--bg-pc-url': `url(/images/bang-hoi/pc-hero-bg.jpg)`} as CustomStyleProperties}>
      <img src="/images/logo-vltk.png" alt="" className="absolute top-[5%] right-[3%] w-[5%]" />
      <div className="absolute w-[35%] mb:w-[95%] bottom-[2%] mb:bottom-[11%] flex justify-center items-center gap-[2%] bg-cover bg-center bg-no-repeat aspect-[714/190] bg-[url('/images/bang-hoi/app-info-bg.png')]">
        <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/btn-side-bar-napthe.png')] btn-image"></Link>
        <div className="w-[30%] flex flex-col justify-center items-center gap-1">
            <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-sinhnhat.png')] btn-image"></Link>
            <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-congdong.png')] btn-image"></Link>
        </div>
        <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/bang-hoi/btn-choingay-inapp.png')] btn-image"></Link>
      </div>
    </div>
  )
}

export default Hero;