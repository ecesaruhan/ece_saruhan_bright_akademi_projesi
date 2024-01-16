import React from 'react'
import TrainerCard from '../../Components/TrainerCard';

const TrainersPage = () => {
  return (
    <div className='container-fluid' style={{ background: 'url(Images/trainerbg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h1 className='text-center display-3 text-white pt-4'>Eğitmenlerimiz</h1>
      <div className='container m-0 p-0 mx-auto text-center py-3'>
        <div className='row m-0 p-0 justify-content-around'>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} TrainerCardUrl={"Images/Trainer1.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} TrainerCardUrl={"Images/Trainer2.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} TrainerCardUrl={"Images/Trainer4.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} TrainerCardUrl={"Images/Trainer5.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} TrainerCardUrl={"Images/Trainer6.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} TrainerCardUrl={"Images/Trainer7.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} TrainerCardUrl={"Images/Trainer8.jpg"} />
          </div>
          <div className='col-md-6'>
            <TrainerCard TrainerCardName={"Lorem ipsum"} TrainerCardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} TrainerCardUrl={"Images/Trainer9.jpg"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainersPage;