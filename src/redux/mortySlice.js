import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCharacters, fetchMorty } from "./operations";


const mortySlice = createSlice({
    name: "character",
    initialState: {
        items: [],
        error: null,
        isLoading: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMorty.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMorty.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.items = action.payload
            })
            .addCase(fetchMorty.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})


const allCharactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        error: null,
        isLoading: false
    },
        extraReducers: (builder) => {
            builder
                .addCase(fetchAllCharacters.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(fetchAllCharacters.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.error = null
                    state.items = action.payload
                })
                .addCase(fetchAllCharacters.rejected, (state, action) => {
                    state.isLoading = false
                    state.error = action.payload
                })
        }


})

export const mortyReducer = mortySlice.reducer
export const allCharactersReducer = allCharactersSlice.reducer