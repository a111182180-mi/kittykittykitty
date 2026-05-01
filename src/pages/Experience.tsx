import { motion } from 'motion/react';
import { experiences, certifications } from '../data';
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <section>
        <h2 className="text-3xl font-black text-[#74c0fc] mb-8 flex items-center gap-2">
          <span className="text-xl">💼</span> 工作經歷
        </h2>
        
        <div className="space-y-6 overflow-y-auto pr-4 ml-2">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 border-l-4 border-dotted border-[#a5d8ff] pl-6 relative">
              <div className="absolute -left-[10px] top-4 w-4 h-4 bg-[#a5d8ff] rounded-full"></div>
              <div className="flex-1 bg-white/50 p-6 rounded-3xl border-4 border-white shadow-sm hover:scale-[1.02] transition-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-gray-800">{exp.company}</h3>
                  <span className="text-sm font-semibold text-[#228be6] bg-[#e7f5ff] px-3 py-1 rounded-full whitespace-nowrap hidden md:inline-block border border-white">
                    {exp.period}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#228be6] bg-[#e7f5ff] px-3 py-1 rounded-full whitespace-nowrap mt-2 inline-block md:hidden border border-white mb-2">
                  {exp.period}
                </span>
                <ul className="space-y-2">
                  {exp.tasks.map((task, testIdx) => (
                    <li key={testIdx} className="flex gap-2 text-sm text-gray-600 mt-1">
                      <CheckCircle2 size={16} className="text-[#a5d8ff] shrink-0 mt-0.5" />
                      <span className="font-bold">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-white/50 p-6 md:p-8 rounded-3xl border-4 border-white shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-[#fcc419] text-center flex justify-center items-center gap-2">
          <span className="bg-[#fff9db] p-2 rounded-lg text-[#f08c00]">📜</span> 專業證照 (航海)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              key={idx} 
              className="bg-white px-4 py-6 rounded-2xl text-center shadow-sm border-[3px] border-[#ffdeeb] flex items-center justify-center h-full group transition-colors hover:border-[#ff85a2]"
            >
              <h3 className="font-bold text-gray-800 group-hover:text-[#ff85a2] transition-colors">{cert}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
