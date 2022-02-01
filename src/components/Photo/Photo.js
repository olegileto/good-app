import React from 'react';

const Photo = ({ photo }) => {
    return (
        <img src={photo.urls.regular} alt={photo.alt_description}/>
    )
}

export default Photo;