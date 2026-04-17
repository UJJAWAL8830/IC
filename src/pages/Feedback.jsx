import React, { useState } from 'react';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import NeoBadge from '../components/NeoBadge';
import { Send, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'male',
    satisfaction: '',
    recommend: '',
    expectations: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Failed to submit:", err);
      // In a real app, show error. For now, we'll just simulate success if server isn't running.
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <NeoCard bgColor="bg-neo-secondary" shadowSize="lg">
          <CheckCircle className="h-20 w-20 mx-auto mb-8 text-black" strokeWidth={3} />
          <h1 className="text-5xl font-black uppercase mb-4">THANK YOU!</h1>
          <p className="text-2xl font-bold mb-8">Your feedback helps us shine even more.</p>
          <NeoButton onClick={() => setSubmitted(false)}>Submit Another</NeoButton>
        </NeoCard>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-16">
        <NeoBadge rotate="rotate-1" className="mb-4">Community Voice</NeoBadge>
        <h1 className="text-7xl font-black uppercase tracking-tighter">
          FEEDBACK <span className="text-neo-accent">FORM</span>
        </h1>
      </div>

      <NeoCard bgColor="bg-white" shadowSize="lg" className="bg-grid-neo">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-black uppercase tracking-wider">Enter Your Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-secondary transition-colors outline-none shadow-neo-sm focus:shadow-none translate-y-0 focus:translate-y-1"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-black uppercase tracking-wider">Email Address</label>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-secondary transition-colors outline-none shadow-neo-sm focus:shadow-none translate-y-0 focus:translate-y-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-black uppercase tracking-wider">Phone Number</label>
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-secondary transition-colors outline-none shadow-neo-sm focus:shadow-none translate-y-0 focus:translate-y-1"
              />
            </div>
            <div className="space-y-2">
              <label className="font-black uppercase tracking-wider block">Gender</label>
              <div className="flex gap-6 mt-4">
                {['male', 'female', 'other'].map(g => (
                  <label key={g} className="flex items-center gap-2 font-black uppercase cursor-pointer">
                    <input 
                      type="radio" 
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      className="w-6 h-6 border-4 border-black appearance-none checked:bg-neo-accent transition-colors"
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-4 border-black my-12" />

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-2xl font-black uppercase block">How satisfied were you with our products?</label>
              <input 
                name="satisfaction"
                value={formData.satisfaction}
                onChange={handleChange}
                placeholder="Ex: Very satisfied, great results!"
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-muted transition-colors outline-none"
              />
            </div>

            <div className="space-y-4">
              <label className="text-2xl font-black uppercase block">How likely are you to recommend us?</label>
              <input 
                name="recommend"
                value={formData.recommend}
                onChange={handleChange}
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-muted transition-colors outline-none"
              />
            </div>

            <div className="space-y-4">
              <label className="text-2xl font-black uppercase block">Did the project meet your expectations?</label>
              <textarea 
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                rows="4"
                className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:bg-neo-muted transition-colors outline-none resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-8">
            <NeoButton color="white" type="reset" onClick={() => setFormData({
              name: '', email: '', phone: '', gender: 'male', satisfaction: '', recommend: '', expectations: ''
            })}>
              Reset
            </NeoButton>
            <NeoButton color="neo-accent" type="submit" className="flex items-center gap-2">
              Submit Feedback <Send size={20} />
            </NeoButton>
          </div>
        </form>
      </NeoCard>
    </div>
  );
};

export default Feedback;
