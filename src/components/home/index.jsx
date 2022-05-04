import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  return (
    <>
      <div className="home">
        <div className="h1">
          <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['H', 'i', ',']}
          idx={15}
          />
          <br />
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['I',"'",'M',' ', 'A', 'n', 's', 'h', ',']}
          idx={18}
          />
          <br />
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']}
          idx={27}
          />
          </h1>
        </div>

        <img src={Logo} alt="logo" className="logoimg" />

        <div className="h2">
          <h2>Front End Developer</h2>
        </div>

        <div className="btndiv">
          <Link to="/contact" className="pulse">
            Contact me!
          </Link>
        </div>
      </div>

      <Loader type="pacman"/>
    </>
  )
}

export default Home
