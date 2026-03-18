import { useState } from 'react'

function CodeBlock({ label, code }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#0e0e10] rounded-xl px-5 py-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#6b6375] text-[11px] font-mono tracking-widest uppercase">{label}</span>
        <button onClick={copy} className="flex items-center gap-1.5 text-[#867F8E] text-[14px] hover:text-white transition-colors border rounded-lg border-[#4e4e52] p-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="text-white font-mono text-sm text-start">{code}</p>
    </div>
  )
}

export default function Install() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-[#e5e4e7] max-w-[1426px] mx-auto w-full">
      {/* Left */}
      <div className="px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r text-start border-[#e5e4e7] lg:pr-52">
        <p className="text-[11px] tracking-widest uppercase text-[#867F8E] mb-3">Getting Started</p>
        <h2 className="text-2xl lg:text-3xl text-[#08060d] mb-4">Install vp globally</h2>
        <p className="text-[#867F8E] text-[16px] lg:text-[18px] font-light leading-relaxed">
          Install Vite+ once, open a new terminal session, <br/> then run <code className="bg-white text-[#08060d] border border-gray-200 px-1.5 py-0.5 rounded text-[16px]">vp help</code>.
        </p>
        <p className="text-[#867F8E] text-sm mt-3">
          For CI, use <code className="bg-white border-b border-gray-300 text-[#08060d] px-1.5 py-0.5 rounded text-[13px]">setup-vp</code>.
        </p>
      </div>
      {/* Right */}
      <div className="flex-1 px-6 lg:px-10 py-10 lg:py-12 flex flex-col gap-4">
        <CodeBlock label="MacOS / Linux" code="curl -fsSL https://vite.plus | bash" />
        <CodeBlock label="Windows (PowerShell)" code="irm https://vite.plus/ps1 | iex" />
      </div>
    </section>
  )
}
