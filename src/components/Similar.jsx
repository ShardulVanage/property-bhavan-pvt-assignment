import React from 'react';
import locationIconBlack from '../assets/button-photos/Frame.png';
import locationIconWhite from '../assets/button-photos/Vector (3).png';
import cartPhoto from '../assets/279393892_760706071604023_4469825481564459161_n (1) 1.png'

const SimiliarProparties = () => {
    return (
        <div className='mt-8 mx-4 md:mx-16 mb-40'>
            <div className='md:w-2/3 lg:w-3/5 py-4 pr-96'>
                    <h1 className='text-4xl mt-4 font-semibold text-primary text-purple-700'>Similar Properties</h1>

            </div>
            <div>
                
                <div className='flex flex-wrap gap-5 justify-center '>
                    <div className="card w-[418.06px] h-[557.69px] bg-base-100 shadow-xl border-2 border-gray-200">
                        <div className='px-4 pt-4 mx-auto'>
                            <img className='rounded-xl' src={cartPhoto} alt="Shoes" />
                        </div>
                        <div className="card-body flex flex-col space-y-4">
                            <h2 className="card-title text-2xl">
                            2BHK Appartment for Sale
                            </h2>
                            <div className='grid grid-cols-2 justify-between items-center w-full'>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={locationIconBlack} alt="" />
                                    <p>Behala</p>
                                </div>
                                <p>₹ 15,000</p>
                            </div>
                            <div className="card-actions justify-center  flex-col space-y-2">
                            <button className="btn hover:bg-primary py-3 font-semibold text-semibold text-xl w-[352.67px] bg-secondary text-white rounded-lg photo-shadow normal-case bg-purple-600">Contact Now</button>
                            <button className="btn hover:bg-primary py-3 font-semibold bg-white w-[352.67px] text-xl rounded-lg text-black border border-gray-200 photo-shadow normal-case">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary card w-[418.06px] h-[557.69px] shadow-xl border-2 border-gray-200  bg-indigo-800">
                        <div className='px-4 pt-4 mx-auto'>
                            <img className='rounded-xl' src={cartPhoto} alt="Shoes" />
                        </div>
                        <div className="card-body flex flex-col space-y-4 ">
                            <h2 className="card-title text-2xl text-white">
                            2BHK Appartment for Sale
                            </h2>
                            <div className='grid grid-cols-2 justify-between items-center w-full'>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={locationIconWhite} alt="" />
                                    <p className='text-white'>Behala</p>
                                </div>
                                <p className='text-white'>₹ 15,000</p>
                            </div>
                            <div className="card-actions justify-center flex-col space-y-2 ">
                            <button className="btn hover:bg-primary py-3 font-semibold text-semibold text-xl w-[352.67px] bg-secondary text-white rounded-lg photo-shadow normal-case bg-purple-600 ">Contact Now</button>
                            <button className="btn hover:bg-primary py-3 font-semibold bg-white w-[352.67px] text-xl rounded-lg text-black border border-gray-200 photo-shadow normal-case">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#9277FB] card w-[418.06px] h-[557.69px] shadow-xl border-2 border-gray-200">
                        <div className='px-4 pt-4 mx-auto'>
                            <img src={cartPhoto} alt="Shoes" />
                        </div>
                        <div className="card-body flex flex-col space-y-4">
                            <h2 className="card-title text-2xl text-white">
                            2BHK Appartment for Sale
                            </h2>
                            <div className='grid grid-cols-2 justify-between items-center w-full'>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={locationIconWhite} alt="" />
                                    <p className='text-white'>Behala</p>
                                </div>
                                <p className='text-white'>₹ 15,000</p>
                            </div>
                            <div className="card-actions justify-center  flex-col space-y-2">
                            <button className="btn hover:bg-primary py-3 font-semibold text-semibold text-xl w-[352.67px] bg-secondary  text-white rounded-lg photo-shadow normal-case bg-purple-600">Contact Now</button>
                            <button className="btn hover:bg-primary py-3 font-semibold bg-white w-[352.67px] text-xl rounded-lg text-black border border-gray-200 photo-shadow normal-case">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 mt-16 '>
                    <div className='w-3 h-3 rounded-full bg-purple-600'></div>
                    <div className='w-3 h-3 rounded-full bg-purple-600'></div>
                    <div className='w-3 h-3 rounded-full bg-purple-600'></div>
                </div>
            </div>
        </div>
    );
};

export default SimiliarProparties;