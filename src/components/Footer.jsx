import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: "#ffffff", marginRight: '2rem' }} />
                    </div>
                    <div>
                        <p>Fake address 🙂</p>
                        <h4>Huston ,Tx</h4>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#ffffff", marginRight: '2rem' }} /> +1 689-339-9090</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#ffffff", marginRight: '2rem' }} />rips@galaxy.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit.
                        Magni similique autem aspernatur id,
                        assumenda corrupti laborum consequuntur accusantium ea numquam.
                        Eius quidem fuga eos modi vel consequatur iusto maiores voluptatem.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#ffffff", marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: "#ffffff", marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: "#ffffff", marginRight: '1rem' }} />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;