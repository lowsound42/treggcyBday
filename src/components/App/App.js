import React from 'react';
import './App.css';
import eggFace from '../../assets/egglieFace.png';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="adventureBackground">
            <div className="buttonDiv">
                <div className="weirdDiv">
                    <img className="eggFace" src={eggFace} alt="" />
                </div>
                <button
                    className="adventureButton"
                    onClick={() => alert('are you sure?')}
                >
                    Go party with anti-vax strangers and then go get tested for
                    COVID-19
                </button>
                <Link to="/home">
                    <button className="adventureButton">
                        Enjoy a lovely picnic with your friends :)
                    </button>
                </Link>
                <button
                    className="adventureButton"
                    onClick={() => alert('SERIOUSLY?')}
                >
                    Spend 2 hours with the top CEO's of Toronto and learn about
                    how they built their businesses.
                </button>
            </div>
        </div>
    );
}

export default App;
