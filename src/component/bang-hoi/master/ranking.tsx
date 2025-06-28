'use client'

import { formatNumber } from "@/lib/utils";
import { useState } from "react";

interface dataItem {
  rank: number,
  name: string,
  server: string,
  score: number,
  table: number,
}

const data: dataItem[] = [
  {
    rank: 1,
    name: "AAAAA",
    server: "111",
    score: 1500,
    table: 1
  },
  {
    rank: 2,
    name: "AAAAA",
    server: "111",
    score: 1400,
    table: 1
  },
  {
    rank: 3,
    name: "AAAAA",
    server: "111",
    score: 1000,
    table: 1
  },
  {
    rank: 4,
    name: "AAAAA",
    server: "111",
    score: 1000,
    table: 1
  },
  {
    rank: 5,
    name: "AAAAA",
    server: "111",
    score: 1000,
    table: 1
  },
  {
    rank: 1,
    name: "BBBBB",
    server: "222",
    score: 1300,
    table: 2
  },
  {
    rank: 2,
    name: "BBBBB",
    server: "222",
    score: 1200,
    table: 2
  },
  {
    rank: 3,
    name: "BBBBB",
    server: "222",
    score: 1000,
    table: 2
  },
  {
    rank: 4,
    name: "BBBBB",
    server: "222",
    score: 1000,
    table: 2
  },
  {
    rank: 5,
    name: "BBBBB",
    server: "222",
    score: 1000,
    table: 2
  },
  {
    rank: 1,
    name: "CCCCC",
    server: "333",
    score: 1000,
    table: 3
  },
  {
    rank: 2,
    name: "CCCCC",
    server: "333",
    score: 1000,
    table: 3
  },
  {
    rank: 3,
    name: "CCCCC",
    server: "333",
    score: 1000,
    table: 3
  },
  {
    rank: 4,
    name: "CCCCC",
    server: "333",
    score: 1000,
    table: 3
  },
  {
    rank: 5,
    name: "CCCCC",
    server: "333",
    score: 1000,
    table: 3
  },
]

const Ranking = () => {
  const [selectedTable, setSelectedTable] = useState<string>("1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter data based on selected table
  const filteredData = selectedTable ? data.filter(item => item.table === parseInt(selectedTable)) : data;

  const handleTableSelect = (value: string) => {
    setSelectedTable(value);
    setIsDropdownOpen(false);
  }

  const tableOptions = [
    { value: "1", label: "Bảng 1" },
    { value: "2", label: "Bảng 2" },
    { value: "3", label: "Bảng 3" },
  ];


  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* Custom Select Dropdown */}
      <div className="relative w-[20%] h-[4vh]">
        <div 
          className="w-full h-full bg-[#F4F4F4] border-2 border-[#B8956A] rounded-md flex items-center justify-between px-3 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-[1.5vw] text-[#B53925] font-semibold">
            {selectedTable ? `Bảng ${selectedTable}` : "1"}
          </span>
          <svg 
            className={`w-[1.5vw] h-[1.5vw] text-[#B53925] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-[#F4F4F4] border-2 border-[#B8956A] rounded-md shadow-lg z-10 mt-1">
            {tableOptions.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 text-[1.4vw] text-[#B53925] font-semibold hover:bg-[#F4E4C1] cursor-pointer border-b last:border-b-0 border-[#E8D4A8]"
                onClick={() => handleTableSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="absolute top-[9%] w-full text-center text-[1.5vw] text-[#832111] font-semibold">Mỗi bảng, 05 Đại Hiệp có điểm bình chọn cao nhất sẽ tiến vào Vòng 2</p>
      <div className="absolute top-[15%] w-[90%] h-[80%] flex flex-col items-center">
        <div className="w-full h-full">
          <div className="my-[1%] grid grid-cols-4 text-[2vw] text-[#832111] font-semibold">
              <p className="text-center">Hạng</p>
              <p className="text-center">Đại Hiệp</p>
              <p className="text-center">Máy Chủ</p>
              <p className="text-center">Tổng Điểm Bình Chọn</p>
          </div>
          <div className="w-full max-h-[50vh] overflow-y-scroll overflow-x-hidden hide-scroll">
              {filteredData.map((item, idx) => (
                  <div key={idx} className={`grid grid-cols-4 text-[1.7vw] text-[#613931] font-semibold py-1 ${idx % 2 == 0 ? "bg-[#FFF5D6]" : ""}`}>
                      <p className="text-center">{item.rank}</p>
                      <p className="text-center">{item.name}</p>
                      <p className="text-center">{item.server}</p>
                      <p className="text-center">{formatNumber(item.score)}</p> 
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking;