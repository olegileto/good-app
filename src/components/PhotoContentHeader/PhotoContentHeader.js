import React from 'react';
import LikeButton from '../../shared/LikeButton/LikeButton';
import AddToButton from '../../shared/AddToButton/AddToButton';

const PhotoContentHeader = ({ isSponsored, sponsorship }) => {
    return (
        <div className={`photo-content-header${isSponsored}`}>
                {sponsorship && <span className='sponsored'>Sponsored</span>}
                <div className='photo-content-buttons'>
                    <LikeButton />
                    <AddToButton />
                </div>
        </div>
    )
}

export default PhotoContentHeader;