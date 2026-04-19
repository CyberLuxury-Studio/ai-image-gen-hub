import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Inter'] selection:bg-[#00F0FF] selection:text-black">
      <nav className="fixed w-full z-50 bg-[#0d0e15]/90 backdrop-blur-xl border-b border-[#3b494b]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-[#00F0FF] font-['Space_Grotesk']">SYNTH<span className="text-white">CANVAS</span></div>
          <button className="px-6 py-2 bg-[#00F0FF] text-black text-sm uppercase font-bold tracking-widest font-['Space_Grotesk'] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#BF00FF] rounded-full mix-blend-screen filter blur-[200px] opacity-15 pointer-events-none"></div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] uppercase relative z-10">
          THE FUTURE OF <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#BF00FF]">IMAGE SYNTHESIS.</span>
        </h1>
        <p className="text-xl text-[#b9cacb] mb-12 max-w-2xl mx-auto relative z-10">
          Generate high-fidelity, photorealistic, and cyberpunk art in milliseconds using our advanced neural engine.
        </p>
        
        {/* Dashboard Demo Bar */}
        <div className="max-w-4xl mx-auto bg-[#1a1b22] border border-[#3b494b] p-4 flex flex-col md:flex-row items-center gap-4 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <input type="text" className="flex-1 bg-[#0d0e15] border border-[#3b494b] px-6 py-4 outline-none focus:border-[#00F0FF] text-sm transition-colors w-full" placeholder="A cyberpunk city at dusk, neon rain, hyper-detailed..." />
           <button className="w-full md:w-auto px-10 py-4 bg-[#00F0FF] text-black font-['Space_Grotesk'] font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">Generate</button>
        </div>
        
        {/* Style Pills */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap relative z-10">
          {['Photorealistic', 'Cyberpunk', 'Oil Painting', 'Vector Art', 'Anime'].map((style, i) => (
            <button key={i} className={`px-6 py-2 border text-sm font-['Space_Grotesk'] uppercase tracking-widest transition-all ${i === 1 ? 'border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/10' : 'border-[#3b494b] text-[#b9cacb] hover:border-[#b9cacb]'}`}>
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1,2,3,4,5,6].map((img, i) => (
            <div key={i} className={`bg-[#1a1b22] border border-[#3b494b]/50 group relative overflow-hidden break-inside-avoid ${i % 2 === 0 ? 'h-64' : 'h-96'}`}>
              {/* Simulated Image Placeholder */}
              <div className="absolute inset-0 bg-[#12131a] flex items-center justify-center text-[#3b494b] font-mono text-xs">IMG_RENDER_{i}</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-[#00F0FF] font-['Space_Grotesk'] text-sm tracking-widest">A cyberpunk city at dusk...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#12131a] border-t border-[#3b494b]/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-16 font-['Space_Grotesk'] text-center">Neural Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {t: "Custom LoRA Training", d: "Train the model on your own datasets for hyper-specific outputs."},
              {t: "Batch Generation", d: "Render up to 100 variations simultaneously with distributed compute."},
              {t: "API Access", d: "Integrate our generation engine directly into your app with a single endpoint."}
            ].map((f, i) => (
              <div key={i} className="p-8 border-l-2 border-[#00F0FF] bg-[#1a1b22]">
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#eeedf7] mb-4 font-['Space_Grotesk']">{f.t}</h3>
                <p className="text-[#b9cacb] text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk']">Deployment Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-[#12131a] p-8 border border-[#3b494b]">
               <h3 className="text-xl uppercase tracking-widest text-[#b9cacb] font-['Space_Grotesk'] mb-2">Free</h3>
               <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">./process_batch2_true_stitch.sh</div>
               <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest text-sm hover:bg-[#b9cacb] hover:text-black transition-colors">Select Plan</button>
             </div>
             <div className="bg-[#1a1b22] p-10 border-2 border-[#BF00FF] shadow-[0_0_30px_rgba(191,0,255,0.15)] relative transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-[#BF00FF] text-white text-xs font-bold font-['Space_Grotesk'] uppercase tracking-widest px-3 py-1">Pro</div>
               <h3 className="text-xl uppercase tracking-widest text-[#BF00FF] font-['Space_Grotesk'] mb-2">Creator</h3>
               <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">5<span className="text-lg text-[#b9cacb]">/mo</span></div>
               <button className="w-full py-4 bg-[#BF00FF] text-white font-['Space_Grotesk'] uppercase font-bold tracking-widest text-sm hover:shadow-[0_0_20px_rgba(191,0,255,0.4)] transition-all">Select Plan</button>
             </div>
             <div className="bg-[#12131a] p-8 border border-[#3b494b]">
               <h3 className="text-xl uppercase tracking-widest text-[#b9cacb] font-['Space_Grotesk'] mb-2">Enterprise</h3>
               <div className="text-4xl font-bold font-['Space_Grotesk'] mb-8">Custom</div>
               <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest text-sm hover:bg-[#b9cacb] hover:text-black transition-colors">Select Plan</button>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center bg-[#0d0e15] border-t border-[#3b494b]/30">
         <p className="text-xs text-[#b9cacb] font-['Space_Grotesk'] uppercase tracking-widest">SYNTHCANVAS © 2024 | ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
