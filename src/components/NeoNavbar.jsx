import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu } from 'lucide-react';

const NeoNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-canvas border-b-4 border-black px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-neo-accent border-4 border-black p-2 shadow-neo-sm group-hover:rotate-6 transition-transform">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="font-black text-2xl uppercase tracking-tighter">
            Simran<span className="text-neo-accent font-black">Skincare</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest">
          <Link to="/" className="hover:text-neo-accent transition-colors">Home</Link>
          <Link to="/about" className="hover:text-neo-accent transition-colors">About</Link>
          <Link to="/feedback" className="bg-neo-secondary border-4 border-black px-4 py-2 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Feedback
          </Link>
        </div>

        <button className="md:hidden border-4 border-black p-2 bg-neo-secondary shadow-neo-sm hover:shadow-none translate-x-0 translate-y-0 active:translate-x-1 active:translate-y-1 transition-all">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default NeoNavbar;
