import React from 'react';

const Tips = ({ character, showTip1, showTip2, showTip3, tip1Clicked, tip2Clicked, tip3Clicked }) => (
    <>
        {tip1Clicked ? <h1>Species: {character.species}</h1> : <button className="myButton" onClick={showTip1}>TIP #1</button>}
        {tip2Clicked ? <h1>Location: {character.location.name}</h1> : <button className="myButton" onClick={showTip2}>TIP #2</button>}
        {tip3Clicked ? <h1>Status: {character.status}</h1> : <button className="myButton" onClick={showTip3}>TIP #3</button>}
    </>
);

export default Tips;