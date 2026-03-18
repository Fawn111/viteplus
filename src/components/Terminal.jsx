import { useState } from 'react'

const tabs = {
  create: (
    <ul className="space-y-3 text-[13px]">
      <li><span className="text-[#6b6375] mr-2">◇</span><span className="text-[#B0B0B3]">Select a template </span><span className="text-[#718ADB]">vite:application</span></li>
      <li><span className="text-[#6b6375] mr-2">◇</span><span className="text-[#B0B0B3]">Project directory </span><span className="text-[#718ADB]">vite-app</span></li>
      <li><span className="text-[#6b6375] mr-2">◆</span><span className="text-[#B0B0B3]">Node </span><span className="text-[#718ADB]">24.14.0</span><span className="text-[#B0B0B3]">  pnpm </span><span className="text-[#718ADB]">10.28.0</span></li>
      <li><span className="text-green-400 mr-2">✓</span><span className="text-white">Dependencies installed </span><span className="text-[#B0B0B3]">in 1.1s</span></li>
      <li><span className="text-[#718ADB] mr-2">→</span><span className="text-[#B0B0B3]">Next: </span><span className="text-[#718ADB]">cd vite-app && vp dev</span></li>
    </ul>
  ),
  dev: (
    <ul className="space-y-3 text-[13px]">
      <li><span className="text-[#718ADB]">VITE+</span><span className="text-[#B0B0B3]"> ready in </span><span className="text-white font-bold">68ms</span></li>
      <li><span className="text-[#718ADB] mr-2">→</span><span className="text-[#B0B0B3]">Local </span><span className="text-[#718ADB]">http://localhost:5173/</span></li>
      <li><span className="text-[#718ADB] mr-2">→</span><span className="text-[#B0B0B3]">Network </span><span className="text-white font-bold">--host</span><span className="text-[#B0B0B3]"> to expose</span></li>
      <li><span className="text-[#B0B0B3]">[hmr] updated </span><span className="text-[#718ADB]">src/App.tsx</span><span className="text-[#B0B0B3]"> in 14ms</span></li>
    </ul>
  ),
  check: (
    <ul className="space-y-3 text-[13px]">
      <li><span className="text-[#718ADB]">pass:</span><span className="text-[#B0B0B3]"> All 42 files are correctly formatted </span><span className="text-[#B0B0B3]">(88ms, 16 threads)</span></li>
      <li><span className="text-[#718ADB]">pass:</span><span className="text-[#B0B0B3]"> Found no warnings, lint errors, or type errors </span><span className="text-[#B0B0B3]">in 42 files (184ms, 16 threads)</span></li>
    </ul>
  ),
  test: (
    <ul className="space-y-3 text-[13px]">
      <li><span className="text-[#B0B0B3]">RUN </span><span className="text-[#718ADB]">test/button.spec.ts</span><span className="text-[#B0B0B3]"> (3 tests)</span></li>
      <li><span className="text-green-400 mr-2">✓</span><span className="text-white">button renders loading state</span></li>
      <li><span className="text-green-400 mr-2">✓</span><span className="text-white font-bold">12 tests passed</span><span className="text-[#B0B0B3]"> across 4 files</span></li>
      <li><span className="text-[#B0B0B3]">Duration </span><span className="text-[#718ADB]">312ms</span><span className="text-[#B0B0B3]"> (transform 22ms, tests 31ms)</span></li>
    </ul>
  ),
  build: (
    <ul className="space-y-3 text-[13px]">
      <li><span className="text-[#718ADB]">Rolldown</span><span className="text-[#B0B0B3]"> building for production</span></li>
      <li><span className="text-green-400 mr-2">✓</span><span className="text-white font-bold">128 modules transformed</span></li>
      <li><span className="text-[#718ADB]">dist/assets/index-B6h2Q8.js</span><span className="text-[#B0B0B3]">  46.2 kB  gzip: 14.9 kB</span></li>
      <li><span className="text-[#718ADB]">dist/assets/index-H3a8K2.css</span><span className="text-[#B0B0B3]">  5.1 kB  gzip: 1.6 kB</span></li>
      <li><span className="text-green-400 mr-2">✓</span><span className="text-[#B0B0B3]">Built in </span><span className="text-white font-bold">421ms</span></li>
    </ul>
  ),
}

export default function Terminal() {
  const [active, setActive] = useState('create')

  return (
    <section
      className="relative w-full overflow-hidden max-w-[1426px] mx-auto w-full"
      style={{ backgroundImage: "url('/images/bgblue.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '636px' }}
    >
      <div style={{ width: '991px', height: '523px', maxWidth: '100%', left: '50%', transform: 'translateX(-50%)' }} className="absolute bottom-0 flex flex-col">
        {/* Terminal content */}
        <div className="flex-1 bg-[#0e0e10] px-8 pt-6 pb-0 font-mono text-sm shadow-2xl overflow-hidden rounded-t-2xl text-left">
          <p className="text-white mb-4">$ vp {active}</p>
          {tabs[active]}
        </div>

        {/* Tabs bar */}
        <div className="flex justify-center bg-[#0e0e10] pb-5 pt-3">
          <div className="flex items-center gap-1 bg-[#1a1a1f] rounded-xl px-2 py-1.5">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-2 py-1.5 rounded-lg text-sm font-mono transition-colors ${
                  active === tab
                    ? 'bg-white text-[#08060d] font-medium border-2 border-[#4169e1]'
                    : 'text-[#6b6375] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
