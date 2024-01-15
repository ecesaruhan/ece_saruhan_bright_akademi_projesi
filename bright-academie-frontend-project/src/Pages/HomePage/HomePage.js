import React from 'react'
import ImageCard from '../../Components/ImageCard';
import ImageSlider from '../../Components/ImageSlider';
import { SliderData } from '../../Components/SliderData';


const HomePage = () => {
  return (
    <>
      <div className='container-fluid bg-dark'>
      <div style={{width:"100%", height:"900px", backgroundColor:"black"}} className='mx-auto'>
        <ImageSlider slides={SliderData} />
      </div>

      <div id="content" className="container pt-1 p-0">
        <div className="position-relative text-center">
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

      <ImageCard cardName={"Flamenco"} imageCardUrl={"Images/flamenco2.jpg"} cardDescription={"Hem asi hem asil... Flamenko'nun ateşli ritmi ve tutkulu dans figürleriyle bu eşsiz İspanyol dansının gizemli atmosferini keşfedin. "} />
      </div>

    </>
  )
}

export default HomePage;