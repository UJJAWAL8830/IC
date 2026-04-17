import React from 'react';

const NeoBadge = ({ children, color = 'neo-secondary', className = '', rotate = '-rotate-2' }) => {
  return (
    <div className={`
      inline-block px-3 py-1 border-2 border-black font-black text-xs uppercase tracking-widest
      bg-${color} ${rotate} ${className}
      shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
    `}>
      {children}
    </div>
  );
};

export default NeoBadge;
