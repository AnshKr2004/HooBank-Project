import React from 'react'
import Hoobar from "../assets/Group 481747.png"

export default function navbar() {
  return (
    <div className=' text-white bg-[#00040F] w-full h-[60px] '>
        <div className='flex justify-between pt-7 px-[135px]'>
            <div className='flex text-[18px] gap-[4px]'>
                <img src={Hoobar}/>
                <p>Hoo<span className='text-[#5CE1E6]'>Bank</span></p>
            </div>
            <div className=' inline-flex gap-14'>
                <div>
                    Home
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Features
                </div>
                <div>
                    Solution
                </div>
            </div>
        </div>
    </div>
  )
}
