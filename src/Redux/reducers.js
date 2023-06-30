import { addFav,removeFav } from "./actions"



const initialState={
    myFavorites:[]
}
 export default function rootReducer(state = initialState ,actions){
    switch(actions.type){
        case("ADD_FAV"):
        return {...state,myFavorites:[...state.myFavorites,actions.payload]}
       case("REMOVE_FAV"):
       return {...state,myFavorites:state.myFavorites.filter(element => element !== parseInt(actions.payload))}
        default:
            return {...state};
    }
 }