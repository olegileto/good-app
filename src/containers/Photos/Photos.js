import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';
import { Link } from 'react-router-dom';

import './Photos.scss';
import { chunkDataIntoColumns } from '../../helpers/utils';

const Photos = () => {
    const location = useLocation();
    const photos = useSelector(getPhotos);
    const chunkedData = chunkDataIntoColumns(photos, 3);
    console.log('chunkedData', chunkedData);

    const firstColumn = () => {
        return chunkedData[0]?.map(photo => {
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
        });
    };

    const secondColumn = () => {
        return chunkedData[1]?.map(photo => {
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
        });
    };

    const thirdColumn = () => {
        return chunkedData[2]?.map(photo => {
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
        });
    };

    if (!photos) return null;

    return (
        <div className='photos-container'>
            <div className='first-block'>
                {firstColumn()}
            </div>
            <div className='second-block'>
                {secondColumn()}
            </div>
            <div className='third-block'>
                {thirdColumn()}
            </div>
        </div>
    )
}

export default Photos;