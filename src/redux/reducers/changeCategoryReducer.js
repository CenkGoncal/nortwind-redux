import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function changeCategoryReducer(state = intialState.currentCategory,action)
{
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
                
        default:
            return state;
    }
}