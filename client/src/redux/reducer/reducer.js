import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_DETAIL, CLEAN_DETAIL, SEARCH_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_SOURCE, ORDER_VIDEOGAMES} from "../actions/action-types";

const initialState = {
    allVideogames:[],
    copyAllVideogames:[],
    detailVideogame: {},
    filterGenre: "defect",
    filterSource: "defect",
}
    
function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                copyAllVideogames: action.payload
            };
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                detailVideogame: action.payload
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                detailVideogame: {}
            };
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            };
        case FILTER_BY_GENRE:
            if(state.filterSource !== "defect"){
                const allVideogamesFilterBySource = state.filterSource === "api" ? [...state.copyAllVideogames].filter((videogame) => !isNaN(videogame.id)) : [...state.copyAllVideogames].filter((videogame) => isNaN(videogame.id));
                const allVideogamesFilterByGenre = action.payload === "defect" ? allVideogamesFilterBySource : allVideogamesFilterBySource.filter(videogame => videogame.genres.some(genre => genre.name === action.payload));
                return {
                    ...state,
                    allVideogames: allVideogamesFilterByGenre,
                    filterGenre: action.payload
                };
            }else{
                const allVideogamesFilterByGenre = action.payload === "defect" ? [...state.copyAllVideogames] : [...state.copyAllVideogames].filter(videogame => videogame.genres.some(genre => genre.name === action.payload));
                return {
                    ...state,
                    allVideogames: allVideogamesFilterByGenre,
                    filterGenre: action.payload,
                };
            }
        case FILTER_BY_SOURCE:
            if(state.filterGenre !== "defect"){
                const allVideogamesFilterByGenre = [...state.copyAllVideogames].filter(videogame => videogame.genres.some(genre => genre.name === state.filterGenre));
                if(action.payload === "api"){
                    const allVideogamesFilterBySource = allVideogamesFilterByGenre.filter((videogame) => !isNaN(videogame.id));
                    return {
                        ...state,
                        allVideogames: allVideogamesFilterBySource,
                        filterSource: action.payload
                    };
                }else{
                    const allVideogamesFilterBySource = action.payload === "defect" ? allVideogamesFilterByGenre : allVideogamesFilterByGenre.filter((videogame) => isNaN(videogame.id));
                    return {
                        ...state,
                        allVideogames: allVideogamesFilterBySource,
                        filterSource: action.payload
                    };
                }
            }else{
                if(action.payload === "api"){
                    const allVideogamesFilterBySource = action.payload === "defect" ? [...state.copyAllVideogames] : [...state.copyAllVideogames].filter((videogame) => !isNaN(videogame.id));
                    return {
                        ...state,
                        allVideogames: allVideogamesFilterBySource,
                        filterSource: action.payload
                    };
                }else{
                    const allVideogamesFilterBySource = action.payload === "defect" ? [...state.copyAllVideogames] : [...state.copyAllVideogames].filter((videogame) => isNaN(videogame.id));
                    return {
                        ...state,
                        allVideogames: allVideogamesFilterBySource,
                        filterSource: action.payload
                    };
                }
            }
            case ORDER_VIDEOGAMES:
                switch(action.payload){
                    case "ascendente":
                        const allVideogamesASC = [...state.allVideogames].sort((a, b) => a.name.localeCompare(b.name));
                        return {
                            ...state,
                            allVideogames: allVideogamesASC
                        };
                    case "descendente":
                        const allVideogamesDES = [...state.allVideogames].sort((a, b) => b.name.localeCompare(a.name));
                        return {
                            ...state,
                            allVideogames: allVideogamesDES
                        };
                    case "higher-rating":
                        const allVideogamesRatingHigher = [...state.allVideogames].sort((a, b) => b.rating - a.rating);
                        return {
                            ...state,
                            allVideogames: allVideogamesRatingHigher
                        };
                    case "lower-rating":
                        const allVideogamesRatingLower = [...state.allVideogames].sort((a, b) => a.rating - b.rating);
                        return {
                            ...state,
                            allVideogames: allVideogamesRatingLower
                        };
                    default:
                        return {
                            ...state
                        };
                }
        default:
            return {
                ...state
            };
    };
}

export default reducer;