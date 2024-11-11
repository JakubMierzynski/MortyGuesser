export function nextPlayer (dispatch, fetchMorty, setIsAnswered, setGuess, setBlurLevel, setTip1Clicked, setTip2Clicked, setTip3Clicked) {
    dispatch(fetchMorty())
    setIsAnswered(false)
    setGuess("")
    setBlurLevel(10)
    setTip1Clicked(false)
    setTip2Clicked(false)
    setTip3Clicked(false)
}
