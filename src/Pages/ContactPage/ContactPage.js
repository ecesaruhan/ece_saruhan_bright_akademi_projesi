import React from 'react'
import ContactForm from '../../Components/ContactForm';
import ContactMap from '../../Components/ContactMap';

const ContactPage = () => {
  return (
    <>
      <div id='contact-page' className='row container-fluid mx-auto' style={{ background: 'url(Images/contactbg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', paddingTop:'30px'}}>
        <div className='col-md-6'>
          <ContactMap/>
        </div>

        <div className='col-md-6'>
          <ContactForm/>
        </div>     
    </div>
    </>
  )
}

export default ContactPage;