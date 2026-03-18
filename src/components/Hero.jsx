import heroImg from '/images/section1logo.svg'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-12 lg:py-16 px-5 text-center max-w-[1426px] mx-auto w-full">
      <div className='-mb-5'>
          <img src={heroImg} className='h-10 w-10' />
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#08060d] mt-0 mb-2 leading-tight">
          <span className="bg-gradient-to-r from-[#16171E] to-[#6254FE] bg-clip-text text-transparent">The Unified</span><br />
          <span className="bg-gradient-to-r from-[#16171E] to-[#6254FE] bg-clip-text text-transparent">Toolchain for the Web</span>
        </h1>
        <p className="text-[#6b6375] text-sm lg:text-base">Manage your runtime, package manager, and frontend stack with one tool.</p>
        <p className="text-sm text-[#6b6375] opacity-60 mt-3">Free and open source under the MIT license.</p>
      </div>
      <div className="flex items-center gap-3 flex-wrap mt-4 justify-center">
        <div className="relative">
          <img src="/images/button2.png" className="w-36 mt-1 hover:scale-110" />
        </div>
        <a href="#" className="inline-flex items-center px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg border border-[#e5e4e7] text-[#08060d] text-[14px] lg:text-[16px] no-underline hover:shadow-md transition-shadow">
          Read the Announcement
        </a>
      </div>
    </section>
  )
}
