import React from 'react'
import { Button } from '../ui/button'
import { MISSION_PARA1, MISSION_PARA2, MISSION_PARA3 } from '@/utils/constant'

function Mission() {
  return (
    <div className='min-h-screen flex justify-center items-center mx-16 mt-16 font-sans'>
        <div className='flex justify-between max-w-[2100px] w-[2000px]p-8'>
            <img src="https://www.fairmd.ai/web/image/330-fd36a24d/1719257532305.webp" alt="" />
            <div className='ml-5 mt-4 text-justify p-7 pl-16'>
                <h5>OUR MISSION</h5>
                <h1 className='font-extrabold text-[40px] py-3'>We are driving fairness in AI-powered <span className='text-[#EA41C8]'>healthcare</span></h1>
                <p className='text-[17px] py-3 pb-12'>{MISSION_PARA1}</p>
                <h4 className='font-bold'>Collaborate with Us</h4>
                <p className='text-[17px] py-1 pb-8'>{MISSION_PARA2}</p>
                <h4 className='font-bold '>Join our Community</h4>
                <p className='text-[17px] py-1 pb-16'>{MISSION_PARA3}</p>
                <Button className='py-4 rounded-full' >Discover more</Button>
            </div>
        </div>
    </div>
  )
}

export default Mission
