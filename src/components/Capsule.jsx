// import React, { useState } from 'react';
import React, { useState } from 'react';
import moment from 'moment';
import CapsuleModal from './CapsuleModal';
// import CapsuleModal from './CapsuleModal';

const Capsule = ({item}) => {
    const [openModal, setOpenModal] = useState(false);
    const showModal = (e) => {
        e.preventDefault();
        setOpenModal(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';    // doing this so that user can't scoll background when modal is opened
        }
    }
    const hideModal = (e) => {
        e.preventDefault();
        setOpenModal(false);
        document.body.style.overflow = 'unset';     // doing this so that user can scoll background when modal is closed
    }
    
    const {
        type,
        status,
        original_launch,
    } = item;
    
    return (
        <React.Fragment>
            <div
                className="container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-2 cursor-pointer"
                onClick={showModal}
            >
                <div className="lg:flex">
                    <div className="lg: flex-1">Type: {type}</div>
                    <div className="lg: flex-1">Status: {status}</div>
                    <div className="lg: flex-1">Launched on: {moment(original_launch).format("MMMM Do YYYY, h:mm:ss a")}</div>
                </div>
            </div>
            {openModal && <CapsuleModal item={item} hideModal={hideModal} />}
        </React.Fragment>
    );
};

export default Capsule;