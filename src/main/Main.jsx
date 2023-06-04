
import React from 'react'
import Nav from '../components/Nav'
import Spotifyfree from '../components/Spotifyfree'
import Whyspotify from '../components/Whyspotify'
import Itsfree from '../components/Itsfree'
import Questions from '../components/Questions'
import Ready from '../components/Ready'
import Footer from '../components/Footer'


const Main = () => {
  return (
<div>
    <Nav/>
    <Spotifyfree/>
    <Whyspotify/>
    <Itsfree />
    <Questions/>
    <Ready/>
    <Footer/>
</div>
      
  )
}

export default Main