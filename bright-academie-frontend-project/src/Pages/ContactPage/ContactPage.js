import React from 'react'
import ContactForm from '../../Components/ContactForm';
import ContactMap from '../../Components/ContactMap';

const ContactPage = () => {
  return (
    <>
      <div id='contact-page' className='row container-fluid'>
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