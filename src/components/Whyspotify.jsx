import React from 'react'
import style from '../css/Style.module.css'

const Whyspotify = () => {
  return (
    <div>
         {/* 3step  */}

    <div id={style.whySpotify}>
        <h1>Why Spotify?</h1>
       
    {/* 4 step */}

        <div id={style.circle}>
    
     {/* logo1  */}
        <div className={style.circlelogo}>

            <div className={style.circleimg}> 
                <i className="fa fa-play-circle" aria-hidden="true"></i>
            </div>

            <div className={style.info}>
            <h3>Play your favorites </h3>
            <p>Listen to the songs you love , and   discover new music and   podcasts.</p>
            </div>

        </div>

     {/* logo2  */}
        <div className={style.circlelogo}> 

            <div className={style.circleimg}> 
                <i className="fa fa-pause-circle" aria-hidden="true"></i>
            </div>

            <div className={style.info}>
            <h3>Playlist made easy </h3>
            <p>We'll help you make playlist. Or    enjoy playlists made by music    experts.</p>
            </div>
        </div>

     {/* logo3  */}
        <div className={style.circlelogo}>

            <div className={style.circleimg}> 
                <i class="fa-solid fa-heart"></i>
            </div>

            <div className={style.info}>
            <h3>Make it yours </h3>
            <p>Tell us what you like, and we'll     recommend music for    you  </p>
            </div>

        </div>

     {/* logo4 */}
        <div className={style.circlelogo}>

            <div className={style.circleimg}> 
                <i className="fa fa-bolt" aria-hidden="true"></i>
            </div>

            <div className={style.info}>
            <h3>Save mobile data. </h3>
            <p>To use less data when you play music,   turn on Data Saver in   Settings</p>
            </div>

        </div>
        </div>
        </div>

    </div>
  )
}

export default Whyspotify