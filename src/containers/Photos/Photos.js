import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';
import { chunkDataIntoColumns } from '../../helpers/utils';
import { INDEXES } from '../../helpers/constants';

import './Photos.scss';

const Photos = () => {
    const location = useLocation();
    const photos = useSelector(getPhotos);
    const chunkedData = chunkDataIntoColumns(photos, 3)

    const renderColumns = (columns, index) => {
        return (
            columns[index]?.map(column => {
                return (
                    <Link
                        key={column.blur_hash + column.id}
                        className='photo'
                        to={{pathname: `/photo/${column.id}`}}
                        state={{backgroundLocation: location }}
                    >
                            <Photo photo={column} />
                    </Link>
                )
            })
        )
    };

    if (!photos) return null;

    return (
        <div className='photos-container'>
            {INDEXES.map(index => {
                return (
                    <div className='photo-block' key={index}>
                        {renderColumns(chunkedData, index)}
                    </div>
                )
            })}
        </div>
    )
}

export default Photos;