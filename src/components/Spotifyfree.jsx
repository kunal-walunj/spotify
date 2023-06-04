import React from 'react'
import style from '../css/Style.module.css'
import mobilebody from '../images/mobilesbody.png'
import mobilescreen from '../images/mobilescreen.jpg'

const Spotifyfree = () => {
  return (
    <div> {/* 2step  */}

    <div id={style.SpotifyFree}>
        <div id={style.freeImage}>
            <img id={style.mobilebody} src={mobilebody} alt=""/> 
            <img id={style.mobilescreen} src={mobilescreen}alt=""/>
          
        </div>
      
        <div id={style.Million}>
            <h1>Playing millions of songs  and podcasts , for free.</h1>
                <a href="#.com">GET SPOTIFY FREE</a>
        </div>

    </div></div>
  )
}

export default Spotifyfree