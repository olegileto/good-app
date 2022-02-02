import React from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ModalHeader from './ModalHeader/ModalHeader';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import './Modal.scss';

const Modal = ({ onDismiss, dismissRef, children, item }) => {
    return (
        <Dialog
            aria-labelledby="label"
            onDismiss={onDismiss}
            initialFocusRef={dismissRef}
            className='modal-dialog-window'
        >
            <ModalHeader 
                onDismiss={onDismiss}
                dismissRef={dismissRef}
                item={item}
            />
            <ModalBody 
                modalContent={children} 
            />
            <ModalFooter />
        </Dialog>
        
    )
}

export default Modal;