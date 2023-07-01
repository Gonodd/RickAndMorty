import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const SHOW_ALL = "SHOW_ALL";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
        return async (dispatch) => {
            const response = axios.post(endpoint, character)
            return dispatch({ type: 'ADD_FAV', payload: response.data });
        }
    } catch (error) {
        console.log(error)
    }
};


/*export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character)
            .then(({ data }) => {
                return dispatch({ type: 'ADD_FAV', payload: data });
            });
    };
};*/

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    try {
        return async (dispatch) => {
            const response = axios.delete(endpoint)
            return dispatch({ type: 'REMOVE_FAV', payload: response.data });
        };
    } catch (error) {
        console.log(error);
    }

};

/*export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint)
            .then(({ data }) => {
                return dispatch({ type: 'REMOVE_FAV', payload: data });
            });
    };
};*/

export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender }
}

export const orderCards = (param) => {
    if (param === "A") return { type: ORDER_CARDS, payload: "A" }
    if (param === "D") return { type: ORDER_CARDS, payload: "D" }
}

export const showAll = () => {
    return { type: SHOW_ALL }
}