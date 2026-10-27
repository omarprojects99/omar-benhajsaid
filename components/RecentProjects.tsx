import React from 'react'
import { projects } from './Data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

type RecentProjectsProps = {
  language: 'en' | 'de'
}

const RecentProjects = ({ language }: RecentProjectsProps) => {
  const isGerman = language === 'de'

  const localizedProjects = isGerman
    ? [
        {
          id: 1,
          title: 'Freelance-Projekt für einen Kunden',
          des: 'Eine skalierbare arabische Publishing-Plattform für ansprechende Bildungs- und Lifestyle-Inhalte.',
          img: '/image.png',
          iconLists: ['/image.png'],
          link: 'https://doroub.org/',
        },
        {
          id: 2,
          title: 'Tunisair-Plattform für Bordverkauf & Betrieb',
          des: 'Automatisiert Bordverkäufe, Crew-Provisionen, Kassenabgleich und Flugabläufe mit Blazor und .NET 8.',
          img: '/Screenshot 2025-07-04 134009.png',
          iconLists: ['/dotneticon.png'],
          link: '/tunisair-project',
        },
        {
          id: 3,
          title: 'E-Commerce-Web-App',
          des: 'Suche und Filterung von Autos zum Kauf oder Verkauf mit PHP',
          img: '/ProjetPhp.png',
          iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
          link: 'https://github.com/omarprojects99/e-commerce-website-php.git',
        },
      ]
    : projects

  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        {isGerman ? 'Eine kleine Auswahl' : 'A small selection of'}{" "}
        <span className="text-purple">{isGerman ? 'aktueller Projekte' : 'recent projects'}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {localizedProjects.map(({id,title,des,img,iconLists,link}) =>(
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
                             className='z-10 absolute buttom-0'
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
                              {iconLists.map((icon, index) => (
                              <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center
                                '
                                style={{ transform: `translateX(-${index * 10}px)` }}
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
                            {isGerman ? 'Live-Seite ansehen' : 'check live site'}
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
  )
}

export default RecentProjects