import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Briefcase, Sparkles, Instagram, Mail, Star } from 'lucide-react';
import About from './pages/About';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Sticker from './components/Sticker';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  const navItems = [
    { id: 'about', label: '個人介紹', icon: <Heart size={20} /> },
    { id: 'experience', label: '工作經歷', icon: <Briefcase size={20} /> },
    { id: 'hobbies', label: '興趣作品', icon: <Sparkles size={20} /> },
  ];

  return (
    <div className="min-h-screen pb-24 overflow-x-hidden relative flex flex-col font-sans">
      {/* Decorative Stickers Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <Sticker delay={0.1} className="top-10 left-10 -rotate-12 bg-[#ffdeeb] shadow-md border-4 border-white text-3xl w-16 h-16">🌸</Sticker>
         <Sticker delay={0.2} className="bottom-10 right-10 rotate-12 bg-[#e7f5ff] shadow-md border-4 border-white text-4xl w-24 h-24">✨</Sticker>
         <Sticker delay={0.3} className="top-1/2 left-4 rotate-45 bg-[#f3f0ff] shadow-md border-4 border-white text-xl !rounded-lg w-12 h-12">🎀</Sticker>
         <Sticker delay={0.4} className="top-20 right-20 -rotate-6 bg-[#fff9db] shadow-md border-4 border-white text-2xl w-16 h-16">🍓</Sticker>
         <Sticker delay={0.5} className="bottom-1/4 left-1/4 -rotate-12 bg-[#ffc9db] shadow-md border-4 border-white text-4xl w-20 h-20">💖</Sticker>
         <Sticker delay={0.6} className="top-1/4 right-32 rotate-12 bg-[#ffb3c6] shadow-md border-4 border-white text-2xl w-16 h-16">🌷</Sticker>
         <Sticker delay={0.7} className="bottom-20 right-1/4 -rotate-6 bg-[#ffd6e7] shadow-md border-4 border-white text-3xl w-16 h-16">🍡</Sticker>
         <Sticker delay={0.8} className="top-40 left-32 rotate-6 bg-[#ffe3e8] shadow-md border-4 border-white text-2xl w-14 h-14">🐰</Sticker>
         <Sticker delay={0.9} className="bottom-1/3 left-24 -rotate-45 bg-[#ffccd5] shadow-md border-4 border-white text-xl !rounded-lg w-12 h-12">🐾</Sticker>
         <Sticker delay={1.0} className="top-2/3 right-12 rotate-12 bg-[#fff0f6] shadow-md border-4 border-white text-2xl w-14 h-14">🍰</Sticker>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-center items-center gap-6 pt-12 pb-6 z-10 relative">
        <button onClick={() => setActiveTab('about')} className="group">
          <div className={`px-8 py-3 rounded-full font-bold border-4 border-white transition-all ${
            activeTab === 'about'
              ? 'bg-[#ff85a2] text-white shadow-none translate-y-1'
              : 'bg-[#ff85a2] text-white shadow-[0_4px_0_#ff4d6d] group-hover:translate-y-1 group-hover:shadow-none'
          }`}>
            個人介紹
          </div>
        </button>
        <button onClick={() => setActiveTab('experience')} className="group">
          <div className={`px-8 py-3 rounded-full font-bold border-4 border-white transition-all ${
            activeTab === 'experience'
              ? 'bg-[#a5d8ff] text-white shadow-none translate-y-1'
              : 'bg-[#a5d8ff] text-white shadow-[0_4px_0_#4dabf7] group-hover:translate-y-1 group-hover:shadow-none'
          }`}>
            工作經歷
          </div>
        </button>
        <button onClick={() => setActiveTab('hobbies')} className="group">
          <div className={`px-8 py-3 rounded-full font-bold border-4 border-white transition-all ${
            activeTab === 'hobbies'
              ? 'bg-[#ffec99] text-[#845ef7] shadow-none translate-y-1'
              : 'bg-[#ffec99] text-[#845ef7] shadow-[0_4px_0_#fcc419] group-hover:translate-y-1 group-hover:shadow-none'
          }`}>
            興趣作品
          </div>
        </button>
      </nav>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pb-12 z-10 relative flex flex-col items-center">
        <header className="text-center mb-8 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-32 h-32 rounded-[40px] border-4 border-[#ff85a2] bg-[#ffd6e7] shadow-inner overflow-hidden mb-4"
          >
            <img 
              src="/regenerated_image_1777567105557.x/adventurer/svg" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-[#ff85a2] mb-2">吳宓潔</h1>
          <div className="flex gap-3 mb-4">
            <span className="px-4 py-1 bg-[#ffdeeb] text-[#ff4d6d] rounded-full text-sm font-semibold border-white border">
              雙子座 | O型 | 2007-05-23
            </span>
          </div>

          <div className="flex gap-4 mb-2">
            <a href="mailto:a111182180@nkust.edu.tw" className="flex items-center gap-1 text-sm bg-white px-3 py-1.5 rounded-full shadow-md hover:-translate-y-1 transition text-[#ff4d6d]">
              <Mail size={16} /> a111182180@nkust.edu.tw
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-[#ff85a2] to-[#ff4d6d] text-white rounded-full shadow-md hover:-translate-y-1 transition">
              <Instagram size={18} />
            </a>
          </div>
        </header>

        <div className="bg-white/80 backdrop-blur-sm w-full rounded-[40px] border-8 border-white shadow-2xl p-6 md:p-12 mb-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && <About key="about" />}
            {activeTab === 'experience' && <Experience key="experience" />}
            {activeTab === 'hobbies' && <Hobbies key="hobbies" />}
          </AnimatePresence>
        </div>
      </main>

      <footer className="text-center pb-8 text-[#ff85a2] font-bold text-sm z-10 relative">
        © kittykitty 🎀
      </footer>
    </div>
  );
}
