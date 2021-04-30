import React, { useState, useRef, useEffect } from 'react';
import useSound from 'use-sound';
import './Landing.css';
import balloons from '../../assets/25-balloons.png';
import cam from '../../assets/CAMERON.png';
import baher from '../../assets/BAHER.png';
import barb from '../../assets/BARB.png';
import camilla from '../../assets/CAMILLA.png';
import chelsegg from '../../assets/CHELS.png';
import em from '../../assets/EMMA.png';
import lauregg from '../../assets/LAUREN.png';
import leggo from '../../assets/LISA.png';
import luna from '../../assets/LUNA.png';
import eggmar from '../../assets/OMAR.png';
import pengy from '../../assets/PENGY.png';
import refresh from '../../assets/REFRESH-BUTTON.png';
import sonegg from '../../assets/SONYA.png';
import syd from '../../assets/SYD.png';
import textbox from '../../assets/TEXTBOX.png';
import treggcy from '../../assets/TRACY.png';
import bush from '../../assets/Treggs-10-1.png';
import yinkegg from '../../assets/YINKA.png';
import zed from '../../assets/ZED.png';
import background from '../../assets/Treggs-BACKGROUND 1.png';
import CameraModal from '../CameraModal/CameraModal';
import Loading from '../Loading/Loading';
import cameraSfx from '../../assets/sounds/camera-shutter-click-03.mp3';
import fireSfx from '../../assets/sounds/fireworks.mp3';

function Landing() {
    const [modalState, setModalState] = useState(0);
    const outsideRef = useRef(null);
    const [loading, setLoading] = useState(0);
    const [pyro, setPyro] = useState(0);

    const [click] = useSound(cameraSfx);
    const [fire] = useSound(fireSfx);

    const playClick = () => {
        click();
    };

    const playFire = () => {
        fire();
        setTimeout(() => {
            fire();
        }, 1000);
        setTimeout(() => {
            fire();
        }, 2000);
        setTimeout(() => {
            fire();
        }, 3000);
    };

    function togglePyro() {
        setPyro(1);
        setTimeout(() => {
            setPyro(0);
        }, 5000);
    }

    function toggleModal() {
        if (modalState) {
            setModalState(0);
        } else {
            setModalState(1);
        }
    }

    useEffect(() => {
        if (modalState) {
            outsideRef.current.addEventListener('mousedown', toggleModal);
        } else {
            outsideRef.current.removeEventListener('mousedown', toggleModal);
        }
    }, [modalState]);

    return (
        <>
            <Loading loading={loading}>Loading...</Loading>
            <div
                className={loading ? 'picnicContainer' : 'hidden'}
                ref={outsideRef}
            >
                <img
                    className="background"
                    onLoad={() => {
                        setTimeout(() => {
                            setLoading(1);
                        }, 1200);
                    }}
                    src={background}
                    alt=""
                />
                <div className="balloonContainer" id="balloons">
                    <img className="balloonImage" src={balloons} alt="" />
                </div>
                <div className="characterContainer" id="cam">
                    <img className="characterImage" src={cam} alt="" />
                </div>
                <div className={pyro ? 'pyro visible' : 'pyro hidden'}>
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
                <div className="characterContainer" id="luna">
                    <img
                        className="characterImage"
                        onClick={() => {
                            togglePyro();
                            playFire();
                        }}
                        src={luna}
                        alt=""
                    />
                </div>
                <div className="characterContainer" id="baher">
                    <img className="characterImage" src={baher} alt="" />
                </div>
                <div className="characterContainer" id="yinkegg">
                    <img className="characterImage" src={yinkegg} alt="" />
                </div>
                <div className="characterContainer" id="chelsegg">
                    <img className="characterImage" src={chelsegg} alt="" />
                </div>
                <div className="characterContainer" id="syd">
                    <img className="characterImage" src={syd} alt="" />
                </div>
                <div className="characterContainer" id="lauregg">
                    <img className="characterImage" src={lauregg} alt="" />
                </div>
                <div className="characterContainer" id="barb">
                    <img className="characterImage" src={barb} alt="" />
                </div>
                <div className="characterContainer" id="treggcy">
                    <img
                        className="characterImage"
                        onClick={() => {
                            toggleModal();
                            playClick();
                        }}
                        src={treggcy}
                        alt=""
                    />
                </div>
                <div className="characterContainer" id="em">
                    <img className="characterImage" src={em} alt="" />
                </div>
                <div className="characterContainer" id="leggo">
                    <img className="characterImage" src={leggo} alt="" />
                </div>
                <div className="characterContainer" id="eggmar">
                    <img className="characterImage" src={eggmar} alt="" />
                </div>
                <div className="characterContainer" id="zed">
                    <img className="characterImage" src={zed} alt="" />
                </div>
                <div className="characterContainer" id="sonegg">
                    <img className="characterImage" src={sonegg} alt="" />
                </div>
                <div className="characterContainer" id="camilla">
                    <img className="characterImage" src={camilla} alt="" />
                </div>
                <div className="characterContainer" id="pengy">
                    <img className="characterImage" src={pengy} alt="" />
                </div>
                <div className="bushContainer" id="bush">
                    <img className="bushImage" src={bush} alt="" />
                </div>
            </div>
            <CameraModal modalState={modalState} toggleModal={toggleModal} />
        </>
    );
}

export default Landing;
