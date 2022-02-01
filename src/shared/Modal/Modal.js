import React from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import './Modal.scss';

const Modal = ({ onDismiss, dismissRef, children }) => {
    return (
        <Dialog
            aria-labelledby="label"
            onDismiss={onDismiss}
            initialFocusRef={dismissRef}
        >
            <div className='modal-container'>
                <span onClick={onDismiss} ref={dismissRef}>X</span>
                {children}
            </div>
        </Dialog>
        
    )
}

export default Modal;