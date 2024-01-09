import React from 'react'

const TrainingCard = ({ TrainingCardUrl, TrainingCardName, TrainingCardDescription, TrainingDetailsUrl }) => {
    return (
        <>
            <div id='training-card' className="card">
                <img id='training-image' src={TrainingCardUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h3 className="card-title">{TrainingCardName}</h3>
                    <p className="card-text fs-5">{TrainingCardDescription}</p>
                    <a id='training-card-btn' href={TrainingDetailsUrl} className="btn btn-primary fs-5">Detaylı Bilgi</a>
                </div>
            </div>
        </>
    )
}

export default TrainingCard