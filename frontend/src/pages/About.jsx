import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='text-justify'>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row items-center gap-16'>
          <img className='w-full md:max-w-[450px] rounded-lg shadow-lg' src={assets.about_img} alt="Our Story" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
              <p>Our journey began with a simple yet powerful conviction: that finding what you need online should be an intuitive and rewarding experience. We set out to create a seamless bridge between discovery and acquisition, making it easier for everyone to access quality goods from anywhere.</p>
              <p>Since our inception, we've dedicated ourselves to meticulously curating a diverse array of exceptional products. From cutting-edge gadgets and sophisticated apparel to essential household items, every piece in our collection is carefully selected from trusted sources, ensuring both quality and value.</p>
              <b className='text-gray-900 text-lg'>Our Guiding Principle</b>
              <p>We are driven by the principle of empowering individuals through unparalleled choice and unparalleled convenience. Our commitment lies in delivering an online experience that is not just efficient, but genuinely enjoyable, from the moment you begin Browse to the safe arrival of your order at your doorstep.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Uncompromising Standards:</b>
              <p className='text-gray-600'>Every item undergoes rigorous inspection to guarantee it aligns with our high benchmarks for excellence.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Effortless Experience:</b>
              <p className='text-gray-600'>Our intuitive design and streamlined processes make your journey from selection to checkout remarkably simple.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Dedicated Support:</b>
              <p className='text-gray-600'>A committed team is readily available to ensure your questions are answered and your needs are met, every step of the way.</p>
          </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
