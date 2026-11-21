'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioData } from '@/types/portfolio';

interface AllianceSectionProps {
  data: PortfolioData['alliance'];
}

export function AllianceSection({ data }: AllianceSectionProps) {
  const CHANNELS = [
    {
      name: 'WHATSAPP',
      href: data.links.whatsapp,
      icon: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.675-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.244-.588-.493-.509-.677-.518-.175-.01-.375-.01-.576-.01s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.509 0 1.48 1.079 2.91 1.229 3.111.15.201 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.722.23 1.379.198 1.9.12.58-.088 1.78-.728 2.03-1.431.25-.702.25-1.304.175-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.517 2 2.03 6.486 2.03 12.008c0 1.93.551 3.734 1.503 5.267L2 22l4.87-1.494a9.96 9.96 0 0 0 5.17 1.502h.004c5.52 0 10.007-4.486 10.007-10.008C22.05 6.486 17.564 2 12.04 2z" />
        </svg>
      ),
    },
    {
      name: 'GITHUB',
      href: data.links.github,
      icon: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'EMAIL',
      href: data.links.email,
      icon: (
        <svg
          className="w-4 h-4 fill-none stroke-current"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      name: 'LINKEDIN',
      href: data.links.linkedin,
      icon: (
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="alliance"
      className="relative w-full h-full flex items-center justify-center px-10 max-w-5xl mx-auto"
    >
      <div className="w-full text-center">
        {/* Section Header */}
        <div className="mb-2 inline-flex items-center space-x-3 text-gold/80 text-xs font-sans tracking-[0.25em] uppercase">
          <span>ALLIANCE</span>
          <span className="w-6 h-[1px] bg-gold/30" />
          <span>CONTACT &amp; CHANNELS</span>
        </div>

        {/* Grand Cormorant Title: Welcoming, Authentic & Professional */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl text-ivory tracking-wide my-2"
        >
          {data.headline}
        </motion.h2>

        {/* Crisp Elevator Pitch (Instead of Bio) */}
        <p className="font-sans text-xs text-ivory/80 max-w-lg mx-auto font-light leading-relaxed mb-8">
          {data.subheadline}
        </p>

        {/* The Four Direct Channels Grid (Clean, Icon + Name Only) */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {CHANNELS.map((channel, idx) => {
            return (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${channel.name}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="celestial-card group relative flex flex-col items-center justify-center py-5 px-4 rounded-xs border border-gunmetal/80 hover:border-gold hover:bg-gradient-to-b hover:from-wine/25 hover:to-charcoal/95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_24px_rgba(139,38,62,0.4)]"
              >
                {/* Channel Icon with Catchy 10% Wine Highlight */}
                <div className="w-10 h-10 rounded-full border border-gunmetal/80 flex items-center justify-center mb-2.5 text-slate-gray group-hover:text-ivory group-hover:bg-wine/40 group-hover:border-wine-bright transition-all duration-200 shadow-xs group-hover:shadow-[0_0_14px_rgba(163,56,77,0.55)]">
                  {channel.icon}
                </div>

                {/* Channel Name */}
                <span className="font-sans text-xs tracking-widest text-ivory font-medium group-hover:text-gold transition-colors duration-200">
                  {channel.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Authorship Footer */}
        <div className="pt-6 border-t border-gunmetal/60 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-[10px] tracking-[0.25em] text-slate-gray/70 uppercase">
            CURATED BY LNYX &bull; ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
