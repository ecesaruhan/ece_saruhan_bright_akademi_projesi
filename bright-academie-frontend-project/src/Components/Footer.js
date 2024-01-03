import React from 'react'



const Footer = () => {
  return (
    <>
      <div id='footer-container' className='container-fluid text-center fixed-bottom'>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hakkımızda</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bize Ulaşın</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer;