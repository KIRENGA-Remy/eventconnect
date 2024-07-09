import React from 'react'
import CategoryCard from './CategoryCard'
import { TbMusic } from 'react-icons/tb'
import { AiOutlineCamera } from 'react-icons/ai'
import { MdRememberMe} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'
import { FaHandshake, FaRing, FaMedal, FaGlobe, FaTheaterMasks, FaBirthdayCake, FaBusinessTime, FaGraduationCap } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>Crafting experiences that leave a lasting impression.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<TbMusic size={30} />} title={'Concert'} />
                    <CategoryCard icons={<FaHandshake size={30} />} title={'Meeting'} />
                    <CategoryCard icons={<FaMedal size={30} />} title={'Hackathon'} />
                    <CategoryCard icons={<FaGlobe size={30} />} title={'Worship'} />

                    <CategoryCard icons={<FaBusinessTime size={30} />} title={'Conference'} />
                    <CategoryCard icons={<FaRing size={30} />} title={'Weeding'} />
                    <CategoryCard icons={<FaBirthdayCake size={30} />} title={'Anniversaire'} />
                    <CategoryCard icons={<FaTheaterMasks size={30} />} title={'Festival'} />

                    <CategoryCard icons={<FaGraduationCap size={30} />} title={'Competition'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Movie Premiere'} />
                    <CategoryCard icons={<MdRememberMe size={30} />} title={'Theme Park Visit'} />
                    <CategoryCard icons={<FaUniversity size={30} />} title={'Other'} />
                </div>
        </div>
    </div>
  )
}

export default Categories