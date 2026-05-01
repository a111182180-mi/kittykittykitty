import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { hobbies } from '../data';
import { Palette, Play, Image as ImageIcon, Code, Sparkles, Plane, X } from 'lucide-react';
import TravelItinerary from '../components/TravelItinerary';

export default function Hobbies() {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 relative"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-[#fff9db] p-6 rounded-3xl border-4 border-white shadow-sm hover:scale-[1.02] transition-transform group">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#f08c00]">
            <span className="text-2xl">🎨</span> 設計美編
          </h2>
          <ul className="space-y-3 pl-2">
             {hobbies.design.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fcc419]"></span>
                  {item}
                </li>
             ))}
          </ul>
        </section>

        <section className="bg-[#ebfbee] p-6 rounded-3xl border-4 border-white shadow-sm hover:scale-[1.02] transition-transform group">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#2b8a3e]">
            <span className="text-2xl">✨</span> 舞蹈
          </h2>
          <ul className="space-y-3 pl-2">
             {hobbies.dance.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#51cf66]"></span>
                  {item}
                </li>
             ))}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-black text-center mb-8 text-[#ff85a2] flex items-center justify-center gap-2">
           <ImageIcon size={28} />
           作品集
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {hobbies.works.map((work, idx) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={idx} 
              className="bg-[#fff0f6] p-2 rounded-3xl border-4 border-white shadow-sm overflow-hidden group"
            >
              <div className="aspect-video bg-white/60 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {work.type === 'travel' && <Plane size={48} strokeWidth={1} className="text-[#ffb3c6] group-hover:scale-110 transition duration-500" />}
                {work.type === '3d' && <Code size={48} strokeWidth={1} className="text-[#ffb3c6] group-hover:scale-110 transition duration-500" />}
                {work.type === 'video' && <Play size={48} strokeWidth={1} className="text-[#ffb3c6] group-hover:scale-110 transition duration-500" />}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff85a2]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <p className="text-white font-bold">{work.title}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800 truncate">{work.title}</h3>
                {work.desc && <p className="text-xs text-gray-500 mt-2 font-bold">{work.desc}</p>}
                
                <button 
                  onClick={() => {
                    if (work.type === 'travel') {
                      setSelectedWork('travel');
                    } else if (work.url) {
                      window.open(work.url, '_blank');
                    } else {
                      alert('此作品尚未提供詳細資訊');
                    }
                  }}
                  className="mt-4 text-xs bg-white text-[#ff85a2] px-4 py-2 rounded-full font-bold shadow-sm hover:-translate-y-0.5 transition border border-[#ffdeeb] cursor-pointer"
                >
                  查看詳情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Itinerary Modal */}
      <AnimatePresence>
        {selectedWork === 'travel' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div 
               initial={{ scale: 0.95, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.95, opacity: 0, y: 20 }}
               className="bg-[#fff0f6] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl border-8 border-white p-6 md:p-10 relative flex flex-col no-scrollbar"
               onClick={e => e.stopPropagation()}
            >
               <button 
                 onClick={() => setSelectedWork(null)}
                 className="absolute top-6 right-6 bg-white text-[#ff85a2] p-2 rounded-full shadow-sm hover:scale-110 transition border-2 border-[#ffdeeb] z-10"
               >
                 <X size={24} />
               </button>
               <TravelItinerary />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
