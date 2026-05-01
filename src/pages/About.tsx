import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="bg-white/50 p-6 rounded-3xl text-center md:text-left border-4 border-white shadow-sm">
        <p className="text-lg leading-relaxed text-gray-600 font-bold">
          {personalInfo.intro}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white/50 p-6 rounded-3xl border-4 border-white shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#ff85a2]">
            <span className="bg-[#ffdeeb] p-2 rounded-lg text-[#ff4d6d]"><GraduationCap size={20}/></span>
            學歷
          </h2>
          {personalInfo.education.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-dotted border-[#ffdeeb] pl-4 py-1 relative ml-2">
              <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-[#ffdeeb] rounded-full"></div>
              <span className="text-sm text-gray-500 font-bold block mb-1">{edu.period}</span>
              <h3 className="font-bold text-gray-800">{edu.school}</h3>
              <p className="text-gray-600 font-bold">{edu.department}</p>
            </div>
          ))}
        </section>

        <section className="bg-white/50 p-6 rounded-3xl border-4 border-white shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#74c0fc]">
            <span className="bg-[#e7f5ff] p-2 rounded-lg text-[#228be6]"><Code size={20}/></span>
            語言能力
          </h2>
          <div className="flex flex-wrap gap-3">
            {personalInfo.languages.map((lang, idx) => (
              <div key={idx} className="bg-[#e7f5ff] text-[#228be6] px-4 py-2 rounded-full border border-white flex gap-2 items-center font-semibold text-sm">
                <span className="font-bold">{lang.name}</span>
                <span className="opacity-80">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-white/50 p-6 md:p-8 rounded-3xl border-4 border-white shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-[#fcc419] flex items-center gap-2 justify-center">
          <span className="bg-[#fff9db] p-2 rounded-lg text-[#f08c00]">🌸</span>
          自傳
        </h2>
        <div className="space-y-4">
          {personalInfo.autobiography.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-gray-600 font-bold text-justify">
              {para}
            </p>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
