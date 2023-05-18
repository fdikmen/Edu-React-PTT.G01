import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../config/axiosConfig'
const initialState = {
    movies: [],
    status: true,
    error: null
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const { data } = await API.get('/movies');
    return data;
});
// SUCCESS -> movies/fetchMovies/fulfilled
// LOADING -> movies/fetchMovies/pending
// ERROR -> movies/fetchMovies/rejected

const moviesSlice = createSlice({
    name: 'movies', // name of the slice // TYPE
    initialState, // initial state of the slice ,
    reducers: {
        // actions
        // action creators
        // action types
    },
    extraReducers: {
        // actions
        // action creators
        // action types,
        [fetchMovies.pending]: (state, action) => {
            state.status = false;
            console.log('pending');
        }
        ,
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = true;
            state.movies = action.payload;
            console.log('fulfilled', action.payload);
        }
        ,
        [fetchMovies.rejected]: (state, action) => {
            state.status = true;;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        }

    }
});


export default moviesSlice.reducer; // reducer