import React from 'react';
import facebookicon from '../../assets/facebookicon.png'
import instagramicon from '../../assets/instagramicon.png'
import twittericon from '../../assets/twittericon.png'

function Footer() {
    return (
        <>
            <div className="footer_container">
                <footer className="footer__imgcontainer">
                    <img src={facebookicon} className="footer__facebook" alt="facebook icon" />
                    <img src={instagramicon} className="footer__instagram" alt="instagram icon" />
                    <img src={twittericon} className="footer__twitter" alt="twitter icon" />
                </footer>
            </div>
        </>
    )
}

export default Footer
