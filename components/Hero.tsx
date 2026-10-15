import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload, FaGlobe, FaLocationArrow } from 'react-icons/fa'

type HeroProps = {
  language: 'en' | 'de'
  onToggleLanguage: () => void
}

const Hero = ({ language, onToggleLanguage }: HeroProps) => {
  const isGerman = language === 'de'

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Omar Benhajsaid
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words={isGerman ? 'Konzeptionen in nahtlose Benutzererlebnisse verwandeln' : 'Transforming Concepts into Seamless User Experiences'}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {isGerman
              ? 'Hallo! Ich bin Omar, ein Student im Bereich Business Computing mit Sitz in Deutschland 🇩🇪.'
              : 'Hi! I&apos;m Omar, a business Computing student based in Germany 🇩🇪.'}
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/cv/omar-cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition hover:border-cyan-300/50 hover:bg-cyan-500/25"
            >
              <FaDownload />
              {isGerman ? 'Lebenslauf herunterladen' : 'Download CV'}
            </a>
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-sm font-medium text-purple-100 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition hover:border-purple-300/50 hover:bg-purple-500/25"
            >
              <FaGlobe />
              {isGerman ? 'EN' : 'DE'}
            </button>
          </div>

          <a href="#about" style={{ marginBottom: '15px' }}>
            <MagicButton
              title={isGerman ? 'Meine Arbeit ansehen' : 'Show my work'}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="#Blog">
            <MagicButton
              title={isGerman ? 'Meinen Blog sehen' : 'see my blog'}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;