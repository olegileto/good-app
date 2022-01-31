import React from 'react';
import { useSelector } from 'react-redux';
import Photo from '../../components/Photo/Photo';
import { getPhotos } from '../../selectors/photos';

const Photos = () => {
    const photos = useSelector(getPhotos);

    if (!photos) return null;

    return (
        photos?.map(photo => {
            return (
                <div key={photo.id}>
                    <Photo photo={photo} />
                </div>
            )
        })
    )
}

export default Photos;