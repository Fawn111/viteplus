import { useEffect, useRef, useState } from 'react'

const TABS = ['dev', 'check', 'test', 'run', 'pack']

export default function Everything() {
  const [activeTab, setActiveTab] = useState('dev')
  const tabBarRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.replace('section-', ''))
          }
        })
      },
      { threshold: 0.4 }
    )
    TABS.forEach(id => {
      const el = document.getElementById(`section-${id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  function scrollTo(id) {
    setActiveTab(id)
    document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const tabBtn = (id, label) => (
    <button
      key={id}
      onClick={() => scrollTo(id)}
      className={`flex-1 py-4 text-sm font-mono transition-colors border-r border-[#2a2a2a] last:border-r-0 ${
        activeTab === id ? 'text-white border-b-2 border-b-white bg-[#1a1a1f]' : 'text-[#6b6375] hover:text-white'
      }`}
    >
      {label}
    </button>
  )

  return (
    <section className="bg-[#16171E] border-b border-[#2a2a2a] w-full max-w-[1426px] mx-auto border-x border-[#2a2a2a]">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h2 className="text-[48px] font-normal text-white mb-4">Everything you need in one tool</h2>
        <p className="text-[#B9BABB] text-[18px] font-light">
          Vite+ unifies your entire web development workflow<br />into a single, powerful command-line interface.
        </p>
      </div>

      {/* Sticky tab bar */}
      <div ref={tabBarRef} className="flex border-t border-b border-[#2a2a2a] sticky top-0 z-20 bg-[#16171E] overflow-x-auto">
        {tabBtn('dev', <span className="flex items-center justify-center gap-1 lg:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/></svg><span className="hidden sm:inline">dev & build</span></span>)}
        {tabBtn('check', <span className="flex items-center justify-center gap-1 lg:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg><span className="hidden sm:inline">check</span></span>)}
        {tabBtn('test', <span className="flex items-center justify-center gap-1 lg:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg><span className="hidden sm:inline">test</span></span>)}
        {tabBtn('run', <span className="flex items-center justify-center gap-1 lg:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/></svg><span className="hidden sm:inline">run</span></span>)}
        {tabBtn('pack', <span className="flex items-center justify-center gap-1 lg:gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/></svg><span className="hidden sm:inline">pack</span></span>)}
      </div>

      {/* DEV & BUILD */}
      <div id="section-dev" className="flex flex-col lg:flex-row border-t border-[#2a2a2a]" style={{ minHeight: '493px' }}>
        <div className="lg:shrink-0 px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2a2a2a] bg-[#16171E] w-full lg:w-[719px]">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#6b6375] mb-4">VITE+ DEV & BUILD</p>
            <h3 className="text-[30px] font-normal text-white mb-4">Blazingly fast builds</h3>
            <p className="text-[#B9BABB] text-[16px] font-light leading-relaxed mb-6">Spin up dev servers and create production builds with extreme speed. Stay in the flow and keep CI fast.</p>
            <ul className="space-y-3 text-[16px] font-light">
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Always instant <code className="bg-[#29262F] text-[#AA92F1] px-1.5 py-0.5 rounded">Hot Module Replacement (HMR)</code></span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">40× faster production build than webpack</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Opt-in full-bundle dev mode for large apps</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Huge ecosystem of plugins</span></li>
            </ul>
          </div>
          <p className="text-[#6b6375] w-fit text-[14px] font-mono bg-black px-3 py-2 rounded-md inline-flex items-center gap-1 whitespace-nowrap">
  Powered by&nbsp;
  <span className="text-white inline-flex items-center gap-1">
    <img src="/images/vitelight.svg" alt="" className='size-5'/>&nbsp;Vite&nbsp;<span className='text-[#B9BABB]'>&</span>&nbsp;
    <img src="/images/rolldown.svg" alt="" className='size-5'/>&nbsp;Rolldown
  </span>
</p>
        </div>
        <div className="flex-1 flex items-end justify-center pb-24 min-h-[300px] lg:min-h-0" style={{ backgroundImage: 'url(/images/purple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-[#0e0e10] rounded-sm p-5 font-mono text-[13px] shadow-2xl w-full max-w-[600px] mx-4 lg:mx-0">
            <p className="text-white mb-3">$ vp build</p>
            <p className="text-[#867F8E] mb-0"><span className="text-[#867F8E]">VITE+</span> <span className="text-[#4fc3f7]">building for production</span></p>
            <p className="text-green-400 mb-3"><span className="text-green-400">✓ Transformed</span> <span className="text-white">128 modules</span></p>
            <p className="text-white">dist/index.html <span className="text-[#4fc3f7]">0.42 kB</span></p>
            <p className="text-white">dist/assets/index.css <span className="text-[#4fc3f7]">5.1 kB</span></p>
            <p className="text-white mb-3">dist/assets/index.js <span className="text-[#4fc3f7]">46.2 kB</span></p>
            <p className="text-[#6b7280]">✓ Built in <span className="text-white">421ms</span></p>
          </div>
        </div>
      </div>

      {/* CHECK */}
      <div id="section-check" className="flex flex-col lg:flex-row border-t border-[#2a2a2a]" style={{ minHeight: '493px' }}>
        <div className="lg:shrink-0 px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2a2a2a] bg-[#16171E] w-full lg:w-[719px]">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#6b6375] mb-4">VITE+ CHECK</p>
            <h3 className="text-[30px] font-normal text-white mb-4">Format, lint, and type-check in one pass</h3>
            <p className="text-[#B9BABB] text-[16px] font-light leading-relaxed mb-6">Keep every repo consistent with one command powered by Oxlint, Oxfmt, and <code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">tsgo</code>.</p>
            <ul className="space-y-3 text-[16px] font-light">
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white"><code className="bg-[#2a1a1a] text-[#31F4E9] px-1.5 py-0.5 rounded">Prettier</code> compatible formatting</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">600+ <code className="bg-[#2a1a1a] text-[#31F4E9] px-1.5 py-0.5 rounded">ESLint</code> compatible rules</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Type-aware linting and fast type checks with <code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">tsgo</code></span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white"><code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">vp check --fix</code> auto-fixes where possible</span></li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
          <p className="text-[#6b6375] w-fit text-[14px] font-mono bg-black px-3 py-2 rounded-md inline-flex items-center gap-1 whitespace-nowrap">
  Powered by&nbsp;
  <span className="text-white inline-flex items-center gap-1">
    <img src="/images/oxc.svg" alt="" className='size-5'/>&nbsp;Oxc / Oxlint
  </span>
</p>
          <p className="text-[#6b6375] w-fit text-[14px] font-mono bg-black px-3 py-2 rounded-md inline-flex items-center gap-1 whitespace-nowrap">
  Powered by&nbsp;
  <span className="text-white inline-flex items-center gap-1">
    <img src="/images/oxc.svg" alt="" className='size-5'/>&nbsp;Oxc / Oxfmt
  </span>
</p>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center pt-44 min-h-[300px] lg:min-h-0" style={{ backgroundImage: 'url(/images/lightblue.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-[#0e0e10] rounded-sm p-5 font-mono text-[13px] shadow-2xl w-full max-w-[600px] mx-4 lg:mx-0">
            <p className="text-white mb-3">$ vp check</p>
            <p className="text-white mb-3"><span className="text-[#4fc3f7]">pass:</span> All 42 files are correctly formatted <span className="text-[#6b7280]">(88ms, 16 threads)</span></p>
            <p className="text-white"><span className="text-[#4fc3f7]">pass:</span> Found no warnings, lint errors, or type errors in <span className="text-white">42 files</span><span className="text-[#6b7280]">(184ms, 16 threads)</span></p>
          </div>
        </div>
      </div>

      {/* TEST */}
      <div id="section-test" className="flex flex-col lg:flex-row border-t border-[#2a2a2a]" style={{ minHeight: '493px' }}>
        <div className="lg:shrink-0 px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2a2a2a] bg-[#16171E] w-full lg:w-[719px]">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#6b6375] mb-4">VITE+ TEST</p>
            <h3 className="text-[30px] font-normal text-white mb-4">Testing made simple</h3>
            <p className="text-[#B9BABB] text-[16px] font-light leading-relaxed mb-6">Feature rich test runner that automatically reuses the same resolve and transform config from your application.</p>
            <ul className="space-y-3 text-[16px] font-light">
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white"><code className="bg-[#29262F] text-[#23FF74] px-1.5 py-0.5 rounded">Jest</code> compatible API</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Test isolation by default</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Browser Mode: run unit tests in actual browsers</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Coverage reports, snapshot tests, type tests, visual regression tests...</span></li>
            </ul>
          </div>
                 <p className="text-[#6b6375] w-fit text-[14px] font-mono bg-black px-3 py-2 rounded-md inline-flex items-center gap-1 whitespace-nowrap">
  Powered by&nbsp;
  <span className="text-white inline-flex items-center gap-1">
    <img src="/images/vitest-light.svg" alt="" className='size-5'/>&nbsp;Vitest
  </span>
</p>
        </div>
        <div className="flex-1 flex items-end justify-center pb-32 min-h-[300px] lg:min-h-0" style={{ backgroundImage: 'url(/images/green.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-[#0e0e10] rounded-sm p-5 font-mono text-[13px] shadow-2xl w-full max-w-[600px] mx-4 lg:mx-0">
            <p className="mb-3"><span className="text-green-400">✓ </span><span className="bg-green-400 text-black px-1.5 py-0.5 rounded text-xs font-bold mr-2">unit</span><span className="text-white">packages/compiler-core/__tests__/utils.spec.ts</span> <span className="text-[#6b7280]">(7 tests)</span> <span className="text-[#4fc3f7]">9ms</span></p>
            <p className="text-[#6b7280]">Test Files  <span className="text-green-400">20 passed</span> <span className="text-[#6b7280]">(20)</span></p>
            <p className="text-[#6b7280]">     Tests  <span className="text-green-400">642 passed</span> <span className="text-[#6b7280]">(642)</span></p>
            <p className="text-[#6b7280]">  Start at  <span className="text-white">21:41:06</span></p>
            <p className="text-[#6b7280]">  Duration  <span className="text-white">1.21s</span> (transform 1.04s, setup 96ms, collect 4.71s, tests 514ms)</p>
          </div>
        </div>
      </div>

      {/* RUN */}
      <div id="section-run" className="flex flex-col lg:flex-row border-t border-[#2a2a2a]" style={{ minHeight: '493px' }}>
        <div className="lg:shrink-0 px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2a2a2a] bg-[#16171E] w-full lg:w-[719px]">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#6b6375] mb-4">VITE+ RUN</p>
            <h3 className="text-[30px] font-normal text-white mb-4">Vite Task for monorepos and scripts</h3>
            <p className="text-[#B9BABB] text-[16px] font-light leading-relaxed mb-6">Run built-in commands and <code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">package.json</code> scripts with automated caching and dependency-aware execution.</p>
            <ul className="space-y-3 text-[16px] font-light">
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Automated input tracking for cacheable tasks</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Dependency-aware execution across workspace packages</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Familiar script execution via <code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">vp run</code></span></li>
            </ul>
          </div>

        </div>
        <div className="flex-1 flex items-end justify-center pb-16 min-h-[400px] lg:min-h-0" style={{ backgroundImage: 'url(/images/blue.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <RunSubTabs />
        </div>
      </div>

      {/* PACK */}
      <div id="section-pack" className="flex flex-col lg:flex-row border-t border-[#2a2a2a]" style={{ minHeight: '493px' }}>
        <div className="lg:shrink-0 px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2a2a2a] bg-[#16171E] w-full lg:w-[719px]">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-[#6b6375] mb-4">VITE+ PACK</p>
            <h3 className="text-[30px] font-normal text-white mb-4">Library packaging with best practices baked in</h3>
            <p className="text-[#B9BABB] text-[16px] font-light leading-relaxed mb-6">Package TS and JS libraries for npm or build standalone app binaries with a single <code className="bg-[#1a2a2a] text-[#31F4E9] px-1.5 py-0.5 rounded">vp pack</code> command.</p>
            <ul className="space-y-3 text-[16px] font-light">
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white"><code className="bg-[#2a1a1a] text-[#31F4E9] px-1.5 py-0.5 rounded">DTS</code> generation & bundling</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Automatic package exports generation</span></li>
              <li className="flex items-start gap-2"><img src="/images/tick.png" className="w-7 h-6 shrink-0 mt-0.5" alt="" /><span className="text-white">Standalone app binaries and transform-only unbundled mode</span></li>
            </ul>
          </div>
                 <p className="text-[#6b6375] w-fit text-[14px] font-mono bg-black px-3 py-2 rounded-md inline-flex items-center gap-1 whitespace-nowrap">
  Powered by&nbsp;
  <span className="text-white inline-flex items-center gap-1">
    <img src="/images/rolldown.svg" alt="" className='size-5'/>&nbsp;Rolldown
/
tsdown
  </span>
</p>
        </div>
        <div className="flex-1 flex items-end justify-center pb-32 min-h-[300px] lg:min-h-0" style={{ backgroundImage: 'url(/images/bronze.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-[#0e0e10] rounded-sm p-5 font-mono text-[13px] shadow-2xl w-full max-w-[600px] mx-4 lg:mx-0">
            <p className="text-white mb-3">$ vp pack</p>
            <p className="text-[#6b7280]">CLI Building entry: <span className="text-[#4fc3f7]">src/index.ts</span></p>
            <p className="text-[#6b7280]">CLI Using config: <span className="text-white font-bold">tsdown.config.ts</span></p>
            <p className="text-[#6b7280] mb-3">CLI tsdown <span className="text-white font-bold">0.14.1</span> powered by Rolldown</p>
            <p className="text-[#6b7280]">ESM <span className="text-white font-bold">dist/index.js</span> <span className="text-[#4fc3f7]">4.8 kB</span></p>
            <p className="text-[#6b7280]">DTS <span className="text-white font-bold">dist/index.d.ts</span> <span className="text-[#4fc3f7]">1.2 kB</span></p>
            <p className="text-green-400">✓ <span className="text-[#6b7280]">Pack completed in</span> <span className="text-white font-bold">128ms</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

const RUN_TABS = {
  'Cold Cache': [
    { type: 'white', text: '$ vp run --cache build' },
    { type: 'empty' },
    { type: 'muted', text: '# First run builds the shared library and app' },
    { type: 'white', text: '$ vp pack' },
    { type: 'white', text: '$ vp build' },
    { type: 'empty' },
    { type: 'cyan', text: 'vp run: 0/2 cache hit (0%).' },
  ],
  'Full Replay': [
    { type: 'white', text: '$ vp run --cache build' },
    { type: 'empty' },
    { type: 'muted', text: '# No changes replay both tasks from cache' },
    { type: 'hit', cmd: '$ vp pack', result: 'cache hit, replaying' },
    { type: 'hit', cmd: '$ vp build', result: 'cache hit, replaying' },
    { type: 'empty' },
    { type: 'cyan', text: 'vp run: 2/2 cache hit (100%), 1.24s saved.' },
  ],
  'Partial Replay': [
    { type: 'white', text: '$ vp run --cache build' },
    { type: 'empty' },
    { type: 'muted', text: '# App changes rerun only the app build' },
    { type: 'hit', cmd: '$ vp pack', result: 'cache hit, replaying' },
    { type: 'miss', cmd: '$ vp build', file: 'src/main.ts' },
    { type: 'empty' },
    { type: 'cyan', text: 'vp run: 1/2 cache hit (50%), 528ms saved.' },
  ],
  'Full Rebuild': [
    { type: 'white', text: '$ vp run --cache build' },
    { type: 'empty' },
    { type: 'muted', text: '# Shared API changes rebuild the library and app' },
    { type: 'miss', cmd: '$ vp pack', file: 'src/index.ts' },
    { type: 'miss', cmd: '$ vp build', file: 'src/routes.ts' },
    { type: 'empty' },
    { type: 'cyan', text: 'vp run: 0/2 cache hit (0%).' },
  ],
}

function RunLine({ line, i }) {
  if (!line) return null
  if (line.type === 'empty') return <p key={i} className="h-3" />
  if (line.type === 'white') return <p key={i} className="text-white">{line.text}</p>
  if (line.type === 'muted') return <p key={i} className="text-[#6b7280]">{line.text}</p>
  if (line.type === 'cyan') return <p key={i} className="text-[#4fc3f7]">{line.text}</p>
  if (line.type === 'hit') return <p key={i} className="text-white">{line.cmd} <span className="text-green-400">✓</span> <span className="font-bold">{line.result}</span></p>
  if (line.type === 'miss') return <p key={i} className="text-white">{line.cmd} <span className="text-red-400">✗</span> cache miss: '<span className="font-bold">{line.file}</span>' modified, executing</p>
  return null
}

function RunSubTabs() {
  const [active, setActive] = useState('Cold Cache')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    const lines = RUN_TABS[active]
    let i = 0
    const interval = setInterval(() => {
      i++
      setCount(i)
      if (i >= lines.length) clearInterval(interval)
    }, 130)
    return () => clearInterval(interval)
  }, [active])

  const lines = RUN_TABS[active]

  return (
    <div className="w-full max-w-[600px] mx-4 lg:mx-0 mb-4">
      <div className="bg-[#0e0e10] rounded-sm p-5 font-mono text-[13px] shadow-2xl mb-3" style={{ minHeight: '180px' }}>
        {lines.slice(0, count).map((line, i) => <RunLine key={i} line={line} i={i} />)}
        <span className="inline-block w-2 h-3 bg-white animate-pulse ml-0.5" />
      </div>
      <div className="flex gap-1 justify-center bg-black w-fit mx-auto px-1 py-1">
        {['Cold Cache', 'Full Replay', 'Partial Replay', 'Full Rebuild'].map(st => (
          <button key={st} onClick={() => setActive(st)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${active === st ? 'bg-white text-[#08060d] border-white font-medium' : 'text-[#6b7280] hover:text-white'}`}>
            {st}
          </button>
        ))}
      </div>
    </div>
  )
}
