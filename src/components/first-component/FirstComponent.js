import React from 'react';
import './FirstComponent.css';
const FirstComponent = ({txt: text, image}) => { //{txt:''}
    //js code will be here

    return (
        //розмітка
        <div>
            <h2>
                {text}
            </h2>
            <img src={image} alt= ""/>
            <hr/>
        </div>
    );
};

export default FirstComponent;