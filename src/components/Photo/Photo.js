import React from 'react';

const Photo = ({ photo }) => {
    return (
        <>
            <img src={photo.urls.regular} />
        </>

    )
}

export default Photo;