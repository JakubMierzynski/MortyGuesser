import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchMorty = createAsyncThunk(
    "morty/fetch",
    async (character, ThunkAPI) => {
        try {
            const rndInt = Math.floor(Math.random() * 826) + 1
            const res = await fetch(`https://rickandmortyapi.com/api/character/${rndInt}`, {
                method: "GET"
            })
            const data = await res.json()
            return data
        }
        catch(err) {
            return ThunkAPI.rejectWithValue(err)
        }
    }
)
export const fetchAllCharacters = createAsyncThunk(
    "allCharacters/fetch",
    async (character, ThunkAPI) => {
        try {
            const res = await fetch("https://rickandmortyapi.com/api/character", {
                method: "GET"
            })

            const data = await res.json()
            let results = data.results
            let nextUrl = data.info.next || undefined

            while (nextUrl) {
                const nextRes = await fetch(nextUrl, {
                    method: "GET"
                })

                const newData = await nextRes.json()
                const newResults = newData.results
                nextUrl = newData.info.next

                results.push(...newResults)
            }

            const onlyNames = []
            results.forEach((character) => onlyNames.push(character.name))
            
            return [...new Set(onlyNames)]
        }
        catch(err) {
            return ThunkAPI.rejectWithValue(err)
        }
    }
)
