import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the app root element for accessibility
Modal.setAppElement('#root');

function DeleteConfirmationModal({ isOpen, onClose, onDelete,id }) {
    const customModalStyles = {
        content: {
            width: '50%',
            height: '200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Delete Confirmation"

            style={customModalStyles}
        >
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this data {id}? </p>
            <div className='absolute bottom-0 left-0'>
            <button onClick={()=>onDelete(id)} className='bg-green-600 p-2 text-white rounded hover:bg-green-800 m-2'>Delete</button>
                <button onClick={onClose} className='bg-red-600 p-2 rounded text-white hover:bg-red-800 m-2'>Cancel</button>
            </div>
        </Modal>
    );
}

export default DeleteConfirmationModal;
