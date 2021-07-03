import React from 'react'
import '../Styles/footer.css'
import {Facebook , Twitter, YouTube, Instagram} from '@material-ui/icons';

function footer() {
    return (
        <div className="footer_section">
            <div className="footer_section__main">
                <p className="footer_section__content">© 2021 <a  className ="footer__paytm__link"  target ="_blank" href="https://paytmmall.com/">PaytmMall </a>| No rights reserved | Demo Version</p>
                 <div className="footer__section__links">
                 <a target ="_blank" className ="link" href="https://www.facebook.com/paytmmall"><Facebook  /></a> 
                 <a target ="_blank" className ="link"href="https://twitter.com/PaytmMall"> <Twitter /></a> 
                 <a target ="_blank" className ="link" href="https://www.youtube.com/c/paytmmallyt"><YouTube /></a> 
                  <a target ="_blank"className ="link"  href="https://www.instagram.com/paytmmall/"><Instagram/></a>
                 </div>
              </div>
        </div>
    )
}

export default footer
