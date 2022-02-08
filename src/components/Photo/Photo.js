import React from 'react';
import { Link } from 'react-router-dom';
import PhotoContentFooter from '../PhotoContentFooter/PhotoContentFooter';
import PhotoContentHeader from '../PhotoContentHeader/PhotoContentHeader';

const Photo = ({ 
    photo: 
    { 
        urls, 
        sponsorship, 
        description,
        id
    }, 
    size, 
    onClick,
    location,
    isModal = false
}) => {
    const defaultPhotoSize = !size ? 'regular' : size;
    const isSponsored = !sponsorship ? ' flex-left' : ''

    return (
        <div className='photo-content'>
             <Link
                to={{pathname: `/photo/${id}`}}
                state={{backgroundLocation: location }}
            >
                <div className='bg-hover' />
            </Link>
            {!isModal && 
            <PhotoContentHeader 
                isSponsored={isSponsored} 
                sponsorship={sponsorship} 
            />}
            <img 
                src={urls[defaultPhotoSize]} 
                alt={description}
                onClick={onClick}
            />
            {!isModal && 
            <PhotoContentFooter 
                isSponsored={isSponsored}
                sponsorship={sponsorship}
            />}
        </div>
    )
}

export default Photo;