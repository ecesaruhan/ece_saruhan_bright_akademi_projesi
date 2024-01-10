import React from 'react'

const ContactForm = () => {
  return (
    <>
      <div className='container px-3 py-4 m-3 border border-success mx-auto'>
        <h2 className='text-center'>Başvuru Formu</h2>
        <form className="row g-4">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">İsim</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Soyisim</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>

          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Telefon Numarası</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Adres</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="col-md-3">
            <label for="inputCity" className="form-label">Şehir</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-3">
            <label for="inputState" className="form-label">İl</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-3">
            <label for="inputState" className="form-label">İlçe</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-3">
            <label for="inputZip" className="form-label">Posta Kodu</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Benimle telefon yoluyla iletişime geçin.
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Benimle mail yoluyla iletişime geçin.
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Başvurumu Gönder</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm