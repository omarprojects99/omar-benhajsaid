import React from 'react'
import { blog } from './Data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

type BlogProps = {
  language: 'en' | 'de'
}

const Blog = ({ language }: BlogProps) => {
  const isGerman = language === 'de'

  const localizedBlog = isGerman
    ? [
        {
          id: 1,
          title: 'Wie ich offene Kameras gehackt habe! #Pentesting',
          des: 'Viele offene Kameras sind anfällig',
          img: '/cameras.png',
          iconLists: ['/kali.jpg'],
          link: 'https://omarcyberblog.vercel.app',
        },
        {
          id: 2,
          title: 'Datenbank-Inspektion: Lernen aus realen Sicherheitsvorfällen',
          des: 'Sind Ihre Datenbanken sicher abgesichert?',
          img: '/datasecure.png',
          iconLists: ['/kali.jpg'],
          link: 'https://omar-pentesting-blog1.vercel.app/',
        },
      ]
    : blog

  return (
    <section id='Blog'>
    <div className="py-20" id='projects'>
      <h1 className="heading">
        {isGerman ? 'Mein' : 'My'} <span className="text-purple">{isGerman ? 'Blog' : 'blog'}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {localizedBlog.map(({id,title,des,img,iconLists,link}) =>(
                <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center  sm:w-[570px] sm:h-[40vh] w-[80vw] h-[30vh]
                        overflow-hidden  mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img"/>

                            </div>
                            <img 
                             src={img} 
                             alt={title}
                             className="w-full h-full object-cover z-10 absolute bottom-0"  
                             />
                          </div>
                          <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                          </h1>
                          <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}

                          </p>
                          <div className='flex items-center justify-between m7- mb-3'>
                            <div className='flex items-center'>
                              {iconLists.map((icon) => (
                              <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center
                                '
                                style={{transform:`translateX(-$){5* index * 2}pxl)`}} 
                              >
                                <img src={icon} alt={icon}
                                className='p-2'/>
                                </div>
                              ))}
                              
                            </div>

                          </div>
                        <div className='flex justify-center items-center'>
                          <p className='flex lg:text-xl
                          md:text-xs text-sm text-purple'>
                            {isGerman ? 'Blog ansehen' : 'check Blog'}
                          </p>
                          <FaLocationArrow className='ms-3'
                          color='#CBACF9'
                          />
                        </div>
                    </PinContainer>
                </div>
            ))}

        </div>

    </div>
    </section>
  )
}

export default Blog