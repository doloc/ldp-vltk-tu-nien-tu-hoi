const Footer = () => {
  type CustomStyleProperties = {
    [key: string]: string | number;
  };

  return (
    <div className="relative text-[1.3vw] mb:text-[2vw] text-[#EED7B4] overflow-x-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[640/83] mb:aspect-[640/148] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" 
    style={{'--bg-mobile-url': `url(/images/mb-footer-bg.jpg)`, '--bg-pc-url': `url(/images/pc-footer-bg.jpg)`} as CustomStyleProperties}>
      <img src="/images/logo-zagoo-game.png" alt="" className="my-[1%] w-[7%] mb:w-[15%] mb:mt-[2%]" />
      <p className="text-center">Công ty TNHH Giải Trí ZIE</p>
      <p className="text-center">Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</p>
      <p className="text-center">Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/GĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
      <p className="text-center">Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
    </div>
  );
};

export default Footer;