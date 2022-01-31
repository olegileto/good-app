import React from 'react';

const Photo = ({ photo }) => {
    return (
        <div className="photo">
            <img src={photo.urls.regular} />
        </div>
    )
}

export default Photo;