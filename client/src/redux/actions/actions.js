import { GET_ALL_VIDEOGAMES } from "./action-types";
import axios from "axios";

export const getAllVideogames = () => {
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/videogames`)).data;
            return dispatch ({type: GET_ALL_VIDEOGAMES, payload: infoAPI})
        } catch (error) {
            console.log(error);
        }
    }
}