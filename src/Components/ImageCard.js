import React from 'react'

const ImageCard = ({ imageCardUrl, cardName, cardDescription }) => {
    return (
        <>
            <div id='image-card' className="card my-1">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={imageCardUrl} className="img-fluid rounded-start" style={{ width: "800px", height: "500px" }} />
                    </div>
                    <div className="col-md-6 text-center" style={{ fontWeight: '600', fontSize: '30px' }}>
                        <div className="card-body text-center h-100 d-flex flex-column justify-content-center gap-5 align-items-center">
                            <a href="#" style={{ backgroundColor: '#22092C', color: '#F3F3F3' }} className="btn fs-4 p-2">{cardName}</a>
                            <p className="card-text">{cardDescription} </p>
                            <a href="#" style={{ backgroundColor: '#22092C', color: '#F3F3F3' }} className="btn fs-4 p-3">{cardName} Eğitimlerimiz</a>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ImageCard