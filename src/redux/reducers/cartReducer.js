import * as actionTypes from "../actions/actionTypes"
import intialState from "./intialState";

export default function cartReducer(state = intialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CARD:
            var additem = state.find(c => c.product.id === action.payload.product.id);
            if (additem) {

               var newState = state.map(cartitem =>{
                     if(cartitem.product.id === action.payload.product.id)
                    {      return Object.assign({},additem,{quantity:additem.quantity + 1})
                    }     

                    return  cartitem;
               }); 
                console.log("Ekli olan sayısı artırdlı");
                return newState;
            }   
            else {
                console.log("eklendi");
                return [...state,{...action.payload}];
            }  
        
        case actionTypes.REMOVE_FORM_CARD:
         
            var newstate2 = state.filter(c => c.product.id !== action.payload.id);
            return newstate2;

             
        default:
            return state;
               
      }  
} 