import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';
import { Link } from 'react-router-dom';

import './Photos.scss';

const Photos = () => {
    const location = useLocation();
    const photos = useSelector(getPhotos);

    if (!photos) return null;

    return (
        <div className='photos-container'>
            {
                 photos?.map(photo => {
                    return (
                        <Link
                            key={photo.blur_hash}
                            className='photo'
                            to={{pathname: `/photo/${photo.id}`}}
                            state={{backgroundLocation: location }}
                        >
                                <Photo photo={photo} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Photos;