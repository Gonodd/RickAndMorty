export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const SHOW_ALL = "SHOW_ALL";


export const addFav = (character) => {
    return {type: ADD_FAV, payload:character}
}

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload:id}
}

export const filterCards=(gender)=>{
    return {type: FILTER_CARDS, payload: gender}
}

export const  orderCards = (param)=>{
    if(param === "A") return {type: ORDER_CARDS, payload: "A"}
    if(param === "D") return {type: ORDER_CARDS, payload: "D"}
}

export const showAll =()=>{
    return {type: SHOW_ALL}
}