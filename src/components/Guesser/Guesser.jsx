import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCharacters, fetchMorty } from "../../redux/operations";
import { allCharactersSelector, characterSelector } from "../../redux/selector";
import "../../style/style.css";
import { Logo } from "../Logo";
import { AutocompleteComponent } from "../Autocomplete";
import GuessSection from "../GuessSection";
import CorrectGuessMessage from "../CorrectGuessMessage";
import SkippedMessage from "../SkippedMessage";
import { nextPlayer } from "../../functions/nextPlayer";

export const Guesser = () => {
    const character = useSelector(characterSelector)
    const allCharacters = useSelector(allCharactersSelector)
    const dispatch = useDispatch()
    const [guess, setGuess] = useState("")
    const [guessInput, setGuessInput] = useState("")
    const [isAnswered, setIsAnswered] = useState(false) 
    const [blurLevel, setBlurLevel] = useState(10)
    const [tip1Clicked, setTip1Clicked] = useState(false)
    const [tip2Clicked, setTip2Clicked] = useState(false)
    const [tip3Clicked, setTip3Clicked] = useState(false)
    const [isSkipped, setIsSkipped] = useState(false)

    const [isStreakOn, setisStreakOn] = useState(true)
    const [streak, setStreak] = useState(0)

    const image_properties = 
        <img
            src={character.image}
            height="250"
            id="character_image"
            alt="Zgadnij bohatera"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
        />


    useEffect(() => {
        dispatch(fetchMorty())
        dispatch(fetchAllCharacters())
    }, [])

    useEffect(() => {
        const character_image = document.getElementById("character_image")

        if (character_image) {
            character_image.style.filter = `blur(${blurLevel}px)`
        }
    
    }, [blurLevel, isSkipped, isAnswered])

    // FUNKCJE

    const resetGameState = () => {
        setGuess("");
        setBlurLevel(10);
        setIsSkipped(false);
        setTip1Clicked(false);
        setTip2Clicked(false);
        setTip3Clicked(false);
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const inputElement = document.querySelector(".MuiAutocomplete-root");

        if (character.name === guess) {
            setBlurLevel(0)
            setIsAnswered(true)

        } else {
            setBlurLevel(prevBlur => Math.max(0, prevBlur - 2))

            if (inputElement) {
                inputElement.classList.add("error");
    
                setTimeout(() => {
                    inputElement.classList.remove("error");
                }, 500);
            }
        }
    }

    const skipFunc = (e) => {
        e.preventDefault()
        setBlurLevel(0)
        setisStreakOn(false)
        setIsSkipped(true);
    }

    const showTip1 = () => {
        setTip1Clicked(true)
    }

    const showTip2 = () => {
        setTip2Clicked(true)
    }

    const showTip3 = () => {
        setTip3Clicked(true)
    }


    const nextPlayer = () => {
        dispatch(fetchMorty())
        resetGameState()

        if(isStreakOn) {
            setGuess("");
            setBlurLevel(10);
            setIsSkipped(false);
            setTip1Clicked(false);
            setTip2Clicked(false);
            setTip3Clicked(false);
            setIsAnswered(false)
            setStreak(streak + 1)
        }

        else {
            setGuess("");
            setBlurLevel(10);
            setIsSkipped(false);
            setTip1Clicked(false);
            setTip2Clicked(false);
            setTip3Clicked(false);
            setIsAnswered(false)
            setisStreakOn(true)
            setStreak(0)
        }
    }

    return (
        <>
            <Logo />

            <div className="container">   
                {isSkipped && !isAnswered && (
                    <SkippedMessage 
                        streak={streak}
                        character={character}
                        image_properties={image_properties}
                        nextPlayer={nextPlayer}
                    />
                )}
                
                {!isSkipped && isAnswered && (
                    <CorrectGuessMessage 
                        character={character}
                        image_properties={image_properties}
                        nextPlayer={nextPlayer}
                    />
                )}

                {!isSkipped && !isAnswered && (
                    <GuessSection
                        character={character}
                        image_properties={image_properties}
                        guess={guess}
                        setGuess={setGuess}
                        guessInput={guessInput}
                        setGuessInput={setGuessInput}
                        allCharacters={allCharacters}
                        onSubmit={onSubmit}
                        skipFunc={skipFunc}
                        showTip1={showTip1}
                        showTip2={showTip2}
                        showTip3={showTip3}
                        tip1Clicked={tip1Clicked}
                        tip2Clicked={tip2Clicked}
                        tip3Clicked={tip3Clicked}
                    />
                )}
            </div>
        </>
    );
}