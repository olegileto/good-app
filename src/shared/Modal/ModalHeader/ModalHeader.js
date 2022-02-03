import React from 'react';
import StickyBox from 'react-sticky-box';
import UserInformation from '../../../components/UserInformation/UserInformation';
import ModalTools from '../ModalTools/ModalTools';

const ModalHeader = ({ onDismiss, dismissRef, item }) => {
    return (
        <StickyBox offsetBottom={20} className='sticky-modal-header'>
            <div className="modal-header">
                <UserInformation userInfo={item} />
                <ModalTools 
                    onDismiss={onDismiss}
                    dismissRef={dismissRef}
                    downloadLink={item.links.download}
                />
            </div>
        </StickyBox>
    )
}

export default ModalHeader;