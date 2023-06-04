import React from 'react'
import style from '../css/Style.module.css'

const Footer = () => {
  return (
    <div>
<div id={style.foot}>
<div >
       <div id={style.mainFoot}>
        <div id={style.footerLinks}>
            <div id={style.footLogo}>
            <i class="fa-brands fa-spotify"></i>
                <h3 >
                    Spotify
                </h3>
            </div>
            <div>
<ul>
    <ul>COMPANY</ul>
    <li>About</li>
    <li>Jobs</li>
    <li>For the Record</li>
</ul>

            </div>
            <div>
<ul>
    <ul>COMMUNITIES</ul>
    <li>For Artists</li>
    <li>Developers</li>
    <li>Advertising</li>
    <li>Investors</li>
    <li>Vendors</li>
</ul>

            </div>
            <div>

<ul>
    <ul>USEFUL LINKS</ul>
    <li>Support</li>
    <li>Web Player</li>
    <li>Free Mobile App</li>
 </ul>
            </div>
        </div>
    </div>
      {/* step 8 */}

      <div id={style.socialFoot}>
           
           <i className="fa fa-instagram" aria-hidden="true"></i>

           <i className="fa fa-twitter-square" aria-hidden="true"></i>

           <i className="fa fa-facebook-square" aria-hidden="true"></i>

       </div>
      </div>

      {/* step 9 */}

      <div id={style.lastFooter}>
          <ul>
              <li>Legal</li>
              <li>Privacy Center </li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
          </ul>
       </div>
   </div>
   </div>

  )
}

export default Footer