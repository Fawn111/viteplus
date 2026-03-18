export default function Features() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-[#e5e4e7] max-w-[1426px] mx-auto w-full">
      {/* Col 1 */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#e5e4e7] flex flex-col justify-between">
        <div>
          <h3 className="text-[24px] font-normal text-[#08060d] mb-3 leading-snug">Manages your runtime<br />and package manager</h3>
          <p className="text-[#867F8E] text-[18px] font-light leading-relaxed">Use <code className="bg-white border border-gray-200 text-black px-1.5 py-0.5 rounded text-[15px]">node</code> automatically, with the right package manager selected for every project.</p>
        </div>
        <div className="flex items-center gap-3 mt-8">
          {/* placeholder icon */}
          <img src="/images/pnpm.png" alt="pnpm" />
          {['pnpm', 'npm', 'yarn'].map(t => (
            <span key={t} className="text-black text-[16px] font-mono border border-[#e5e4e7] px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>

      {/* Col 2 */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#e5e4e7] flex flex-col justify-between">
        <div>
          <h3 className="text-[24px] font-normal text-[#08060d] mb-3">Simplifies everyday development</h3>
          <p className="text-[#867F8E] text-[18px] font-light leading-relaxed">One configuration file and one consistent flow of commands across your whole stack.</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {['vp env', 'vp install', 'vp dev', 'vp check', 'vp build', 'vp run'].map(cmd => (
            <span key={cmd} className="text-[#08060d] text-[14px] tracking-wide font-mono border border-[#e5e4e7] px-2.5 py-1 rounded-md bg-white">{cmd}</span>
          ))}
        </div>
      </div>

      {/* Col 3 */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 flex flex-col justify-between">
        <div>
          <h3 className="text-[24px] font-normal text-[#08060d] mb-3">Powering your favorite frameworks</h3>
          <p className="text-[#867F8E] text-[18px] leading-relaxed font-light">Supports every framework built on Vite.</p>
        </div>
        <div className="flex items-center gap-3 mt-8">
          {[
            { name: 'react', src: '/images/react.png' },
            { name: 'vue', src: '/images/vue.png' },
            { name: 'svelte', src: '/images/svelete.png' },
            { name: 'solid', src: '/images/solid.png' },
          ].map(({ name, src }) => (
            <div key={name} className="relative group">
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-white border border-[#e5e4e7] text-[#08060d] text-sm font-mono px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {name}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#e5e4e7]" />
              </div>
              <img src={src} alt={name} className="size-10 bg-[#F9F8F6] p-2 rounded-xl" />
            </div>
          ))}
          <span className="text-black text-md ml-1">+ 20 more</span>
        </div>
      </div>
    </section>
  )
}
