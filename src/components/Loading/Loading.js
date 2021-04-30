import React from 'react';
import './Loading.css';
import egglie from '../../assets/egglieFace.png';

function Loading(props) {
    return (
        <div className={props.loading ? 'hiddenLoader' : 'visibleLoader'}>
            <img src={egglie} alt="" />
            <p className="loadingText">Loading...</p>
        </div>
    );
}

export default Loading;
