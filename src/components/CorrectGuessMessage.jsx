import React from 'react';

const CorrectGuessMessage = ({ character, image_properties, nextPlayer }) => (
    <div className="correct_guess">
        <h2>Good guess!</h2>
        <h2>{character.name}</h2>
        {image_properties}
        <button className="myButton" onClick={nextPlayer}>NEXT</button>
    </div>
);

export default CorrectGuessMessage;
