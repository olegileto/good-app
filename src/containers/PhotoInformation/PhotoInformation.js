import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import { getPhotoById } from '../../helpers/photos';
import { getPhotos } from '../../selectors/photos';
import Modal from '../../shared/Modal/Modal';
import Photo from '../../components/Photo/Photo';
import './PhotoInformation.scss';

const PhotoInformation = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const navigate = useNavigate();
    const dismissRef = useRef(null);
    const photos = useSelector(getPhotos);
    const { id } = useParams();

    const photo = getPhotoById(id, photos);

    if (!photo) return null;

    const handleDismiss = () => navigate(-1);
    const handleZoomPhoto = () => setIsZoomed(!isZoomed);
    const zoomedClass = isZoomed ? ' zoomed' : '';
    const zoomedIcon = isZoomed 
    ? <ZoomInMapIcon className='zoom-icon'/> : <ZoomOutMapIcon className='zoom-icon' />;

    return (
        <Modal
            onDismiss={handleDismiss}
            dismissRef={dismissRef}
            item={photo}
        >
            <div className='photo-information'>
                <div className={`photo-container${zoomedClass}`}>
                    {zoomedIcon}
                    <Photo 
                        photo={photo} 
                        onClick={handleZoomPhoto}
                        isZoomed={isZoomed}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default PhotoInformation;