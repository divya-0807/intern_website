import React from 'react'

import { FIGURE_LIST } from '@/utils/constant';

function Figures() {
  return (
    <div className='mt-8 font-sans'>
        <div className='flex flex-col items-center p-3'>
            <div className='flex w-full justify-evenly '>
                <div className='text-center'>
                    <h3 className=' text-[60px]' >45+</h3>
                    <p className='text-[20px]'> Ethical AI Implementations</p>
                </div>
                <div className='text-center'>
                    <h3 className=' text-[60px]'>87%</h3>
                    <p  className='text-[20px]'>Healthcare Leaders Concerned About Data Bias</p>
                </div>
                <div className='text-center'>
                    <h3 className=' text-[60px]'>£2.5</h3>
                    <p className='text-[20px]'>Billion  Projected UK AI Healthcare M</p>
                </div>
            </div>
            <div>
                <h2 className='text-[18px] font-bold mt-16'>Empower Ethical AI with Our Solutions</h2>
            </div>
        </div>
        <div>
            <h1 className='text-center font-bold mb-10'>Components to Drive Fairness in <span>Healthcare AI</span></h1>
            <div className='grid grid-cols-2 gap-9 m-12'> {/* 2x2 grid layout */}
            {FIGURE_LIST.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-[100px] h-[100px] bg-[#3605CD] flex justify-center items-center rounded-md">
                        {item.icon}
                    </div>
                    <h2 className="mt-3 font-semibold text-[26px] font-sans">{item.title}</h2>
                    <p className="text-[18px] font-sans text-center">{item.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Figures



