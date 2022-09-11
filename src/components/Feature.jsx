import React from 'react';
import CheckIcon from '../assets/button-photos/check-circle.png'


const Features = () => {
    return (
        <div className='mt-8 mx-4 md:mx-80'>
            <div className='md:w-2/3 lg:w-3/5 item-left pr-96 py-4'>
                    <h1 className='text-4xl mt-4 font-semibold text-primary text-purple-700'>Reatures & Amenities</h1>
                </div>
            
            <div>
                
                <div className='flex gap-20 justify-start mt-4 ml-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>CCTV</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>Security</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <img src={CheckIcon} alt="" />
                        <p>Life</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;