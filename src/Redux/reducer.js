import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV, SHOW_ALL } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_FAV:
            return {...state, 
                myFavorites: [...state.myFavorites, action.payload], 
                allCharacters: [...state.allCharacters, action.payload]
            }
            
        case REMOVE_FAV:
            return {...state, 
                myFavorites: state.myFavorites.filter(
                    (character)=> character.id !== action.payload),
                allCharacters: state.allCharacters.filter(
                    (character)=> character.id !== action.payload),
            }
        case FILTER_CARDS: return {...state,
                allCharacters: state.myFavorites.filter(
                    (character) => character.gender === action.payload),
                }
        case ORDER_CARDS: {
                if(action.payload === "D"){
                    return{...state,
                        allCharacters: state.myFavorites.sort(function(a,b){
                            if (a.id < b.id) return 1;
                            if (a.id > b.id) return -1;
                        }), 
                    }
                }
                if(action.payload === "A"){
                    return{...state,
                        allCharacters: state.myFavorites.sort(function(a,b){
                            if (a.id > b.id) return 1;
                            if (a.id < b.id) return -1;
                        }), //myFavorites:state.allCharacters
                    } 
                }
        }
        case SHOW_ALL:
            return {...state, allCharacters: state.myFavorites}
        
        default:{
            return {...state};  
        }
    }
}
export default rootReducer;