import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPhotoById } from '../../helpers/photos';
import { getPhotos } from '../../selectors/photos';
import './Modal.scss';

const Modal = () => {
    const photos = useSelector(getPhotos);
    const { id } = useParams();
    const photo = getPhotoById(id, photos);

    return (
        <div className='modal-container'>
            <div className='modal-inner'>
                <img src={photo.urls.regular} />
            </div>
        </div>
    )
}

export default Modal;