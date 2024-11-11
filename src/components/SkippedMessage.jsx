import React from 'react';

const SkippedMessage = ({ streak, character, image_properties, nextPlayer }) => (
    <div className="correct_guess">
        <h2>This was a hard one! <br /></h2>
        {streak === 0 ? (
            <>
                <h2>Don't give up!</h2>
                <h2>{character.name}</h2>
                {image_properties}
                <button onClick={nextPlayer}>NEXT</button>
            </>
        ) : (
            <>
                <h2>But you had {streak} {streak === 1 ? "good answer!" : "answers in a row!"}</h2>
                <h2>{character.name}</h2>
                {image_properties}
                <button onClick={nextPlayer}>NEXT</button>
            </>
        )}
    </div>
);

export default SkippedMessage;