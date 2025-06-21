'use client'
import { useEffect } from "react";
import Popup from "../popup"
import { MW } from "@/services/api";
import { CheckIn } from "@/types/leader-board";
import { formatTimestamp } from "@/lib/time";

const data: CheckIn[] = [
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
    { time: 1743865470, desc: "1 lệnh bài" },
]

const PopupHistoryCheckin:React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({isOpen, onClose}) => {

    const getHisCheckin = async () => {
        const res = await MW.getHisCheckin();
    }

    useEffect(() => {
        getHisCheckin()
    }, [])

    return (
        <Popup
            title="Lịch sử điểm danh"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="my-[2%] w-[85%] grid grid-cols-2 gap-[1.5vw] text-[#FFFFFF] font-semibold overflow-hidden">
                    <div className="flex justify-center items-center bg-[url('/images/popup-btn-bg.png')] aspect-[37/9] bg-no-repeat bg-cover bg-center overflow-hidden">
                        Thời gian
                    </div>
                    <div className="flex justify-center items-center bg-[url('/images/popup-btn-bg.png')] aspect-[37/9] bg-no-repeat bg-cover bg-center overflow-hidden">
                        Ghi chú
                    </div>
                </div>
                <div className="mt-[1%] w-[85%] max-h-[75vw] overflow-scroll flex flex-col justify-center items-center">
                    {data.map((val, idx) => (
                        <div key={idx} className="w-[85%] grid grid-cols-2 gap-[1.5vw] text-[#AA5C47]">
                            <p className="text-center">{formatTimestamp(val.time)}</p>
                            <p className="text-center">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Popup>
    )
}

export default PopupHistoryCheckin