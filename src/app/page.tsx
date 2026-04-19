import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#f9f5fd] p-10 font-manrope">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-space-grotesk font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#B026FF] to-[#39FF14] drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]">
          Neural Canvas
        </h1>
      </header>

      {/* Input Section */}
      <section className="max-w-4xl mx-auto mb-16 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#B026FF] to-[#39FF14] opacity-20 blur-lg rounded-full"></div>
        <div className="relative bg-[#131319] border border-[#1f1f26] rounded-full p-2 flex items-center">
          <input 
            type="text" 
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-lg"
            placeholder="Describe your vision..."
            defaultValue="A cyberpunk cityscape reflecting in a wet neon street, brutalist architecture, photorealistic"
          />
          <button className="bg-gradient-to-r from-[#B026FF] to-[#39FF14] text-[#0A0A0F] font-bold font-space-grotesk uppercase tracking-widest px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all">
            Generate
          </button>
        </div>
        
        {/* Style Pills */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {['Cyberpunk', 'Synthwave', 'Photorealistic', 'Anime', '3D Render'].map((style, i) => (
            <button key={style} className={`px-6 py-2 rounded-full border ${i === 0 ? 'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10 shadow-[0_0_10px_rgba(57,255,20,0.2)]' : 'border-[#1f1f26] text-[#ACAAB1] hover:border-[#ACAAB1]'}`}>
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {[1,2,3,4,5,6].map((img, i) => (
          <div key={i} className="break-inside-avoid bg-[#131319] p-2 border border-[#1f1f26] group relative">
            <div className={`w-full bg-[#19191f] ${i % 2 === 0 ? 'h-64' : 'h-96'}`}></div>
            <div className="absolute inset-0 bg-[#0A0A0F]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center backdrop-blur-sm">
              <p className="text-sm text-[#39FF14] font-space-grotesk tracking-widest">A cyberpunk cityscape reflecting in a wet neon street...</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
