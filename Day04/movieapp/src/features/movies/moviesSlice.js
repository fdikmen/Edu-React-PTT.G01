import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../config/axiosConfig'
const initialState = {
    movies: [],
    movie: {},
    status: true,
    error: null
}

/**
 * acitonObject = { type: ... , payload: ... }
 */
// GET MOVIES
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const { data } = await API.get('/movies');
    return data;
});

// ADD MOVIE
export const addMovie = createAsyncThunk('movies/addMovie', async (movie) => {
    const { data } = await API.post('/movies', movie);
    return data;
});

// DELETE MOVIE
export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id) => {
    const { data } = await API.delete(`/movies/${id}`);
    return data;
});

// GET MOVIE by ID
export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id) => {
    const { data } = await API.get(`/movies/${id}`);
    return data;
});

// UPDATE MOVIE
export const updateMovie = createAsyncThunk('movies/updateMovie', async (movie) => {
    const { data } = await API.put(`/movies/${movie.id}`, movie);
    return data;
});


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
        //FETCH MOVIES
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
            state.status = true;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        },
        //ADD MOVIE
        [addMovie.pending]: (state, action) => {
            state.status = false;
            console.log('pending');
        },
        [addMovie.fulfilled]: (state, action) => {
            state.status = true;
            state.movie = action.payload;
            console.log('fulfilled', action.payload);
        },
        [addMovie.rejected]: (state, action) => {
            state.status = true;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        },
        //DELETE MOVIE
        [deleteMovie.pending]: (state, action) => {
            state.status = false;
            console.log('pending');
        },
        [deleteMovie.fulfilled]: (state, action) => {
            state.status = true;
            const deletedMovie = action.payload;
            state.movies = state.movies.filter(movie => movie.id !== deletedMovie.id);
            console.log('fulfilled', action.payload);
        },
        [deleteMovie.rejected]: (state, action) => {
            state.status = true;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        },
        //FETCH MOVIE BY ID
        [fetchMovieById.pending]: (state, action) => {
            state.status = false;
            console.log('pending');
        }
        ,
        [fetchMovieById.fulfilled]: (state, action) => {
            state.status = true;
            state.movie = action.payload;
            console.log('fulfilled', action.payload);
        }
        ,
        [fetchMovieById.rejected]: (state, action) => {
            state.status = true;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        },
// UPDATE MOVIE

        [updateMovie.pending]: (state, action) => {
            state.status = false;
            console.log('pending');
        }
        ,
        [updateMovie.fulfilled]: (state, action) => {
            state.status = true;
            state.movie = action.payload;
            console.log('fulfilled', action.payload);
        }
        ,
        [updateMovie.rejected]: (state, action) => {
            state.status = true;
            state.error = action.error.message;
            console.log('rejected', action.payload);
        },


    }
});


export default moviesSlice.reducer; // reducer