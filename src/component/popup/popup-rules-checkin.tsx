'use client'
import Popup from "../popup"

const PopupRulesCheckin:React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({isOpen, onClose}) => {
    return (
        <Popup
            title="Thể lệ điểm danh"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center">
                <p>Đây là nội dung thể lệ</p>
            </div>
        </Popup>
    )
}

export default PopupRulesCheckin