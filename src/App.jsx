import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NeoNavbar from './components/NeoNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import SkinTypePage from './pages/SkinTypePage';
import DemographicPage from './pages/DemographicPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-neo-accent selection:text-white">
        <NeoNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            
            {/* Skin Type Routes */}
            <Route path="/type/:type" element={<SkinTypePage />} />
            
            {/* Demographic Routes */}
            <Route path="/guide/:category" element={<DemographicPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="mt-32 border-t-8 border-black bg-neo-accent px-8 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black uppercase text-white mb-6">Stay Glowing</h2>
              <p className="text-white text-xl font-bold max-w-md">
                Your skin is your best accessory. Take care of it with Simran Skincare.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <p className="font-black text-white text-xl uppercase tracking-tighter">© Simran Skincare 2024</p>
              <div className="flex gap-4">
                 <div className="bg-neo-secondary border-4 border-black p-2 shadow-neo-sm">FB</div>
                 <div className="bg-neo-muted border-4 border-black p-2 shadow-neo-sm">IG</div>
                 <div className="bg-white border-4 border-black p-2 shadow-neo-sm">TW</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
