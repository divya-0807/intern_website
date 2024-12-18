import React from 'react'
import { Button } from '../ui/button'
import { Bold } from 'lucide-react'


function Header() {
  return (
    <div
      className="h-[70px] w-[1400px] sticky top-8 left-14 p-3 px-5 flex justify-between border border-gray-300 rounded-full items-center"
      style={{
        boxShadow: '4px 2px 10px gray',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        zIndex: 10, 
      }}
    >
      
      <strong><h1 className="font-gideon font-semibold text-[30px] text-center text-[#3605CD] " style={ {fontWeight: Bold}}>FairMD</h1></strong>
      <Button className="bg-[#521CF9] text-[20px]  font-sans text-white rounded-full hover:bg-white hover:text-[#521CF9]">Home</Button>
    </div>
  )
}

export default Header
