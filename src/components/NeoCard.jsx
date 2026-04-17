import React from 'react';
import { motion } from 'framer-motion';

const NeoCard = ({ children, className = '', bgColor = 'bg-white', shadowSize = 'md' }) => {
  const shadowClass = {
    sm: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
    md: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]',
    lg: 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]',
  }[shadowSize];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
        border-4 border-black ${bgColor} ${className} ${shadowClass}
        p-6 relative overflow-hidden
      `}
    >
      {children}
    </motion.div>
  );
};

export default NeoCard;
