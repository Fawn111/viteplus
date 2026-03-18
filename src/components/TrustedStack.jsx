const stats = [
  { label: '/images/vite.png',   downloads: '69m+', stars: '78.7k' },
  { label: '/images/vitest.png', downloads: '35m+', stars: '16.1k' },
  { label: '/images/oxc.png',    downloads: '5m+',  stars: '19.8k' },
]

export default function TrustedStack() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-[#e5e4e7] max-w-[1426px] mx-auto w-full">
      {/* Left */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#e5e4e7]">
        <h2 className="text-[25px] font-normal text-[#08060d] mb-3">A trusted stack to standardize on</h2>
        <p className="text-[#867F8E] text-[18px] font-light leading-relaxed max-w-sm">
          Vite+ is built on established open source industry standards, and maintained by the same experts behind these projects.
        </p>

        <div className="mt-10 flex flex-col">
          {stats.map(({ label, downloads, stars }, i) => (
            <div key={label}>
              <div className="flex items-center py-1">
                {/* placeholder icon*/}
                <div className="w-24 h-24 rounded-xl flex items-center justify-center shrink-0">
                 <img src={label} alt="" />
                </div>

                {/* divider */}
                <div className="w-px h-10 bg-[#e5e4e7] mx-6 shrink-0" />

                {/* downloads */}
                <div className="flex-1">
                  <p className="text-[#08060d] text-xl font-medium">{downloads}</p>
                  <p className="text-[#867F8E] text-[16px] mt-0.5">Weekly npm downloads</p>
                </div>

                {/* divider */}
                <div className="w-px h-10 bg-[#e5e4e7] mx-6 shrink-0" />

                {/* stars */}
                <div className="w-28">
                  <p className="text-[#08060d] text-xl font-medium">{stars}</p>
                  <p className="text-[#867F8E] text-sm mt-0.5">GitHub stars</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12">
        <h2 className="text-[25px] font-normal text-[#08060d] mb-3">Stay fast at scale</h2>
        <p className="text-[#867F8E] text-[18px] leading-relaxed max-w-md">
          With low-level components written in Rust, Vite+ delivers enterprise-scale performance: up to{' '}
          <span className="text-[#08060d]">40× faster builds</span> than webpack,{' '}
          <span className="text-[#08060d]">~50× to ~100× faster linting</span> than ESLint, and{' '}
          <span className="text-[#08060d]">up to 30× faster formatting</span> than Prettier.
        </p>

        {/* Diagram placeholder */}
        <div className="relative mt-10 flex items-end gap-8">
          <img src="/images/stayfast.png" alt="" />

        </div>
      </div>
    </section>
  )
}
