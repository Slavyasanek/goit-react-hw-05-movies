import { discoverMovies, getTrendingMovies } from "helpers/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const TrendingMovies = createAsyncThunk(
    'films/trending',
    async (_, thunkAPI) => {
        try {
            const {films: {page, language}} = thunkAPI.getState()
            return await getTrendingMovies(page, language);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const filteringMovies = createAsyncThunk('fims/filtering',
async(_, thunkAPI) => {
    try {
        const {films: {page, language, genres}} = thunkAPI.getState();
        return await discoverMovies(page, language, genres)
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

// export const searchingMovies = createAsyncThunk('films/search',
//     async (_, thunkAPI) => {
//         try {
//             const { films: {page, query} } = thunkAPI.getState()
//             return await searchingMovies(query, page)
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     })