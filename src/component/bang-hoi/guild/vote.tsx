'use client'

import { formatNumber } from "@/lib/utils";
import { useState } from "react";

interface dataItem {
  name: string,
  server: string,
  score: number,
  table: number,
}

const data: dataItem[] = [
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1500,
      table: 1
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1400,
      table: 1
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1300,
      table: 2
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1200,
      table: 2
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 3
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 3
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 1
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 2
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 3
  },
  {
      name: "Zagoo 1234",
      server: "S1-Hoa Sơn",
      score: 1000,
      table: 1
  },
]

const Vote = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemsPerPage = 8; // Number of items to show per page

  // Filter data based on selected table
  const filteredData = selectedTable ? data.filter(item => item.table === parseInt(selectedTable)) : data;

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  const handleTableSelect = (value: string) => {
    setSelectedTable(value);
    setCurrentPage(1); // Reset to first page when filter changes
    setIsDropdownOpen(false);
  }

  const tableOptions = [
    { value: "", label: "Chọn bảng" },
    { value: "1", label: "Bảng 1" },
    { value: "2", label: "Bảng 2" },
    { value: "3", label: "Bảng 3" },
  ];
  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* Custom Select Dropdown */}
      <div className="relative mb:absolute mb:-top-[15%] mb:right-[4%] w-[20%] mb:w-[50%]">
        <div 
          className="w-full h-full bg-[#F4F4F4] border-2 border-[#B8956A] rounded-md flex items-center justify-between mb:justify-center mb:gap-[1vw] px-3 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-[1.5vw] mb:text-[3.5vw] text-[#B53925] font-semibold">
            {selectedTable ? `Bảng ${selectedTable}` : "Chọn bảng"}
          </span>
          <svg 
            className={`w-[1.5vw] h-[1.5vw] mb:w-[3.5vw] mb:h-[3.5vw] text-[#B53925] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
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
                className="px-3 py-2 text-[1.4vw] mb:text-[3.5vw] text-[#B53925] font-semibold hover:bg-[#F4E4C1] cursor-pointer border-b last:border-b-0 border-[#E8D4A8]"
                onClick={() => handleTableSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-[8%] w-[90%] mb:w-[97%] h-[80%] mb:h-[70%] flex flex-col items-center">
        <div className="w-full h-full">
          <div className="my-[1%] grid grid-cols-4 text-[2vw] mb:text-[3.5vw] text-[#832111] font-semibold">
              <p className="text-center">Bang hội</p>
              <p className="text-center">Máy chủ</p>
              <p className="text-center">Điểm</p>
              <p className="text-center">Bình chọn</p>
          </div>
          <div className="w-full max-h-[50vh] mb:max-h-[22vh] overflow-y-scroll overflow-x-hidden hide-scroll">
              {currentData.map((item, idx) => (
                  <div key={startIndex + idx} className={`grid grid-cols-4 text-[1.7vw] mb:text-[3.5vw] text-[#613931] font-semibold py-1 ${idx % 2 == 0 ? "bg-[#FFF5D6]" : ""}`}>
                      <p className="text-center">{item.name}</p>
                      <p className="text-center">{item.server}</p>
                      <p className="text-center">{formatNumber(item.score)}</p>
                      <div className="flex justify-center">
                        <img src="/images/bang-hoi/btn-2tickets.png" alt="" className="w-[40%] btn-image" />
                        <img src="/images/bang-hoi/btn-10tickets.png" alt="" className="w-[40%] btn-image" />
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] w-full h-[7vh] flex justify-center items-end gap-[1%] text-[1.7vw] mb:text-[3.5vw] text-[#872819]">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <p 
            key={page}
            className={`cursor-pointer ${page === currentPage ? 'text-[#E72909] text-[2vw] mb:text-[4vw]' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Vote;