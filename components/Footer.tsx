import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from './Data'

type FooterProps = {
  language: 'en' | 'de'
}

const Footer = ({ language }: FooterProps) => {
  const isGerman = language === 'de'

  return (
   <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
   
    <div className='flex flex-col items-center'>
     <h1 className='heading lg:max-w[45vw]'>
        {isGerman ? 'Bereit, Ihre digitale Präsenz auf die nächste Stufe zu bringen?' : 'ready to make'} <span className='text-purple'>{isGerman ? 'Ihre' : 'your '}</span>
        {isGerman ? 'digitale Präsenz auf die nächste Stufe zu bringen?' : 'digital presence to the next level?'}
     </h1>
     <p  className='text-white-200 md:mt-10 my-5 text-center'>
        {isGerman
          ? 'Schreiben Sie mir noch heute und lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ziele zu erreichen.'
          : 'reach out to me today and let&apos;s discuss how i can help you achieve your goals.'}
     </p>
     <a href="mailto:omarbenhajsaid1@gmail.com">
        <MagicButton title={isGerman ? 'Lass uns gemeinsam arbeiten' : "let's get in touch"} icon={<FaLocationArrow/>} position={'right'}

        />
     </a>
    </div>
    <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
            {isGerman ? 'Urheberrecht © 2024 Omar' : 'copyright © 2024 omar'}
        </p>
        <div className='flex items-center md:gap-3
        gap-6'
        >
            {
                socialMedia.map((profile) =>(
                    <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-100'>
                        <img src={profile.img}  width={20} height={20} />
                    </a>

                ) )}
        </div>
    </div>

   </footer>
  )
}

export default Footer