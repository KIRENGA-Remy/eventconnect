import React from 'react'
import { FaWhatsapp,FaInstagram,FaFacebook} from 'react-icons/fa'

export default function ShareDivision() {
  return (
    <div className=' w-4/5 mx-auto grid grid-flow-col p-2 text-black'>
      <a href="https://web.whatsapp.com/" target='_blank '><button type='submit' href='/#' className='p-2 aspect-square'><FaWhatsapp size={20} /></button></a>
      <a href="https://www.instagram.com/" target='_blank '><button type='submit' href='/#' className='p-2 aspect-square'><FaInstagram size={20} /></button></a>
       <a href="http://www.facebook.com/" target='_blank '><button type='submit' href='/#' className='p-2 aspect-square'><FaFacebook size={20} /></button> </a>
    </div>
  )
}
