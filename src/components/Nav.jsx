import React from 'react'
import style from '../css/Style.module.css'

const Nav = () => {
  return (
    <div>
         {/* 1step   */}
    <nav>
        <div id={style.spotifytext}>
            <i class="fa-brands fa-spotify"></i>
            <h2>Spotify</h2>
        </div>

<ul>
    <li>Premium</li>
    <li>Support</li>
    <li>Download</li>
    <li>Sign up</li>
    <li>Log in</li>
</ul>        
    </nav>
    </div>
  )
}

export default Nav