import React from 'react';
import { motion } from 'framer-motion';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string | string[];
  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    title = 'Chúc mừng!',
    content,
    children
  }) => {
    if (!isOpen) return null;
  
    const displayContent = Array.isArray(content) ? content.join('\n') : content;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  
    return (
      <motion.div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayClick}>
        <motion.div className="relative flex flex-col items-center w-11/12 max-w-md shadow-lg bg-[url('/images/bg-popup.png')] aspect-[112/169] bg-no-repeat bg-cover bg-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}>
          <button
            className="absolute -top-[1%] -right-[1%] w-[10%] bg-[url('/images/icon-close.png')] aspect-[45/46] bg-no-repeat bg-cover bg-center"
            onClick={onClose}
          >
          </button>
          <h3 className={`mt-[10%] w-[40%] text-center text-4xl font-semibold text-[#C60E0F]`} style={{ fontFamily: 'var(--font-fz-hbr-game)' }}>
            {title}
          </h3>
          <div className="text-center mb-4 w-[80%] bg-[url('/images/bg-popup-content.png')] aspect-[457/577] bg-no-repeat bg-cover bg-center">
            {/* {displayContent?.split('\n').map((line, index) => (
              <p key={index} className="text-gray-700 my-1">
                {line}
              </p>
            ))} */}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </motion.div>
      </motion.div>
    );
  };
  
  export default Popup;