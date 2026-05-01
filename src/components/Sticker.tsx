import { ReactNode, useMemo } from 'react';
import { motion } from 'motion/react';

interface StickerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Sticker({ children, className = '', delay = 0 }: StickerProps) {
  // Randomize floating animation duration and float height per sticker to make it look organic
  const floatDuration = useMemo(() => 3 + Math.random() * 2, []);
  const yOffset = useMemo(() => -(10 + Math.random() * 15), []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, yOffset, 0] }}
      transition={{ 
        scale: { type: 'spring', delay, bounce: 0.5 },
        opacity: { delay, duration: 0.5 },
        y: { 
          duration: floatDuration, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: delay 
        }
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      className={`absolute flex items-center justify-center rounded-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
