import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { demographicGuides } from '../data/siteData';
import NeoCard from '../components/NeoCard';
import NeoBadge from '../components/NeoBadge';
import { ArrowLeft, Zap, Heart } from 'lucide-react';

const DemographicPage = () => {
  const { category } = useParams();
  const data = demographicGuides[category];

  if (!data) {
    return <div className="p-20 text-center font-black">CATEGORY NOT FOUND!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <Link to="/" className="inline-flex items-center gap-2 font-black uppercase mb-8 hover:text-neo-accent transition-colors">
        <ArrowLeft size={24} strokeWidth={3} /> Back to dashboard
      </Link>

      <div className="text-center mb-16">
        <NeoBadge className="mb-4" rotate="rotate-1">Specialized Guide</NeoBadge>
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-4">{data.title}</h1>
        <div className="w-24 h-4 bg-neo-accent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
        <NeoCard bgColor="bg-neo-muted" className="p-0 overflow-hidden">
          <img src={`/images/${data.heroImg}`} alt={data.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </NeoCard>
        
        <div className="border-8 border-black shadow-neo-lg bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src={data.videoUrl} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            style={{ minHeight: '400px' }}
          ></iframe>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="text-5xl font-black uppercase mb-12 flex items-center gap-4">
          <Zap className="h-10 w-10 text-neo-secondary fill-neo-secondary" strokeWidth={3} />
          Home Remedies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.remedies.map((remedy, idx) => (
            <NeoCard key={idx} bgColor="bg-white" className="rotate-1 hover:rotate-0 transition-transform">
              <h4 className="text-xl font-black uppercase mb-2 text-neo-accent underline decoration-4 underline-offset-4">{remedy.name}</h4>
              <p className="font-bold">{remedy.text}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-5xl font-black uppercase mb-12 flex items-center gap-4">
          <Heart className="h-10 w-10 text-neo-accent fill-neo-accent" strokeWidth={3} />
          Recommended Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.recommendations.map((img, idx) => (
            <div key={idx} className="border-4 border-black p-2 bg-white shadow-neo-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="bg-canvas border-4 border-black mb-2 overflow-hidden">
                 <img src={`/images/${img}`} alt="Recommendation" className="w-full h-80 object-cover" />
              </div>
              <NeoBadge color="neo-secondary">Highly Rated</NeoBadge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DemographicPage;
