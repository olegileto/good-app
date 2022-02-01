import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { getPhotoById } from '../../helpers/photos';
import { getPhotos } from '../../selectors/photos';
import './Modal.scss';
import Photo from '../../components/Photo/Photo';

const Modal = () => {
    const navigate = useNavigate();
    const dismissRef = useRef(null);
    const photos = useSelector(getPhotos);
    const { id } = useParams();

    const photo = getPhotoById(id, photos);

    if (!photo) return null;

    const handleDismiss = () => navigate(-1);

    return (
        <Dialog
            aria-labelledby="label"
            onDismiss={handleDismiss}
            initialFocusRef={dismissRef}
        >
            <div className='modal-container'>
                <span onClick={handleDismiss} ref={dismissRef}>X</span>
                <Photo photo={photo} />
            </div>
        </Dialog>
        
    )
}

export default Modal;