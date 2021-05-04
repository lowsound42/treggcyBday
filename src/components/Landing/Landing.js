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
import sonegg from '../../assets/SONYA.png';
import syd from '../../assets/SYD.png';
import treggcy from '../../assets/TRACY.png';
import bush from '../../assets/Treggs-10-1.png';
import yinkegg from '../../assets/YINKA.png';
import zed from '../../assets/ZED.png';
import background from '../../assets/Treggs-BACKGROUND 1.png';
import CameraModal from '../CameraModal/CameraModal';
import Loading from '../Loading/Loading';
import cameraSfx from '../../assets/sounds/camera-shutter-click-03.mp3';
import fireSfx from '../../assets/sounds/fireworks.mp3';
import bdaySfx from '../../assets/sounds/hbd.mp3';
import horseSfx from '../../assets/sounds/horse-new.wav';
import eaSfx from '../../assets/sounds/ea.mp3';
import { yinkaRec } from '../../data/youtube';
import { recruitingHell } from '../../data/linkedin';
import horseyProper from '../../assets/float/Treggs-1.png';
import guitar from '../../assets/float/Treggs-2.png';
import wine from '../../assets/float/Treggs-3.png';
import drawing from '../../assets/float/lisaDrawing.png';
import controller from '../../assets/float/Treggs-8.png';
import rollSfx from '../../assets/sounds/roll.mp3';
import dice from '../../assets/float/Treggs-5.png';
import birdFace from '../../assets/float/Treggs-6.png';
import threeD from '../../assets/float/Treggs-9.png';
import laughFace from '../../assets/float/Treggs-11.png';
import topPeng from '../../assets/float/Treggs-10.png';
import trumpet from '../../assets/float/Treggs-7.png';
import omgSfx from '../../assets/sounds/omg.wav';
import meowSfx from '../../assets/sounds/cat.wav';
import evilLaughSfx from '../../assets/sounds/evilLaugh.wav';
import trumpetSfx from '../../assets/sounds/trumpet.wav';
import ukeSfx from '../../assets/sounds/uke.wav';
import ramsaySfx from '../../assets/sounds/disaster.mp3';
import bumSfx from '../../assets/sounds/bum.wav';
import flipSfx from '../../assets/sounds/doaflip.mp3';

