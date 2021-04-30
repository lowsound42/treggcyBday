import React from 'react';
import './CameraModal.css';
import image4 from '../../assets/camera/four.jpg';

function CameraModal(props) {
    function closeModal() {
        props.toggleModal();
    }

    return (
        <div className={props.modalState ? ' modalContainer' : 'hide'}>
            <p onClick={() => closeModal()} className="closeButton">
                X
            </p>
            <div className="pictureContainer">
                <img className="randomPic" src={image4} alt="" />
            </div>
        </div>
    );
}

export default CameraModal;
