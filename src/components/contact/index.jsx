import React from 'react'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6ierifa',
        'template_6nc1skn',
        form.current,
        'qRj5q81c9wZAJyxFw'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact">
        <div className="h1">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        </div>
        <div className="p">
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
        </div>

        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="name half">
                <input type="text" classname="half1" placeholder="Name" />
              </li>
              <li className="email half">
                <input type="email" classname="half1" placeholder="Email" />
              </li>
              <li >
                <input type="text" className="subject" placeholder="Subject" />
              </li>
              <textarea className="message" placeholder="Message"></textarea>
              <li>
                <input type="submit" className="pulse" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>


      <div className="map-wrap">
        <MapContainer center={[28.6325348, 77.4357627]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[28.6325348, 77.4357627]}>
            <Popup>Ansh lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
