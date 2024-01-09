import React from 'react'
import ImageCard from '../../Components/ImageCard';


const HomePage = () => {
  return (
    <>

      <div id="content" className="container-fluid p-0">
        <div className="position-relative text-center">
          <img className="img-fluid" style={{ width: '100vw', height: '900px' }} src="Images/moderndance4.jpg" />
          <div className="position-absolute  start-50 translate-middle" style={{ color: '#DDF2FD', fontWeight: '600', fontSize: '30px', bottom: '30px' }}>
            <p className="card-text ">BİZE KATILIN.</p>
            <p className="card-text">Kayıt için bizimle iletişime geçin.</p>
            <a href="#" style={{ backgroundColor: '#164863', color: '#DDF2FD' }} className="btn fs-4 p-3">Başvuru Formu</a>
          </div>
        </div>
      </div>

      <ImageCard cardName={"Bale"} imageCardUrl={"Images/bale1.jpg"} cardDescription={"Dünyanın en köklü dansı Bale'nin saflığını, güzelliğini, hafifliğini ve zerafetini keşfedin!"}/>

      <ImageCard cardName={"Modern Dans"} imageCardUrl={"Images/moderndance1.jpg"} cardDescription={"Kalıplara sığmayan Modern Dans ile özgünlüğünü herkese gösterin!"} />

      <ImageCard style={{ backgroundColor: 'blue' }} cardName={"Tango"} imageCardUrl={"Images/tango1.jpg"} cardDescription={"Aşkın ve tutkunun dansı olan tango ile uyumun en güzel resmini çizin!"} />

      <ImageCard cardName={"Hip-Hop"} imageCardUrl={"Images/breakdance1.jpg"} cardDescription={"Monotonluğa karşı harekete geç, sokağın ruhunu dansına yansıt!"} />

      <ImageCard cardName={"Flamenco"} imageCardUrl={"Images/flamenco1.jpg"} cardDescription={"Hem asi hem asil... Flamenko'nun ateşli ritmi ve tutkulu dans figürleriyle bu eşsiz İspanyol dansının gizemli atmosferini keşfedin. "} />


    </>
  )
}

export default HomePage;