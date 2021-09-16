import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function categoryListReducer(state = intialState.categories,action)
{
   
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            debugger;
            return action.payload;
                
        default:
            return state;
    }
}