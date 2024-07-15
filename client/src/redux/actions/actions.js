import { GET_ALL_VIDEOGAMES , GET_VIDEOGAME_DETAIL, CLEAN_DETAIL, SEARCH_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_SOURCE, ORDER_VIDEOGAMES, POST_VIDEOGAMES, GET_ALL_GENRES, SHOW_ALERT, HIDE_ALERT, SET_IS_LONDING, IS_SEACH } from "./action-types";
import axios from "axios";


export function getAllVideogames() {
    return async (dispatch) => {
        dispatch(setIsLoading(true)); // Inicia el estado de carga
        try {
            const response = await axios.get('pi-videogames-production-45a7.up.railway.app/videogames');
            dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: response.data,
            });
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setIsLoading(false)); // Finaliza el estado de carga
        }
    };
};

export function getVideogameById(id){
    return async (dispatch) => {
        try{
            const infoAPI = (await axios.get(`pi-videogames-production-45a7.up.railway.app/videogames/${id}`)).data;
            return dispatch({type: GET_VIDEOGAME_DETAIL, payload: infoAPI});
        } catch (error) {
            dispatch(showAlert('No se pudieron recuperar los detalles del videojuego.'));
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
            dispatch(setIsLoading(true)); // Inicia el estado de carga
            const infoAPI = (await axios.get(`pi-videogames-production-45a7.up.railway.app/videogames/?name=${name}`)).data;
            return dispatch({type: SEARCH_VIDEOGAMES, payload: infoAPI});
        } catch (error) {
            dispatch(showAlert(error.response.data.error));
            console.log(error.response.data.error);
        } finally {
            dispatch(setIsLoading(false)); // Finaliza el estado de carga
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
            const infoAPI = (await axios.post(`pi-videogames-production-45a7.up.railway.app/videogames`, videogame)).data;
            alert("Videogame Creado!");
            return dispatch({type: POST_VIDEOGAMES, payload: infoAPI});
        } catch (error) {
            dispatch(showAlert('No se pudo crear el videojuego. Por favor llena todos los espacios.'));
        }
    }
};

export function getAllGenres(){
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.get(`pi-videogames-production-45a7.up.railway.app/genres`)).data;
            return dispatch({type: GET_ALL_GENRES, payload: infoAPI});
        } catch (error) {
            console.log(error);
        }
    }
};

export const showAlert = (message) =>{
    return {
            type: SHOW_ALERT,
            payload: message,
        };
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
};

export const setIsLoading = (isLoading) =>{
    return {
            type: SET_IS_LONDING,
            payload: isLoading,
        };
}

export const setIsSeach = (isSeach) =>{
    return {
            type: IS_SEACH,
            payload: isSeach,
        };
}
