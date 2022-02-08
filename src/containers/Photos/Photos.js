import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';
import { chunkDataIntoColumns } from '../../helpers/utils';
import { INDEXES, COLUMNS_SIZE } from '../../helpers/constants';

import './Photos.scss';

const Photos = () => {
    const location = useLocation();
    const photos = useSelector(getPhotos);
    const chunkedData = chunkDataIntoColumns(photos, COLUMNS_SIZE)

    const renderColumns = (columns, index) => {
        return (
            columns[index]?.map(column => {
                return (
                    <div className='photo' key={column.blur_hash + column.id}>
                        <Photo photo={column} location={location}/>
                    </div>
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