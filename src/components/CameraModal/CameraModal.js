import React from 'react';
import './CameraModal.css';
import image1 from '../../assets/camera/one.jpg';
import image2 from '../../assets/camera/two.png';
import image3 from '../../assets/camera/three.jpg';
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
