import React from 'react'


const Header = () => {
  return (
    <>
      <nav id='header-nav' className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <a href='/' className="navbar-brand text-white">
            <img id='brand-logo' src='Images/brightdanceakademilogo.png' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-light nav-link active" aria-current="page" href="/">Ana Sayfa</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-link" href="/about">Hakkımızda</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-link" href="/trainings">Eğitimlerimiz</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-link" href="/trainers">Eğitmenlerimiz</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-link" href="/contact">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;