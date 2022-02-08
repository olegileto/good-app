import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../shared/LikeButton/LikeButton';
import AddToButton from '../../shared/AddToButton/AddToButton';
import ArrowDownloadButton from '../../shared/ArrowDownloadButton/ArrowDownloadButton';

const Photo = ({ 
    photo: { urls, sponsorship, description }, 
    size, 
    onClick 
}) => {
    const defaultPhotoSize = !size ? 'regular' : size;
    const isSponsored = !sponsorship ? ' flex-left' : ''

    return (
        <div className='photo-content'>
             <div className='bg-hover' />
            <div className={`photo-content-header${isSponsored}`}>
                {sponsorship && <span className='sponsored'>Sponsored</span>}
                <div className='photo-content-buttons'>
                    <LikeButton />
                    <AddToButton />
                </div>
            </div>
            <img 
                src={urls[defaultPhotoSize]} 
                alt={description}
                onClick={onClick}
            />
            <div className={`photo-content-footer${isSponsored}`}>
                <div className='right-block'>
                    <div className='sponsor-image'>
                        <img src={sponsorship?.sponsor?.profile_image?.medium} />
                    </div>
                    <div className='sponsor-description'>
                        <a href={sponsorship?.sponsor?.social?.portfolio_url} className='sponsor-name'>{sponsorship?.sponsor?.first_name}</a>
                        <a href={sponsorship?.tagline_url} className='sponsor-tagline'>{sponsorship?.tagline}</a>
                    </div>
                </div>
                <div className='left-block'>
                    <ArrowDownloadButton />
                </div>
            </div>
        </div>
    )
}

export default Photo;