'use client'
import { FormEvent, useState } from "react";
import Popup from "../popup";

interface FormData {
    server: string;
    id: string;
}

const PopupReceiveGift:React.FC<{
    isOpen: boolean;
    onClose: () => void;
    milestone: number;
}> = ({isOpen, onClose, milestone}) => {
    const [formData, setFormData] = useState<FormData>({
        server: '',
        id: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Xử lý dữ liệu form ở đây
        console.log('Form submitted:', formData);
        // Bạn có thể gọi API hoặc xử lý logic khác
      };


    return (
        <Popup
            title="Nhận quà lệnh bài"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center text-[#9F462F]">
                <p className="w-[70%]">Chúc mừng thiếu hiệp đã tích luỹ thành công mốc {milestone} lệnh bài</p>
                <p className="my-[5%] text-[#D53F3E] text-2xl">TÊN GIFTCODE XXX</p>
                <p>Nhập thông tin nhận quà</p>

                <form onSubmit={handleSubmit} className="w-[85%] flex flex-col gap-[2vw]">
                    <div className="w-full grid grid-cols-6">
                        <label htmlFor="server" className="text-sm font-medium flex items-center">
                            Server:
                        </label>
                        <input
                            type="text"
                            id="server"
                            name="server"
                            value={formData.server}
                            onChange={handleChange}
                            className="col-span-5 px-2 py-1 border border-[#9F462F] rounded-md focus:outline-none focus:ring-2 focus:border-[#9f3f26]"
                            placeholder="Nhập server"
                            required
                        />
                    </div>

                    <div className="w-full grid grid-cols-6">
                        <label htmlFor="id" className="text-sm font-medium flex items-center">
                            ID:
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            className="col-span-5 px-2 py-1 border border-[#9F462F] rounded-md focus:outline-none focus:ring-2 focus:border-[#9f3f26]"
                            placeholder="Nhập ID"
                            required
                        />
                    </div>

                    <div className="w-full grid grid-cols-7">
                        <div className="col-span-4"></div>
                        <div className="col-span-3">
                            <button
                                type="submit"
                                className="mt-[2%] w-full rounded-sm text-[#FFFFFF] bg-[url('/images/popup-btn-bg.png')] aspect-[37/9] bg-no-repeat bg-cover bg-center overflow-hidden"
                                // className="w-[30%] bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                    
                    <p>Thời gian phát quà từ 00.01-00.02.2025</p>
                </form>
            </div>
        </Popup>
    )
}

export default PopupReceiveGift