import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import NeoBadge from '../components/NeoBadge';
import { ArrowRight, Sparkles, User, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Hero Section */}
      <section className="relative mb-32">
        <div className="absolute -top-20 -left-10 opacity-10 text-[12rem] font-black select-none pointer-events-none">
          GLOW
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <NeoBadge color="neo-accent" className="mb-6" rotate="rotate-3">
              Your Beauty is Our Duty
            </NeoBadge>
            <h1 className="text-7xl md:text-8xl font-black uppercase leading-none mb-8">
              SKINCARE <br />
              <span className="text-neo-accent">FOR ALL</span>
            </h1>
            <p className="text-2xl font-bold bg-white border-4 border-black p-6 shadow-neo-md -rotate-1">
              "Every skin is unique and beautiful. To maintain its beauty, it is crucial to choose the correct skin products. Our mission is to provide you with the best products that will help you shine more."
            </p>
            <div className="mt-12 flex gap-4">
              <Link to="/about">
                <NeoButton color="neo-secondary">Learn More</NeoButton>
              </Link>
              <Link to="/feedback">
                <NeoButton color="white" className="hover:bg-neo-accent">Feedback</NeoButton>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <NeoCard bgColor="bg-neo-muted" shadowSize="lg" className="rotate-2">
              <img 
                src="/images/skincare4.webp" 
                alt="Skincare Hero" 
                className="w-full border-4 border-black shadow-neo-sm"
              />
              <div className="absolute -bottom-6 -right-6">
                <div className="bg-neo-secondary border-4 border-black p-6 rounded-full animate-bounce shadow-neo-sm">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="mb-32">
        <h2 className="text-5xl font-black uppercase mb-12 flex items-center gap-4">
          <User className="h-10 w-10 text-neo-accent" strokeWidth={3} />
          Skincare for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Men", img: "menskin.jpeg", link: "/guide/men", color: "bg-neo-muted" },
            { title: "Women", img: "womenskin.jpg", link: "/guide/women", color: "bg-neo-accent" },
            { title: "Teenagers", img: "teenskin.jpeg", link: "/guide/teenagers", color: "bg-neo-secondary" }
          ].map((item, idx) => (
            <Link key={idx} to={item.link}>
              <NeoCard bgColor={item.color} shadowSize="md" className="h-full group">
                <div className="overflow-hidden border-4 border-black mb-4">
                  <img src={`/images/${item.img}`} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-3xl font-black uppercase flex justify-between items-center">
                  {item.title}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </h3>
              </NeoCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Skin Types */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-black uppercase">Choose your skin type</h2>
          <NeoBadge color="neo-accent" className="hidden md:block">Personalized Routine</NeoBadge>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Oily Skin", img: "Oily_skin.avif", link: "/type/oily", color: "bg-white" },
            { name: "Sensitive Skin", img: "sensitive.jpeg", link: "/type/sensitive", color: "bg-white" },
            { name: "Dry Skin", img: "drysin.jpg", link: "/type/dry", color: "bg-white" },
            { name: "Combination Skin", img: "combination.jpeg", link: "/type/combination", color: "bg-white" }
          ].map((type, idx) => (
            <Link key={idx} to={type.link}>
              <NeoCard bgColor={type.color} shadowSize="sm" className="text-center group hover:bg-neo-secondary transition-colors">
                <div className="border-4 border-black mb-4 aspect-square flex items-center justify-center overflow-hidden">
                   <img src={`/images/${type.img}`} alt={type.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-black uppercase text-xl">{type.name}</p>
              </NeoCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
