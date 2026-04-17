import React from 'react';
import { motion } from 'framer-motion';

const NeoButton = ({ children, onClick, color = 'neo-accent', className = '' }) => {
  return (
    <motion.button
      whileTap={{ x: 4, y: 4, boxShadow: '0px 0px 0px 0px transparent' }}
      onClick={onClick}
      className={`
        px-6 py-3 border-4 border-black font-black uppercase tracking-wider
        bg-${color} ${className}
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transition-colors duration-100 ease-linear
      `}
    >
      {children}
    </motion.button>
  );
};

export default NeoButton;
