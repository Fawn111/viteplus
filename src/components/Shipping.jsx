const securityItems = [
  { text: 'Trusted Publisher with provenance and no tokens to leak', active: false },
  { text: 'Mandatory security reviews, 2FA & signed commits', active: true },
  { text: 'All dependencies scanned, audited & pinned', active: false },
]

const engineeringSteps = [
  { label: 'Project setup &\nconfiguration' },
  { label: 'CI build\ntime' },
  { label: 'Dependency upgrade &\nmaintenance' },
]

export default function Shipping() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-[#e5e4e7] max-w-[1426px] mx-auto w-full">
      {/* Left */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-[#e5e4e7]">
        <h2 className="text-[28px] font-normal text-[#08060d] mb-4">Focus on shipping, not tooling</h2>
        <ul className="space-y-2 mb-10">
          {[
            'Stop wasting time on tooling maintenance',
            'Improve cross-team developer mobility',
            'Standardize best practices for humans and AI-assisted workflows',
          ].map(item => (
            <li key={item} className="flex items-center gap-2 text-[#867F8E] font-light text-[18px]">
              <span className=" w-1.5 h-1.5 rounded-full bg-[#873BFF] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div>
       <img src="/images/focus.gif" alt="" />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12">
        <h2 className="text-[28px] font-normal text-[#08060d] mb-4">Supply chain security</h2>
        <p className="text-[#867F8E] text-[18px] font-light leading-relaxed max-w-xs mb-10">
          Vite+ development follows rigorous security practices, and we vet its dependencies across the unified toolchain.
        </p>

        <div>
   <img src="/images/supplychain.png" alt="" />
        </div>
      </div>
    </section>
  )
}
