import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { skinTypes } from '../data/siteData';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import NeoBadge from '../components/NeoBadge';
import { CheckCircle2, XCircle, Beaker, Sun, Moon, ArrowLeft } from 'lucide-react';

const SkinTypePage = () => {
  const { type } = useParams();
  const data = skinTypes[type];

  if (!data) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-4xl font-black mb-8">SKIN TYPE NOT FOUND!</h1>
        <Link to="/"><NeoButton>Go Back Home</NeoButton></Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <Link to="/" className="inline-flex items-center gap-2 font-black uppercase mb-8 hover:text-neo-accent transition-colors">
        <ArrowLeft size={24} strokeWidth={3} /> Back to dashboard
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
        <div className="lg:w-1/2">
          <NeoBadge className="mb-4">Skin Type Guide</NeoBadge>
          <h1 className="text-7xl font-black uppercase mb-6">{data.title}</h1>
          <div className="border-8 border-black shadow-neo-lg overflow-hidden bg-black">
            <iframe 
              width="100%" 
              height="350" 
              src={data.videoUrl} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NeoCard bgColor="bg-white" className="h-full">
            <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2 text-green-600">
              <CheckCircle2 color="black" fill="#10b981" /> Dos
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              {data.dos.map((item, idx) => (
                <li key={idx}><span>{item.b}</span> {item.text}</li>
              ))}
            </ul>
          </NeoCard>
          
          <NeoCard bgColor="bg-white" className="h-full">
            <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2 text-red-500">
              <XCircle color="black" fill="#ef4444" /> Don'ts
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              {data.donts.map((item, idx) => (
                <li key={idx}><span>{item.b}</span> {item.text}</li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </div>

      <section className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-neo-accent border-4 border-black p-4 shadow-neo-sm rotate-3">
            <Beaker className="text-white h-8 w-8" />
          </div>
          <h2 className="text-5xl font-black uppercase">Effective Ingredients</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.ingredients.map((ing, idx) => (
            <NeoCard key={idx} bgColor="bg-neo-muted/20" className="hover:bg-neo-muted transition-colors">
              <h4 className="text-xl font-black uppercase mb-2">{ing.name}</h4>
              <p className="font-bold">{ing.text}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl font-black uppercase mb-12">Building a Routine</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <NeoCard bgColor="bg-neo-secondary" shadowSize="lg">
            <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
              <Sun className="h-10 w-10" /> Morning Routine
            </h3>
            <div className="space-y-6">
              {data.routine.morning.map((step, idx) => (
                <div key={idx} className="bg-white/50 border-2 border-black p-4 font-bold relative">
                  <span className="absolute -top-3 -left-3 bg-black text-white px-2 py-1 text-xs">STEP {idx + 1}</span>
                  <span className="uppercase text-neo-accent">{step.label}:</span> {step.text}
                </div>
              ))}
            </div>
          </NeoCard>

          <NeoCard bgColor="bg-black" className="text-white" shadowSize="lg">
            <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4 text-neo-muted">
              <Moon className="h-10 w-10 fill-neo-muted" /> Evening Routine
            </h3>
            <div className="space-y-6">
              {data.routine.night.map((step, idx) => (
                <div key={idx} className="bg-white/10 border-2 border-white/20 p-4 font-bold relative">
                  <span className="absolute -top-3 -left-3 bg-neo-muted text-black px-2 py-1 text-xs">STEP {idx + 1}</span>
                  <span className="uppercase text-neo-muted">{step.label}:</span> {step.text}
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      <section>
        <h2 className="text-5xl font-black uppercase mb-12">Product Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.recommendations.map((img, idx) => (
            <div key={idx} className="border-4 border-black shadow-neo-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <img src={`/images/${img}`} alt="Recommendation" className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkinTypePage;
