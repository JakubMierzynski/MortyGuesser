import { configureStore } from "@reduxjs/toolkit";
import { allCharactersReducer, mortyReducer } from "./mortySlice";


export const store = configureStore({
    reducer: {
        character: mortyReducer,
        characters: allCharactersReducer
    }

})
