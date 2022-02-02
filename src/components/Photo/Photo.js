import React from 'react';

const Photo = ({ photo, size, onClick, isZoomed }) => {
    const defaultPhotoSize = !size ? 'regular' : size;
    const classZoomed = isZoomed ? 'zoom-in' : 'zoom-out';

    return (
        <img 
            src={photo.urls[defaultPhotoSize]} 
            alt={photo.description}
            onClick={onClick}
            className={classZoomed}
        />
    )
}

export default Photo;