function Landing() {
    const [modalState, setModalState] = useState(0);
    const outsideRef = useRef(null);
    const [loading, setLoading] = useState(0);
    const [pyro, setPyro] = useState(0);

    var recoUrl, hell;

    function getLink() {
        recoUrl = yinkaRec[Math.floor(Math.random() * yinkaRec.length)];
        window.open(recoUrl.reco);
    }

    function getRecruitmentHell() {
        hell =
            recruitingHell[Math.floor(Math.random() * recruitingHell.length)];
        window.open(hell.hell);
    }

    const [click] = useSound(cameraSfx);
    const [fire] = useSound(fireSfx);
    const [bday, { stop }] = useSound(bdaySfx);
    const [horse] = useSound(horseSfx);
    const [ea] = useSound(eaSfx);
    const [roll] = useSound(rollSfx);
    const [omg] = useSound(omgSfx);
    const [evil] = useSound(evilLaughSfx);
    const [trumpetSound] = useSound(trumpetSfx);
    const [meow] = useSound(meowSfx);
    const [bum] = useSound(bumSfx);
    const [ramsay] = useSound(ramsaySfx);
    const [uke] = useSound(ukeSfx);
    const [doflip] = useSound(flipSfx);
    const [uniqueImage, setUniqueImage] = useState(null);
    const [midPic, setMidPic] = useState(0);
    const [specPic, setSpecPic] = useState(0);
    const [flip, setFlip] = useState(0);
    const [backMask, setBackMask] = useState(0);

    const playClick = () => {
        click();
    };

    const stopBday = () => {
        stop();
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

    function playSound(sound) {
        switch (sound) {
            case 'horse':
                horse();
                break;
            case 'bday':
                bday();
                break;
            case 'ea':
                ea();
                break;
            case 'roll':
                roll();
                break;
            case 'trumpet':
                trumpetSound();
                break;
            case 'laugh':
                evil();
                break;
            case 'omg':
                omg();
                break;
            case 'cat':
                meow();
                break;
            case 'ramsay':
                ramsay();
                break;
            case 'bum':
                bum();
                break;
            case 'uke':
                uke();
                break;
            default:
                break;
        }
    }

    function toggleMid(image, sound, time) {
        setBackMask(1);
        stopBday();
        setUniqueImage(image);
        setMidPic(0);
        if (midPic) {
            setMidPic(0);
        } else {
            setMidPic(1);
        }
        playSound(sound);
        setTimeout(() => {
            setMidPic(0);
            setBackMask(0);
        }, time);
    }

    function toggleSpec() {
        setBackMask(1);
        stopBday();
        uke();
        if (specPic) {
            setSpecPic(0);
        } else {
            setSpecPic(1);
        }
        setTimeout(() => {
            setSpecPic(0);
            setBackMask(0);
        }, 7000);
    }

    function toggleFlip() {
        setBackMask(1);
        stopBday();
        doflip();
        if (flip) {
            setFlip(0);
        } else {
            setFlip(1);
        }
        setTimeout(() => {
            setBackMask(0);
            setFlip(0);
        }, 2000);
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
            <div className="phoneMessage">
                Sorry, this is not a responsive experience. Use your laptop!
            </div>
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
                <div
                    className={
                        backMask ? 'containerNew visible protector' : 'hidden'
                    }
                ></div>

                <div className="balloonContainer" id="balloons">
                    <img className="balloonImage" src={balloons} alt="" />
                </div>

                <div className="characterContainer" id="cam">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(guitar, 'bday', 4000)}
                    ></div>
                    <img className="characterImage" src={cam} alt="" />
                </div>
                <div className={pyro ? 'pyro visible' : 'pyro hidden'}>
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
                <div className="characterContainer" id="luna">
                    <div
                        className="clickableArea"
                        onClick={() => {
                            togglePyro();
                            playFire();
                        }}
                    ></div>
                    <img className="characterImage" src={luna} alt="" />
                </div>

                <div className="characterContainer" id="baher">
                    <div
                        className="clickableArea"
                        onClick={() => {
                            stopBday();
                            toggleMid(controller, 'ea', 2000);
                        }}
                    ></div>
                    <img className="characterImage " src={baher} alt="" />
                </div>
                <div className="characterContainer" id="yinkegg">
                    <div
                        className="clickableArea"
                        onClick={() => getLink()}
                    ></div>
                    <img className="characterImage" src={yinkegg} alt="" />
                </div>
                <div className="characterContainer" id="chelsegg">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(birdFace, 'bum', 2000)}
                    ></div>
                    <img className="characterImage" src={chelsegg} alt="" />
                </div>
                <div className="characterContainer" id="syd">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(trumpet, 'trumpet', 2000)}
                    ></div>
                    <img className="characterImage " src={syd} alt="" />
                </div>
                <div className="characterContainer" id="lauregg">
                    <div
                        className="clickableArea"
                        onClick={() => toggleFlip()}
                    ></div>
                    <img className="characterImage" src={lauregg} alt="" />
                </div>
                <div className="characterContainer" id="barb">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(dice, 'roll', 2000)}
                    ></div>
                    <img className="characterImage" src={barb} alt="" />
                </div>
                <div className="characterContainer" id="treggcy">
                    <div
                        className="clickableArea"
                        onClick={() => {
                            toggleModal();
                            playClick();
                        }}
                    ></div>
                    <img className="characterImage" src={treggcy} alt="" />
                </div>
                <div className="characterContainer" id="em">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(horseyProper, 'horse', 2000)}
                    ></div>
                    <img className="characterImage" src={em} alt="" />
                </div>
                <div className="characterContainer" id="leggo">
                    <div
                        className="clickableArea"
                        onClick={() => toggleSpec()}
                    ></div>
                    <img className="characterImage" src={leggo} alt="" />
                </div>
                <div
                    className={midPic ? 'midContainer visible' : 'hidden'}
                    id="midImage"
                >
                    <img src={midPic ? uniqueImage : null} alt="" />
                </div>
                <div
                    className={specPic ? 'specContainer visible' : 'hidden'}
                    id="specImage"
                >
                    <img src={drawing} alt="" />
                </div>
                <div
                    className={flip ? 'flipContainer visible' : 'hidden'}
                    id="flipImage"
                >
                    <img src={lauregg} alt="" />
                </div>
                <div className="characterContainer" id="eggmar">
                    <div
                        className="clickableArea"
                        onClick={() => getRecruitmentHell()}
                    ></div>
                    <img className="characterImage" src={eggmar} alt="" />
                </div>
                <div className="characterContainer" id="zed">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(threeD, 'omg', 2000)}
                    ></div>
                    <img className="characterImage" src={zed} alt="" />
                </div>
                <div className="characterContainer" id="sonegg">
                    <div
                        className="clickableArea"
                        onClick={() => toggleMid(wine, 'cat', 2000)}
                    ></div>
                    <img className="characterImage" src={sonegg} alt="" />
                </div>
                <div className="characterContainer" id="camilla">
                    <img className="characterImage" src={camilla} alt="" />
                </div>
                <div className="characterContainer" id="pengy">
                    <img className="characterImage" src={pengy} alt="" />
                </div>
                <div className="bushContainer" id="bush">
                    <div
                        className="clickableAreaBush"
                        onClick={() => toggleMid(topPeng, 'ramsay', 2000)}
                    ></div>
                    <img className="bushImage" src={bush} alt="" />
                </div>
            </div>
            <CameraModal modalState={modalState} toggleModal={toggleModal} />
        </>
    );
}

export default Landing;
