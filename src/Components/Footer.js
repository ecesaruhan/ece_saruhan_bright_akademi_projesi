import { faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'



const Footer = () => {
  return (
    <>
      <div id='footer-container' className='container-fluid text-center sticky-bottom'>
        <div className="card  justify-content-center">
          <div className="card-body row">
            <div className="col-sm-6">
              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faLocationDot} />Kuloglu Mahallesi Barbaros Bulvası Yıldız İş Hanı No:9 34353 Beşiktaş/İstanbul</p>

              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faWhatsapp} />+90 590 564 76 98</p>

              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faYoutube} />@brightdansakademisi</p>
            </div>

            <div className="col-sm-6">

              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faInstagram} />brightdansakademisi</p>

              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faTwitter} />@brightdansakademisi</p>

              <p className="card-text m-1"><FontAwesomeIcon style={{ fontSize: '20', marginRight: '10px' }} icon={faEnvelope} />info@brightdansakademisi</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;