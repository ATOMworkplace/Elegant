import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    const heroImages = [
        assets.hero_img,
        assets.hero_img1,
        assets.hero_img2,  
        assets.hero_img3,  
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);  

        return () => clearInterval(interval);  
    }, [heroImages.length]);

    return (
        <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden relative'>
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-1/2 relative h-50 sm:h-100'>
                {heroImages.map((image, index) => (
                    <img
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        src={image}
                        alt={`Hero image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;