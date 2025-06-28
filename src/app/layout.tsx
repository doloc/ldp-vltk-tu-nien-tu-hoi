import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/component/side-bar";

const fzHbrGame = localFont({
  src: "./fonts/FzHBRGame.ttf",
  variable: "--font-fz-hbr-game",
  weight: "100 900",
});

const utmCafeta = localFont({
  src: "./fonts/UTM_Cafeta.ttf",
  variable: "--font-utm-cafeta",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Võ Lâm Truyền Kỳ H5 - Zalo',
  description: 'Võ Lâm Truyền Kỳ H5 Zalo - Game VLTK H5 Zalo là một trong các game nhập vai miễn phí với lối chơi hấp dẫn được nhiều người ưu chuộng bậc nhất hiện nay. Người chơi sẽ hóa thân thành cao thủ võ lâm hành tẩu giang hồ PK đã tay sướng mắt. Game gọn nhẹ, trải nghiệm mượt mà, không nóng máy hao pin, đặc biệt game mang lại cảm giác chân thật và cảm xúc cao trào qua từng thước game. Game có nhiều sự kiện hấp dẫn và nhận quà miễn phí mỗi ngày',
  openGraph: {
      images: [
          {
              url: `https://h5.zadn.vn/games/vltk/Banner-VLTK2.jpg`,
              width: 550,
              height: 310,
              alt: 'Võ Lâm Truyền Kỳ H5 - Zalo',
          },
      ],
      description:
          'Võ Lâm Truyền Kỳ H5 Zalo - Game VLTK H5 Zalo là một trong các game nhập vai miễn phí với lối chơi hấp dẫn được nhiều người ưu chuộng bậc nhất hiện nay. Người chơi sẽ hóa thân thành cao thủ võ lâm hành tẩu giang hồ PK đã tay sướng mắt. Game gọn nhẹ, trải nghiệm mượt mà, không nóng máy hao pin, đặc biệt game mang lại cảm giác chân thật và cảm xúc cao trào qua từng thước game. Game có nhiều sự kiện hấp dẫn và nhận quà miễn phí mỗi ngày',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${utmCafeta.variable} ${fzHbrGame.variable}`} style={{ fontFamily: 'var(--font-utm-cafeta)' }}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
