import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from './Data'

type GridProps = {
  language: 'en' | 'de'
}

const Grid = ({ language }: GridProps) => {
  const isGerman = language === 'de'

  const translatedGridItems = gridItems.map((item) => {
    if (isGerman) {
      const germanTitles: Record<number, string> = {
        1: 'Leidenschaftlich daran interessiert, die Zukunft von Cybersicherheit und Softwareentwicklung zu gestalten',
        2: 'Ich bin sehr flexibel bei der Kommunikation über Zeitzonen hinweg',
        3: 'Mein Tech-Stack',
        4: 'Tech-Enthusiast mit Leidenschaft für Entwicklung.',
        5: 'Derzeit entwickle ich Anwendungen zur Verfolgung und Verwaltung von Bordverkäufen',
        6: 'Möchten Sie gemeinsam ein Projekt starten?',
      }

      const germanDescriptions: Record<number, string> = {
        3: 'Ich versuche ständig, mich zu verbessern',
        5: 'The Inside Scoop',
      }

      return {
        ...item,
        title: germanTitles[item.id] ?? item.title,
        description: germanDescriptions[item.id] ?? item.description,
      }
    }

    return item
  })

  return (
    <section id="about">
      <BentoGrid>
        {translatedGridItems.map(({ id, title, description, className, img, imgClassName, titleClassName }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid