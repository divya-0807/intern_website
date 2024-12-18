import React from 'react'
import { Button } from '../ui/button'
import { CONTACT_US } from '@/utils/constant'
import { CONTACT_DETAILS } from '@/utils/constant'
import {  FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function ContactUs() {
  return (
    <div className='font-sans'>
        <div className='mb-28 '>
          <div className='flex flex-col items-center justify-evenly w-[90%] ml-[5%] h-[230px] bg-[#3605CD] text-white p-5 rounded-b-md font-sans'>
        <h1 className='font-extrabold text-[35px] mb-7 '>Join Us in Transforming Healthcare</h1>
        <p className='text-[18px]'>Together, we can create a more equitable healthcare system that leverages the power of ethical AI to eliminate biases, improve patient outcomes, and build lasting trust in technology-driven care.</p>
        <Button className='bg-white text-black hover:bg-white  hover:text-black rounded-full'>Contact Us</Button>
          </div>
          <div className='mt-28 flex justify-evenly w-[90%] ml-[10px] text-justify'>
            <div className='w-[500px]'>
              <h2 className='font-sans text-[20px]'>
              <span className='font-semibold text-[40px]'>Developed</span> for Healthcare Innovators
              </h2>
              <p className='font-sans text-[16px]'>{CONTACT_US}</p>
            </div>

            <div className='mt-20 flex flex-row w-[600px] mr-7 justify-between'>
                <div className=' w-auto break-words max-w-[250px] '>
                  <h2 className='font-semibold'>{CONTACT_DETAILS.title}</h2>
                  <p className='text-[15px]'>{CONTACT_DETAILS.address}</p>
                </div>

        
                <div className='w-[250px]'>
                  <div className="flex items-center mb-2">
                  {CONTACT_DETAILS.phoneno.icon}
                  <span className="ml-2">{CONTACT_DETAILS.phoneno.text}</span>
                  </div>
                  <div className="flex items-center mb-3">
                  {CONTACT_DETAILS.mail.icon}
                  <span className="ml-2">{CONTACT_DETAILS.mail.text}</span>
                  </div>
                  <div className='flex items-center ml-4 space-x-4'>
                    <a href="#" aria-label="Twitter"><FaXTwitter className='text-3xl text-black' /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram className='text-3xl text-pink-700 hover:text-[#7A1743]' /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedinIn className='text-3xl text-[#0270AD] hover:text-[#00344F]' /></a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <p className='m-8 mb-10'>Copyright © 2024 FairMD - All Rights Reserved</p>
    </div>
  )
}

export default ContactUs
