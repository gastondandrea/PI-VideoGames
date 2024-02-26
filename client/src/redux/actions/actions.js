import { GET_ALL_VIDEOGAMES , GET_VIDEOGAME_DETAIL, CLEAN_DETAIL, SEARCH_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_SOURCE, ORDER_VIDEOGAMES } from "./action-types";
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
            console.log(error)
        }
    };
}


export const filterByGenre = (genre) =>{
    return function(dispatch){
        return dispatch({type: FILTER_BY_GENRE, payload: genre});
    };
}

export const filterBySource = (source) =>{
    return function(dispatch){
        return dispatch({type: FILTER_BY_SOURCE, payload: source});
    };
}
    

export const orderVideogames = (order) =>{
    return function(dispatch){
        return dispatch({type: ORDER_VIDEOGAMES, payload: order});
    };
}

