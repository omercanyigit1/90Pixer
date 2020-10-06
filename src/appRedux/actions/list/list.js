import {
    POST_MOVIE_LIST_REQUEST,
    POST_MOVIE_LIST_SUCCESS,
    POST_MOVIE_LIST_FAILED,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SELECT_MOVIE_REQUEST,
    SELECT_MOVIE_SUCCESS,
    SELECT_MOVIE_FAILED,
    FETCH_FAVORITE_REQUEST,
    FETCH_FAVORITE_SUCCESS,
    FETCH_FAVORITE_FAILED
} from "./../../types";
import axios from 'axios';

export const addFavoriteSuccess = (item) => ({
    type: ADD_FAVORITE,
    payload: item
});

export const removeFavoriteSuccess = (item) => ({
    type: REMOVE_FAVORITE,
    payload: item
});

export const selectMovieRequest = () => ({
    type: SELECT_MOVIE_REQUEST,
});

export const selectMovieSuccess = (data) => ({
    type: SELECT_MOVIE_SUCCESS,
    payload: data
});

export const selectMovieFailed = error => ({
    type: SELECT_MOVIE_FAILED,
    payload: error
});

export const fetchFavoriteRequest = () => ({
    type: FETCH_FAVORITE_REQUEST,
});

export const fetchFavoriteSuccess = (data) => ({
    type: FETCH_FAVORITE_SUCCESS,
    payload: data
});

export const fetchFavoriteFailed = error => ({
    type: FETCH_FAVORITE_FAILED,
    payload: error
});


export const postMovieListRequest = () => ({
    type: POST_MOVIE_LIST_REQUEST
});

export const postMovieListFailed = error => ({
    type: POST_MOVIE_LIST_FAILED,
    payload: error
});

export const postMovieListSuccess = (data, title, totalResults) => ({
    type: POST_MOVIE_LIST_SUCCESS,
    payload: data,
    title: title,
    totalResults: totalResults
});

export const postMovieList = (data) => {

    return dispatch => {
        dispatch(postMovieListRequest());
        axios.post(`http://www.omdbapi.com/?apikey=afb64019&s=${data.movieName}&y=${data.year}&type=${data.movieType}`).then((response) => {
            console.log("search: ", response.data);
            dispatch(postMovieListSuccess(response.data.Search, data.movieName, response.data.totalResults));
        }).catch((e) => {
            dispatch(postMovieListFailed(e));
        })
    }
};

export const fetchFavoriteList = () => {
    let favorites = localStorage.getItem('favorites');

    return dispatch => {
        dispatch(fetchFavoriteRequest());
        dispatch(fetchFavoriteSuccess(JSON.parse(favorites)));
    }
};

export const addFavorite = (item) => {
    return dispatch => {
        dispatch(addFavoriteSuccess(item));
    }
};

export const removeFavorite = (item) => {
    return dispatch => {
        dispatch(removeFavoriteSuccess(item));
    }
};

export const selectMovie = (id) => {

    console.log(id);

    return dispatch => {
        console.log(1);
        dispatch(selectMovieRequest());
        console.log(2);
        axios.get(`http://www.omdbapi.com/?apikey=afb64019&i=${id}`).then((response) => {
            console.log(3);
            dispatch(selectMovieSuccess(response.data));
            console.log(response.data);
        }).catch((e) => {
            dispatch(selectMovieFailed(e));
        })
    }
};
