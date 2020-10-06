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

let favorites = localStorage.getItem('favorites');

const initialState = {
    lists: [],
    selectItem: {},
    searchTitle: '',
    totalResults: "",
    favorites: [],
    favoriteStore: JSON.parse(favorites),
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SELECT_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
                isLogged: false,
                error: null
            };
        case SELECT_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged: true,
                selectItem: action.payload
            };
        case SELECT_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                isLogged: false,
                selectItem: {}
            };
        case POST_MOVIE_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                isLogged: false,
                error: null
            };
        case POST_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged: true,
                lists: action.payload,
                searchTitle: action.title,
                totalResults: action.totalResults
            };
        case POST_MOVIE_LIST_FAILED:
            return {
                ...state,
                loading: false,
                isLogged: false,
                lists: [],
                searchTitle: "Invalid Title",
                error: "Yo should search invalid value"
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
                favoriteStore: localStorage.setItem('favorites', JSON.stringify(state.favorites))
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(element => element.imdbID !== action.payload)
            };
        case FETCH_FAVORITE_REQUEST:
            return {
                ...state,
                loading: true,
                isLogged: false,
                error: null
            };
        case FETCH_FAVORITE_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged: true,
                favoriteStore: action.payload
            };
        default:
            return state;
    }
}
