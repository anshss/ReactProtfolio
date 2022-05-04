import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import TagCloud from 'react3dtagcloud'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const tagName = [
    'Java',
    'Javscript',
    'CSS',
    'SASS',
    'React',
    'HTML 5',
    'Express',
    'Bootstrap',
    'Git',
    'Node',
  ]

  return (
    <>
      <div className="about">
        <div className="h1">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        </div>
        <div className="p">
          <p>
            I'm a Freshman pursuing Computer Science. I love spending time on
            fixing little details and optimizing web apps. Also I like working
            in a team, you'll learn faster and much more. As the saying goes:
            'two heads are better than one'.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            I am always ready to have new experiences, meet new people and learn
            new things. I find the idea of creating value for people and
            impacting the world through my work gratifying.
          </p>
        </div>
      </div>

      <div className="tagcloud">
        <TagCloud tagName={tagName} />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
