'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { JourneyItem } from '@/types/portfolio';

interface JourneySectionProps {
  journey: JourneyItem[];
}

function renderBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-medium text-ivory tracking-wide">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function JourneySection({ journey }: JourneySectionProps) {
  return (
    <section
      id="journey"
      className="relative w-full h-full flex items-center justify-center px-10 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Section Header: Professional & Clean */}
        <div className="mb-4 flex items-center">
          <div className="flex items-center space-x-3 text-gold/80 text-xs font-sans tracking-[0.25em] uppercase">
            <span>JOURNEY</span>
            <span className="w-6 h-[1px] bg-gold/30" />
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>
        </div>

        {/* Symmetrical Dual Experience Cards (Identical Layout & Geometry) */}
        <div className="grid grid-cols-2 gap-8 relative">
          {journey.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-xs p-6 flex flex-col justify-between h-[450px] celestial-stela-active"
              >
                {/* Geometric Corner Accents */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold/60 pointer-events-none" />
                <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold/60 pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold/60 pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold/60 pointer-events-none" />

                <div className="flex-1 flex flex-col justify-start">
                  {/* Symmetrical Stacked Header: Role -> Company -> Period Badge (Underneath) */}
                  <div className="relative z-10 min-h-[88px]">
                    <h3 className="font-serif text-2xl font-normal text-ivory tracking-wide leading-tight">
                      {item.role}
                    </h3>
                    <div className="text-xs font-sans tracking-[0.15em] text-gold/90 uppercase font-medium mt-1">
                      {item.company}
                    </div>
                    <div className="mt-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-xs text-[10px] font-sans tracking-widest uppercase bg-wine/30 text-gold border border-gold/40">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Golden Divider */}
                  <div className="w-12 h-[1px] bg-gold/40 my-3" />

                  {/* Achievements List with Bold-First Scanning */}
                  <ul className="relative z-10 space-y-3.5 font-sans text-xs text-ivory/85 font-light leading-relaxed">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start space-x-2.5">
                        <span className="text-gold mt-1.5 text-[8px] flex-shrink-0" aria-hidden="true">
                          &bull;
                        </span>
                        <span>{renderBoldText(ach)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Core Soft Skills: Only rendered if skills are present */}
                {item.techStack && item.techStack.length > 0 && (
                  <div className="relative z-10 h-[88px] pt-3 border-t border-gunmetal/60 flex flex-col justify-center">
                    <div className="p-2 rounded-xs bg-obsidian/75 border border-gunmetal/70 flex flex-wrap gap-1.5 items-center min-h-[66px]">
                      {item.techStack.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-xs bg-charcoal/90 border border-gunmetal/90 text-[10px] font-sans tracking-wider text-ivory/85 uppercase whitespace-nowrap shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
