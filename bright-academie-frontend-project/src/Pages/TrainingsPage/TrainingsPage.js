import React from 'react'
import TrainingCard from '../../Components/TrainingCard';

const TrainingsPage = () => {
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: '#113946'}}>
        <h1 className='display-3 text-center p-4' style={{ color: '#F5E8B7' }}>Eğitimlerimiz</h1>
      <div className='container m-0 p-0 mx-auto text-center p-3'>
        <div className='row m-0 p-0 gap-2 justify-content-center'>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Bale"} TrainingCardUrl={"Images/bale1.jpg"} TrainingCardDescription={"Dünyanın en köklü dansı Bale'nin saflığını, güzelliğini, hafifliğini ve zerafetini keşfedin!"} />
          </div>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Modern Dans"} TrainingCardUrl={"Images/moderndance3.jpg"} TrainingCardDescription={"Kalıplara sığmayan Modern Dans ile özgünlüğünü herkese gösterin!"} />
          </div>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Hip-Hop"} TrainingCardUrl={"Images/breakdance1.jpg"} TrainingCardDescription={"fDünyanın en köklü dansı Bale'nin saflığını, güzelliğini, hafifliğini ve zerafetini keşfedin!"} />
          </div>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Salsa"} TrainingCardUrl={"Images/salsa1.jpg"} TrainingCardDescription={"Salsa dansına özgü ritimleri ve enstrümanları keşfedin"} />
          </div>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Tango"} TrainingCardUrl={"Images/tango1.jpg"} TrainingCardDescription={"Aşkın ve tutkunun dansı olan tango ile uyumun en güzel resmini çizin!"} />
          </div>
          <div className='col-md-5'>
            <TrainingCard TrainingCardName={"Flamenko"} TrainingCardUrl={"Images/flamenco2.jpg"} TrainingCardDescription={"Flamenko'nun ateşli ritmi ile bu eşsiz İspanyol dansının gizemli atmosferini keşfedin."} />
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default TrainingsPage;