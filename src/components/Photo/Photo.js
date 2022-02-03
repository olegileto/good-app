import React from 'react';

const Photo = ({ photo, size, onClick }) => {
    const defaultPhotoSize = !size ? 'regular' : size;

    return (
        <img 
            src={photo.urls[defaultPhotoSize]} 
            alt={photo.description}
            onClick={onClick}
        />
    )
}

export default Photo;