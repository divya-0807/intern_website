import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='mt-9'>
      
      <div className="relative">
        
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" preserveAspectRatio="none" viewBox="0 0 1440 560" className="absolute top-5 mx-[5%] w-[90vw] h-full z-0 opacity-50">
          <g mask="url(&quot;#SvgjsMask1104&quot;)" fill="none">
            <path d="M 0,27 C 96,57.4 288,184.4 480,179 C 672,173.6 768,1.8 960,0 C 1152,-1.8 1344,136 1440,170L1440 560L0 560z" fill="rgba(58, 0, 233, 0.38)"></path>
            <path d="M 0,351 C 57.6,320.8 172.8,212.2 288,200 C 403.2,187.8 460.8,275.4 576,290 C 691.2,304.6 748.8,259.8 864,273 C 979.2,286.2 1036.8,367.6 1152,356 C 1267.2,344.4 1382.4,243.2 1440,215L1440 560L0 560z" fill="rgba(194, 178, 247, 0.74)"></path>
            <path d="M 0,448 C 96,466.4 288,551 480,540 C 672,529 768,395.8 960,393 C 1152,390.2 1344,499.4 1440,526L1440 560L0 560z" fill="rgba(159, 131, 241, 0.46)"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1104">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>

        
        <div className='flex items-center mx-56 gap-9 flex-col relative z-10'>
          <h1 className='font-extrabold text-[60px] text-[#3605CD] text-center mt-16 font-sans'>
            <span className='font-gideon text-black'
            style={{
              fontWeight: '800', // Use a heavier weight
            }}
            >
              Responsible AI for
            </span> <br /> Healthcare
          </h1>
          <p className='text-xl text-black text-center font-sans'>
            Ensuring <b>Fairness</b>, <b>Equity</b>, and <b>Compliance</b> in Medical AI Models.
          </p>
          <Button className='rounded-full font-sans'>Learn More</Button>
        </div>
      </div>

      
      <div className="mt-12 flex justify-center relative z-0">
        <img
          src="https://www.fairmd.ai/web/image/379-0de0d5fa/TimelineCycle.webp" 
          alt="Timeline Cycle"
          className="w-full max-w-[1200px] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero
