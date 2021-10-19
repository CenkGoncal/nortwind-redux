import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function removeProductReducer(state = intialState.savedProduct, action) {

    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:

            return action.payload;
        case actionTypes.CREATE_PRODUCT_SUCCESS:

            return action.payload;
        default:
            return state;
    }
}