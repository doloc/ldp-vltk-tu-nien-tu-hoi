import { formatNumber } from "@/lib/utils";

interface dataItem {
  rank: number,
  name: string,
  score: number,
}

const data: dataItem[] = [
  {
    rank: 1,
    name: "ABC",
    score: 1500,
  },
  {
    rank: 2,
    name: "ABC",
    score: 1400,
  },
  {
    rank: 3,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 4,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 5,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 6,
    name: "ABC",
    score: 1300,
  },
  {
    rank: 7,
    name: "ABC",
    score: 1200,
  },
  {
    rank: 8,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 9,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 10,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 11,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 12,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 13,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 14,
    name: "ABC",
    score: 1000,
  },
  {
    rank: 15,
    name: "ABC",
    score: 1000,
  },
]


const Leaderboard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <p className="absolute top-[9%] w-full text-center text-[1.5vw] mb:text-[3.5vw] text-[#832111] font-semibold">Bảng xếp hạng Đua top bình chọn được tính riêng biệt theo mỗi Vòng bình chọn</p>
      <div className="absolute top-[15%] w-[90%] mb:w-[97%] h-[80%] mb:h-[70%] flex flex-col items-center">
        <div className="w-full h-full">
          <div className="my-[1%] grid grid-cols-3 text-[2vw] mb:text-[3.5vw] text-[#832111] font-semibold">
              <p className="text-center">Hạng</p>
              <p className="text-center">Đại Hiệp</p>
              <p className="text-center">Số Phiếu đã bình chọn</p>
          </div>
          <div className="w-full max-h-[27vw] mb:max-h-[48vw] overflow-y-scroll overflow-x-hidden hide-scroll">
              {data.map((item, idx) => (
                  <div key={idx} className={`grid grid-cols-3 text-[1.7vw] mb:text-[3.5vw] text-[#613931] font-semibold py-1 ${idx % 2 == 0 ? "bg-[#FFF5D6]" : ""}`}>
                      <p className="text-center">{item.rank}</p>
                      <p className="text-center">{item.name}</p>
                      <p className="text-center">{formatNumber(item.score)}</p> 
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard;