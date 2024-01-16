import React from 'react'

const TrainerCard = ({TrainerCardUrl, TrainerCardName, TrainerCardDescription}) => {
    return (
        <>
            <div id='training-card' className="card my-3 mx-auto">
                <img id='training-image' src={TrainerCardUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h3 className="card-title" >{TrainerCardName}</h3>
                    <p className="card-text">{TrainerCardDescription}</p>
                </div>
            </div>
        </>
    )
}

export default TrainerCard