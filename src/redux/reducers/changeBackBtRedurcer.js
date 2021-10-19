import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function changeBackBtRedurcer(state = intialState.backBtState,action)
{
  
    switch (action.type) { 
        case actionTypes.SHOW_HIDE_BACKBT:
            return action.payload;
                
        default:
            return state;
    }
}