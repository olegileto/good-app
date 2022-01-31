import React from 'react';
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';

import './Photos.scss';

const Photos = () => {
    const photos = useSelector(getPhotos);

    if (!photos) return null;

    return (
        <div className='photos-container'>
            {
                 photos?.map(photo => {
                    return (
                        <div key={photo.id} className='photo'>
                            <Photo photo={photo} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Photos;