import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const AutocompleteComponent = ({guess, setGuess, guessInput, setGuessInput, allCharacters}) => {
    return (
        <Autocomplete
        value={guess}
        onChange={(e, newValue) => setGuess(newValue)}
        inputValue={guessInput}
        onInputChange={(event, newInputValue) => {
            setGuessInput(newInputValue);
        }}
        
        placeholder="Enter your guess"
        freeSolo
        disableClearable
        clearOnEscape
        options={allCharacters}
        getOptionLabel={(option) => option}

        filterOptions={(options, { inputValue }) => {
            const lowerCaseInput = inputValue.toLowerCase();

            if (lowerCaseInput === "") {
                return [];
            }
            
            return options.filter((option) =>
                option.toLowerCase().includes(lowerCaseInput));

        }}

        sx={{
            backgroundColor: 'black', 
            borderRadius: '15px',
            '& .MuiOutlinedInput-root': {
                borderRadius: '15px',
                '& fieldset': {
                borderColor: '#42b3c9',
                },
                '&:hover fieldset': {
                borderColor: '#42b3c9',
                },
                '&.Mui-focused fieldset': {
                borderColor: '#42b3c9',
                },
            },
            '& .MuiInputLabel-root': {
                color: '#42b3c9',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: '#42b3c9', // Kolor labela po fokusie  
            },
                width: 300,
            '& .MuiInputBase-input': {
                fontFamily: 'Arial',
                fontSize: '16px',
                color: '#42b3c9'
            },
        }}

        ListboxProps={{
            sx: {
                borderRadius: '15px',
                maxHeight: '150px',
                overflowY: 'auto',
                backgroundColor: 'black',
                border: '1px solid #42b3c9',
                '& .MuiAutocomplete-option': {
                    color: '#42b3c9',
                },
            },
        }}

        componentsProps={{
            popper: {
                modifiers: [
                {
                    name: 'flip',
                    enabled: false
                },
                {
                    name: 'preventOverflow',
                    enabled: false
                    }
                ]
            }
            }}
        
        renderInput={(params) => <TextField {...params} label="Guess here!" placeholder="Enter a character name"/>}
        />
    )
}
