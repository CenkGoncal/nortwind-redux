import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function removeApiReducer(state = intialState.removeState, action) {

    switch (action.type) {
        case actionTypes.REMOVE_PRODUCT_SUCCESS:
            return action.payload;
        case actionTypes.REMOVE_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}