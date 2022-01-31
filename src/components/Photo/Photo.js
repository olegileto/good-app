import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ photo }) => {
    return (
        <Link to={`img/${photo.id}`}>
            <img src={photo.urls.regular} alt={photo.alt_description}/>
        </Link>
    )
}

export default Photo;