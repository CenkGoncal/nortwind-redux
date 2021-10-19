import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function categoryListReducer(state = intialState.categories,action)
{
   
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:

            return action.payload;
                
        default:
            return state;
    }
}
//reducular state yönetiminin yapıldıgı yerdir.