import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ModalHeader = ({ onDismiss, dismissRef }) => {
    return (
        <div className="modal-header">
            <CloseIcon 
                onClick={onDismiss} 
                ref={dismissRef} 
                className='dismiss-icon'
            />
        </div>
    )
}

export default ModalHeader;