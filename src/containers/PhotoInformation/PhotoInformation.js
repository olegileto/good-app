import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPhotoById } from '../../helpers/photos';
import { getPhotos } from '../../selectors/photos';
import Modal from '../../shared/Modal/Modal';
import Photo from '../../components/Photo/Photo';

const PhotoInformation = () => {
    const navigate = useNavigate();
    const dismissRef = useRef(null);
    const photos = useSelector(getPhotos);
    const { id } = useParams();

    const photo = getPhotoById(id, photos);

    if (!photo) return null;

    const handleDismiss = () => navigate(-1);

    return (
        <Modal
            onDismiss={handleDismiss}
            dismissRef={dismissRef}
        >
            <Photo photo={photo}></Photo>
        </Modal>
    )

}

export default PhotoInformation;