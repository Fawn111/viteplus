export default function Footer() {
  return (
    <footer className="bg-[#16171E] w-full">

      {/* Free & open source */}
      <div className="px-6 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-[#2a2a2a]">
        <div>
          <h2 className="text-white text-[28px] lg:text-[40px] font-normal mb-3">Free & open source</h2>
          <p className="text-[#a6a3aa] text-[16px] lg:text-[18px] font-light leading-relaxed mb-6">
            Vite+ is free and open source, made possible by a full-<br />
            time team and passionate open-source contributors.
          </p>
          <button className="border border-[#4a4a4a] hover:bg-white hover:text-black hover:scale-105 text-white text-[14px] px-5 py-2 rounded-lg hover:border-white transition-colors">
            Contribute
          </button>
        </div>
        <div className="flex items-center gap-8">
          <img src="/images/void.png" alt="Void" className="h-36 object-contain" />
        </div>
      </div>

      {/* CTA banner */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center py-20 text-center"
        style={{ backgroundImage: 'url(/images/bgbluelast.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-white text-[28px] lg:text-[40px] font-medium leading-tight mb-6">
          Take your team's productivity<br />to the next level with Vite+
        </h2>
        <button className="bg-white text-[#08060d] text-[15px] font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Get started
        </button>
      </div>

      {/* Links */}
      <div className="px-6 lg:px-16 py-10 lg:py-12 flex sm:flex-row justify-between gap-8 border-t border-[#2a2a2a]">
        <div>
          <p className="text-[#6b6375] text-[14px] tracking-widest uppercase mb-4 font-mono">COMPANY</p>
          <ul className="space-y-4">
            {['VoidZero', 'Vite', 'Vitest', 'Rolldown', 'Oxc'].map(l => (
              <li key={l}><a href="#" className="text-white font-light text-[14px] hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#6b6375] text-[11px] tracking-widest uppercase mb-4">SOCIAL</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-2 text-white text-[14px] hover:text-white transition-colors">
              <img src="https://img.icons8.com/ios_filled/512/FFFFFF/github.png" alt="" className="h-4 w-4"/>
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-white text-[14px] hover:text-white transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/250px-X_logo_2023_%28white%29.png" alt="" className="h-4 w-4" />
                X.com
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-white text-[14px] hover:text-white transition-colors">
<img src="https://static.vecteezy.com/system/resources/thumbnails/065/386/541/small/discord-white-icon-logo-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" alt="" className="w-4 h-4"/>
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-white text-[14px] hover:text-white transition-colors">
<img src="https://img.icons8.com/androidL/512/FFFFFF/bluesky.png" alt="" className="h-4 w-4"/>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 lg:px-16 py-5 border-t border-[#2a2a2a]">
        <p className="text-[#6b6375] text-[12px]">© 2026 VoidZero Inc. All Rights Reserved.</p>
      </div>

    </footer>
  )
}
