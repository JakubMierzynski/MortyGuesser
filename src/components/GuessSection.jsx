import React from 'react';
import Tips from './Tips';
import { AutocompleteComponent } from './Autocomplete';

const GuessSection = ({
    character,
    image_properties,
    guess,
    setGuess,
    guessInput,
    setGuessInput,
    allCharacters,
    onSubmit,
    skipFunc,
    showTip1,
    showTip2,
    showTip3,
    tip1Clicked,
    tip2Clicked,
    tip3Clicked,
}) => (
    <>
        <div className="guess_div">
            <h1>Guess the character</h1>
        </div>
        <div>
            {image_properties}
        </div>
        <Tips
            character={character}
            showTip1={showTip1}
            showTip2={showTip2}
            showTip3={showTip3}
            tip1Clicked={tip1Clicked}
            tip2Clicked={tip2Clicked}
            tip3Clicked={tip3Clicked}
        />
        <AutocompleteComponent
            guess={guess}
            setGuess={setGuess}
            guessInput={guessInput}
            setGuessInput={setGuessInput}
            allCharacters={allCharacters}
        />
        <div className="bottom">
            <button className="myButton" onClick={onSubmit}>SUBMIT</button>
            <button className="myButton" onClick={skipFunc}>SKIP</button>   
        </div> 
    </>
);

export default GuessSection;