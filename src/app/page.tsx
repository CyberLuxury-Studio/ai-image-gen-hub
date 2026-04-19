import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 tracking-widest text-[#00F0FF] uppercase">ai-image-gen-hub</h1>
      <p className="text-[#b9cacb] max-w-xl text-center">Build an AI image generator dashboard. Include a large prompt input bar, style selection pills, and a masonry gallery of generated art.</p>
    </main>
  );
}
