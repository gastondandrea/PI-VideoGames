import { GET_ALL_VIDEOGAMES , GET_VIDEOGAME_DETAIL, CLEAN_DETAIL, SEARCH_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_SOURCE, ORDER_VIDEOGAMES, POST_VIDEOGAMES, GET_ALL_GENRES } from "./action-types";
import axios from "axios";

export function getAllVideogames(){
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/videogames`)).data;
            return dispatch({type: GET_ALL_VIDEOGAMES, payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
};


export function getVideogameById(id){
    return async (dispatch) => {
        try{
            const infoAPI = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
            return dispatch({type: GET_VIDEOGAME_DETAIL, payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    };
};

export const cleanDetail = () =>{
    return {type: CLEAN_DETAIL};
}


export function getVideogamesByName(name){
    return async (dispatch) => {
        try{
            const infoAPI = (await axios.get(`http://localhost:3001/videogames/?name=${name}`)).data;
            return dispatch({type: SEARCH_VIDEOGAMES, payload: infoAPI});
        } catch (error) {
            alert(error.response.data.error);
        }
    };
}


export const filterByGenre = (genre) =>{
    return {
        type: FILTER_BY_GENRE, 
        payload: genre
    };
}

export const filterBySource = (source) =>{
    return {
        type: FILTER_BY_SOURCE, 
        payload: source
    };
}
    

export const orderVideogames = (order) =>{
    return {
            type: ORDER_VIDEOGAMES,
            payload: order
        };
}


export function postVideogames(videogame){
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.post(`http://localhost:3001/videogames`, videogame)).data;
            alert("Videogame Creado!");
            return dispatch({type: POST_VIDEOGAMES, payload: infoAPI});
        } catch (error) {
            alert("Necesitas rellenar todos los campos")
        }
    }
};

export function getAllGenres(){
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/genres`)).data;
            return dispatch({type: GET_ALL_GENRES, payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
};
