export default function Fullstack() {
  return (
    <section className="bg-white border-[#e5e4e7]">
      {/* Header */}
      <div className="px-16 py-16 border-b border-[#e5e4e7]">
        <h2 className="text-[42px] font-normal text-[#08060d] mb-3 leading-tight">Fullstack? No problem.</h2>
        <p className="text-[#8c8695] text-[18px] font-light leading-relaxed">
          Vite+ can be the foundation of any type of web apps<br />
          - from SPAs to fullstack meta frameworks.
        </p>
      </div>

      {/* Two columns */}
      <div className="flex flex-col lg:flex-row border-b border-[#e5e4e7]" style={{ minHeight: '480px' }}>

        {/* Left: Meta Frameworks */}
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#e5e4e7] p-10 flex flex-col bg-[#f9f8f5]">
          <p className="text-[#08060d] text-[19px] font-normal mb-1">Meta Frameworks</p>
          <p className="text-[#8c8695] text-[18px] leading-relaxed mb-8 font-light">
            You can use meta-frameworks<br />that ship as Vite plugins with Vite+
          </p>
    <img src="/images/metaframe.png" alt="" />
        </div>

        {/* Right: Platform Agnostic */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="p-10 border-b border-[#e5e4e7]">
            <p className="text-[#08060d] text-[19px] font-normal mb-1">Platform Agnostic</p>
            <p className="text-[#8c8695] text-[18px] leading-relaxed">
              First-class support on Vercel,<br />Netlify, Cloudflare & more
            </p>
          </div>

          {/* Platform logos */}
          <div className="grid grid-cols-2 lg:flex border-b border-[#e5e4e7]">
            {[
              { src: '/images/vercel.svg', alt: 'Vercel', label: '▲ Vercel' },
              { src: '/images/netlify.svg', alt: 'Netlify', label: '—Netlify—' },
              { src: '/images/cloudfare.svg', alt: 'Cloudflare', label: 'Cloudflare' },
              { src: '/images/render.svg', alt: 'Render', label: '✦ Render' },
            ].map((p, i) => (
              <div key={i} className={`flex-1 flex items-center justify-center py-4 ${i < 3 ? 'border-r border-[#e5e4e7]' : ''}`}>
                <img src={p.src} alt={p.alt} className="h-5 object-contain" />
              </div>
            ))}
          </div>

          {/* Deploy card */}
          <div className="flex-1 relative overflow-hidden min-h-[320px]" style={{ backgroundImage: 'url(/images/blue.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 flex flex-col justify-start pt-6 px-5">
            {/* Header bar */}
            <div className="flex items-center gap-3 px-5 py-1 bg-opacity-30">
            <img src="/images/depoly.png" alt="" className="size-12"/>
              <span className="text-white text-[20px] font-medium">Deploy anywhere by pairing with Nitro</span>
            </div>

            {/* Code block */}
            <div className="mx-5 mt-4 p-5 font-mono text-[12px]">
      <img src="/images/code.svg" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>

<div className="ticks"></div>
      {/* Isometric diagram section */}
      <div className=" w-full overflow-hidden bg-white" style={{ height: '600px' }}>
<img src="/images/download.png" alt="" />
      
      </div>
    </section>
  )
}
