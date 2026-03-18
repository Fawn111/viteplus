import { useState, useEffect } from 'react'
import viteLogo from '/images/viteplus.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true) }
      if (e.key === 'Escape') { setSearchOpen(false); setMenuOpen(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <nav className="flex items-center justify-between px-6 h-16 lg:h-20 py-3 border-b border-[#e5e4e7] text-sm relative">
      <div className="flex items-center gap-6 lg:gap-10 text-[16px]">
        <a href="/" className="flex items-center font-semibold text-[#08060d] no-underline">
          <img src={viteLogo} alt="Vite" width="100" height="100" />
        </a>
        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-black no-underline hover:text-[#08060d]">Guide</a>
          <a href="#" className="text-black no-underline hover:text-[#08060d]">Config</a>
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span className="text-black cursor-pointer hover:text-[#08060d] flex items-center gap-2">
              Resources
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            {open && (
              <div className="absolute top-6 left-0 z-20 bg-white rounded-2xl shadow-xl border border-[#e5e4e7] py-3 w-64">
                {[
                  { label: 'GitHub', href: 'https://github.com/vitejs/vite' },
                  { label: 'Releases', href: '#' },
                  { label: 'Announcement', href: '#' },
                  { label: 'Contributing', href: '#' },
                ].map(item => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-3 text-[#08060d] text-[16px] no-underline hover:bg-[#f4f3ec] transition-colors"
                    onClick={() => setOpen(false)}>
                    {item.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop right */}
      <div className="hidden lg:flex items-center gap-3">
        <button onClick={() => setSearchOpen(true)} className="flex items-center gap-2 px-2.5 py-1 border border-[#e5e4e7] rounded-md bg-[#f4f3ec] text-[#6b6375] text-[13px] cursor-pointer">
          <span>Search</span>
          <kbd className="text-[11px] opacity-60">⌘K</kbd>
        </button>
        <a href="https://github.com/vitejs/vite" target="_blank" aria-label="GitHub" className="text-[#6b6375] hover:text-[#08060d]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvK3F4XoNOWGm7Kv0n4EF40x2RM-KZT2mQA&s" alt="" className='w-6 h-6' />
        </a>
        <a href="https://x.com/vite_js" target="_blank" aria-label="X" className="text-[#6b6375] hover:text-[#08060d]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmbJw7P4VlHc7nAYZN-VMpv0CnVll9TalEg&s" alt="" className='w-5 h-5' />
        </a>
        <a href="https://chat.vite.dev/" target="_blank" aria-label="Discord" className="text-[#6b6375] hover:text-[#08060d]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N8BpwCvZ9JXrtNCSjBL_5RZZbs-UM9ybhA&s" alt="" className='w-5 h-5' />
        </a>
        <a href="https://bsky.app/profile/vite.dev" target="_blank" aria-label="Bluesky" className="text-[#6b6375] hover:text-[#08060d]">
          <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt="" className='w-5 h-5' />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="lg:hidden p-2 text-[#08060d]" onClick={() => setMenuOpen(o => !o)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {menuOpen ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e5e4e7] z-30 px-6 py-4 flex flex-col gap-4">
          <a href="#" className="text-black text-[16px]">Guide</a>
          <a href="#" className="text-black text-[16px]">Config</a>
          <a href="#" className="text-black text-[16px]">Resources</a>
          <button onClick={() => { setSearchOpen(true); setMenuOpen(false) }} className="flex items-center gap-2 px-2.5 py-1.5 border border-[#e5e4e7] rounded-md bg-[#f4f3ec] text-[#6b6375] text-[13px] w-fit">
            Search <kbd className="text-[11px] opacity-60">⌘K</kbd>
          </button>
        </div>
      )}

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setSearchOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute bg-[#f4f3ec] rounded-xl shadow-2xl overflow-hidden w-[calc(100%-2rem)] lg:w-[896px]"
            style={{ left: 'max(1rem, min(390px, calc(50% - 448px)))', top: '64px' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e5e4e7]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b6375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input autoFocus type="text" placeholder="Search" className="flex-1 outline-none text-[15px] text-[#08060d] placeholder-[#9ca3af] bg-transparent" />
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2.5 text-[12px] text-[#9ca3af]">
              <span className="flex items-center gap-1"><kbd className="border border-[#e5e4e7] rounded px-1.5 py-0.5 text-[11px]">↑</kbd><kbd className="border border-[#e5e4e7] rounded px-1.5 py-0.5 text-[11px]">↓</kbd> to navigate</span>
              <span className="flex items-center gap-1"><kbd className="border border-[#e5e4e7] rounded px-1.5 py-0.5 text-[11px]">↵</kbd> to select</span>
              <span className="flex items-center gap-1"><kbd className="border border-[#e5e4e7] rounded px-1.5 py-0.5 text-[11px]">esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
