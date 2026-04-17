import React from 'react';
import NeoCard from '../components/NeoCard';
import NeoBadge from '../components/NeoBadge';
import { Mail, Phone, User, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-20">
        <NeoBadge color="neo-accent" className="mb-4" rotate="rotate-2">Legacy of Care</NeoBadge>
        <h1 className="text-7xl font-black uppercase tracking-tighter">
          ABOUT THE <span className="text-neo-accent">PROJECT</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <NeoCard bgColor="bg-white" shadowSize="lg" className="-rotate-1">
          <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-4">Importance of Skincare</h2>
          <div className="space-y-6 text-xl font-bold">
            <p>
              Your skin acts as a barrier to our internal systems that are imperative to our health and well-being. 
              Taking steps to properly care for our skin helps to ensure this important barrier is strong.
            </p>
            <p className="bg-neo-secondary/30 p-4 border-l-8 border-neo-secondary">
              "When the skin is dry or irritated, cracks can occur, which make you more prone to infection. 
              A skin care routine also helps ensure your skin is well hydrated."
            </p>
            <p>
              Hydration is imperative because dry skin can crack and become more prone to infection, especially in the winter. 
              Your skin also plays a vital role in protecting you from the sun's harmful UV rays.
            </p>
          </div>
        </NeoCard>

        <div className="space-y-12">
           <div className="border-8 border-black shadow-neo-md overflow-hidden bg-black">
            <iframe 
               width="100%" 
               height="400" 
               src="https://www.youtube.com/embed/vcZ7mplvUjY?si=kHkaiiM64rD1UILt" 
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
            ></iframe>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="/images/skincare.jpg" className="border-4 border-black hover:rotate-2 transition-transform h-48 w-full object-cover" alt="Skincare 1" />
             <img src="/images/skincare2.avif" className="border-4 border-black hover:-rotate-2 transition-transform h-48 w-full object-cover" alt="Skincare 2" />
          </div>
        </div>
      </div>

      <section>
        <NeoCard bgColor="bg-neo-muted" shadowSize="lg" className="p-12">
          <h2 className="text-5xl font-black uppercase mb-12 flex items-center gap-4">
            <User className="h-10 w-10 text-black" strokeWidth={3} />
            Contact Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-neo-sm">
               <p className="text-sm font-black uppercase text-neo-accent mb-2">Developer</p>
               <p className="text-2xl font-black uppercase">Simran Gurnani</p>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-neo-sm">
               <p className="text-sm font-black uppercase text-neo-accent mb-2">Email ID</p>
               <a href="mailto:gurnanisimran28@gmail.com" className="text-xl font-bold flex items-center gap-2 hover:text-neo-accent transition-colors">
                 gurnanisimran28@gmail.com <ExternalLink size={18} />
               </a>
            </div>
          </div>
        </NeoCard>
      </section>
    </div>
  );
};

export default About;
