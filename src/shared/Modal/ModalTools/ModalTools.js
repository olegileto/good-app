import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DownloadButton from '../../DownloadButton/DownloadButton';

const ModalTools = ({ onDismiss, dismissRef, downloadLink }) => {
    return (
        <div className="modal-tools">
            <CloseIcon 
                onClick={onDismiss} 
                ref={dismissRef} 
                className='dismiss-icon'
            />
            <DownloadButton downloadLink={downloadLink}/>
        </div>
    )
}

export default ModalTools;