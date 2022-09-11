import React from 'react';

const Overview = () => {
    return (
        <div className='mt-8 mx-4 md:mx-16 sm:mx-0 '>
            <div>
                <div>
                    <ul className='flex flex-wrap justify-center items-center gap-6 lg:gap-20'>
                        <li><p className='cursor-pointer text-2xl underline underline-offset-8 text-purple-700 underline-offset-5'>Overview</p></li>
                        <li><p className='cursor-pointer text-2xl  hover:text-purple-700'>Details</p></li>
                        <li><p className='cursor-pointer text-2xl  hover:text-purple-700'>Features & Amenities</p></li>
                        <li><p className='cursor-pointer text-2xl  hover:text-purple-700'>Nearby</p></li>
                    </ul>
                </div>
                <div className='md:w-2/3 lg:w-3/5 item-left pr-80 py-4 '>
                    <h1 className='text-4xl mt-4 font-semibold text-primary text-purple-700'>Overview</h1>
                </div>
                <div className='sm:text-left  '>
                    <p className='mt-2 text-left py-4 px-72 text-sm'>Poperty taxes are charged by local government entities, such as KMC, and are due by the owner of the property. The amount of KMC property tax that must be paid may vary. Thus, it depends on the location and a number of other criteria. KMC approved the new Unit Area Assessment (UAA) mechanism for calculating property taxes in March 2017</p>

                </div>
            </div>
        </div>
    );
};

export default Overview;